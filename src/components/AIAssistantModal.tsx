"use client";

import { useState, useRef, useEffect, useCallback, ReactNode } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getAIResponse, streamResponse, suggestedChips } from "@/lib/aiEngine";

interface Message {
  role: "bot" | "user";
  text: string;
  isStreaming?: boolean;
}

/**
 * Lightweight safe Markdown renderer for chat messages.
 * Formats bold (**text**), italics (*text*), links ([label](url)), and line breaks.
 */
function FormattedMessage({ text }: { text: string }) {
  const renderInline = (line: string): ReactNode[] => {
    const tokenRegex = /(\[.*?\]\(https?:\/\/[^\s)]+\)|\[.*?\]\(mailto:[^\s)]+\)|\[.*?\]\(tel:[^\s)]+\)|\*\*.*?\*\*|\*[^*]+?\*)/g;
    const parts = line.split(tokenRegex);

    return parts.map((part, index) => {
      if (!part) return null;

      // Link: [label](url)
      const linkMatch = part.match(/^\[(.*?)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+|tel:[^\s)]+)\)$/);
      if (linkMatch) {
        return (
          <a
            key={index}
            href={linkMatch[2]}
            target={linkMatch[2].startsWith("http") ? "_blank" : undefined}
            rel={linkMatch[2].startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-[#14b8a6] underline underline-offset-2 font-medium hover:text-[#2dd4bf] transition-colors"
          >
            {linkMatch[1]}
          </a>
        );
      }

      // Bold: **text**
      if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
        return <strong key={index} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
      }

      // Italic: *text*
      if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
        return <em key={index} className="italic text-[#e2e8f0]">{part.slice(1, -1)}</em>;
      }

      return part;
    });
  };

  const lines = text.split("\n");

  return (
    <div className="space-y-1.5">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-2" />;
        }

        return (
          <div key={idx} className="min-h-[1.3em]">
            {renderInline(line)}
          </div>
        );
      })}
    </div>
  );
}

export default function AIAssistantModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const initialGreeting: Message = {
    role: "bot",
    text: "Hello! 👋 I'm **Mehboob Waqar's Portfolio AI Assistant**.\n\nFeel free to ask me anything about his work, production Flutter apps, IoT architecture, or background. How can I help you today?",
  };

  const [messages, setMessages] = useState<Message[]>([initialGreeting]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [showChips, setShowChips] = useState(true);

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const cancelStreamRef = useRef<(() => void) | null>(null);

  const scrollToBottom = useCallback(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus({ preventScroll: true });
        if (modalRef.current) {
          modalRef.current.scrollTop = 0;
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(index);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const handleResetChat = () => {
    if (cancelStreamRef.current) {
      cancelStreamRef.current();
    }
    setMessages([initialGreeting]);
    setInput("");
    setIsTyping(false);
    setShowChips(true);
  };

  const handleSend = useCallback(
    (text?: string) => {
      const query = (text || input).trim();
      if (!query || isTyping) return;

      setShowChips(false);
      setMessages((prev) => [...prev, { role: "user", text: query }]);
      setInput("");
      setIsTyping(true);

      const fullResponse = getAIResponse(query);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: "", isStreaming: true },
        ]);

        cancelStreamRef.current = streamResponse(
          fullResponse,
          (partialText) => {
            setMessages((prev) => {
              const updated = [...prev];
              const lastIdx = updated.length - 1;
              updated[lastIdx] = {
                ...updated[lastIdx],
                text: partialText,
                isStreaming: true,
              };
              return updated;
            });
          },
          () => {
            setMessages((prev) => {
              const updated = [...prev];
              const lastIdx = updated.length - 1;
              updated[lastIdx] = {
                ...updated[lastIdx],
                text: fullResponse,
                isStreaming: false,
              };
              return updated;
            });
            setIsTyping(false);
          }
        );
      }, 300);
    },
    [input, isTyping]
  );

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[1000] bg-black/65 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Floating AI Glassmorphic Card */}
          <motion.div
            ref={modalRef}
            onScroll={(e) => { e.currentTarget.scrollTop = 0; }}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-[1001] bottom-0 sm:bottom-6 right-0 sm:right-6 w-full sm:w-[440px] max-w-full sm:max-w-[calc(100vw-3rem)] h-[85vh] sm:h-[620px] sm:max-h-[calc(100vh-5rem)] rounded-t-3xl sm:rounded-3xl border border-white/15 bg-[#0d111a]/95 backdrop-blur-2xl shadow-2xl shadow-black/90 flex flex-col overflow-hidden"
          >
            {/* Ambient Lighting Contained Within Frame */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 rounded-3xl">
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#14b8a6]/15 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#06b6d4]/10 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <div className="px-5 py-4 border-b border-white/10 bg-[#0a0d14]/70 backdrop-blur-xl flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                {/* Mehboob Portrait Avatar with glowing teal ring & online status */}
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-[#14b8a6]/60 shadow-md shadow-[#14b8a6]/25 bg-[#0e121a]">
                    <Image
                      src="/mehboob-avatar.png"
                      alt="Mehboob Waqar"
                      fill
                      sizes="40px"
                      className="object-cover object-center"
                    />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#10b981] border-2 border-[#0d111a]" />
                  </span>
                </div>

                <div>
                  <div className="font-display text-sm font-bold text-white tracking-tight flex items-center gap-2">
                    Mehboob Waqar
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#14b8a6]">
                    <span>●</span>
                    <span>Portfolio AI Assistant</span>
                  </div>
                </div>
              </div>

              {/* Header Action Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  aria-label="Reset Conversation"
                  className="rounded-lg p-2 text-white/60 hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                    <path d="M3 21v-5h5" />
                  </svg>
                </button>

                <button
                  onClick={onClose}
                  title="Close AI Assistant"
                  aria-label="Close AI"
                  className="rounded-lg p-2 text-white/60 hover:text-red-400 hover:bg-red-500/10 transition-all cursor-pointer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div
              ref={messagesContainerRef}
              className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-5 space-y-4 ai-scroll"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`relative text-xs sm:text-sm leading-relaxed ${msg.role === "user"
                        ? "max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-[#14b8a6] to-[#0d9488] px-4 py-3 text-[#0a0d14] font-medium shadow-lg shadow-[#14b8a6]/15"
                        : "max-w-[90%] rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.04] p-4 text-[#cbd5e1] backdrop-blur-md shadow-sm"
                      }`}
                  >
                    {msg.isStreaming && msg.text === "" ? (
                      <div className="flex items-center gap-1.5 py-1">
                        <span className="h-2 w-2 rounded-full bg-[#14b8a6] animate-bounce [animation-delay:-0.3s]" />
                        <span className="h-2 w-2 rounded-full bg-[#14b8a6] animate-bounce [animation-delay:-0.15s]" />
                        <span className="h-2 w-2 rounded-full bg-[#14b8a6] animate-bounce" />
                      </div>
                    ) : (
                      <>
                        <FormattedMessage text={msg.text} />
                        {msg.role === "bot" && !msg.isStreaming && msg.text && (
                          <div className="mt-3 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#94a3b8]">
                            <span className="font-mono text-[10px] text-white/40">Portfolio AI</span>
                            <button
                              onClick={() => handleCopy(msg.text, i)}
                              className="inline-flex items-center gap-1.5 text-[11px] text-white/60 hover:text-[#14b8a6] transition-colors cursor-pointer"
                              title="Copy answer"
                            >
                              {copiedIdx === i ? (
                                <span className="text-[#14b8a6] font-medium">✓ Copied</span>
                              ) : (
                                <>
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                  </svg>
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested Chips Section */}
            {showChips && (
              <div className="border-t border-white/[0.08] bg-[#0a0d14]/75 px-4 pt-3 pb-2.5 backdrop-blur-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#14b8a6]">
                    <span>💡</span>
                    <span>Suggested Questions</span>
                  </div>
                  <button
                    onClick={() => setShowChips(false)}
                    className="font-mono text-[10px] text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
                  >
                    Hide
                  </button>
                </div>

                {/* Elegant Scrollable Chips without ugly thick scrollbars */}
                <div className="flex flex-wrap gap-1.5 max-h-[92px] overflow-y-auto ai-scroll pr-1 pb-1">
                  {suggestedChips.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => handleSend(chip)}
                      disabled={isTyping}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-[#cbd5e1] transition-all hover:border-[#14b8a6]/40 hover:bg-[#14b8a6]/10 hover:text-white active:scale-95 disabled:opacity-40 cursor-pointer"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Footer Area */}
            <div className="p-3 sm:p-4 border-t border-white/10 bg-[#090c13]/90 backdrop-blur-xl flex items-center gap-2 sm:gap-3 shrink-0">
              {!showChips && (
                <button
                  onClick={() => setShowChips(true)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#14b8a6] hover:bg-[#14b8a6]/10 hover:border-[#14b8a6]/40 transition-all cursor-pointer text-sm"
                  title="Show suggested questions"
                >
                  💡
                </button>
              )}

              <input
                ref={inputRef}
                type="text"
                placeholder="Ask about Court Pro, IoT, skills, or contact..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleInputKeyDown}
                disabled={isTyping}
                className="flex-1 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-[#64748b] focus:border-[#14b8a6] focus:outline-none focus:ring-1 focus:ring-[#14b8a6]/40 transition-all"
              />

              <button
                onClick={() => handleSend()}
                disabled={isTyping || !input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#14b8a6] text-[#0a0d14] font-bold transition-all hover:bg-[#2dd4bf] hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 disabled:hover:bg-[#14b8a6] cursor-pointer shadow-md shadow-[#14b8a6]/20"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
