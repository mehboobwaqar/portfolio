"use client";

import { useState, useRef, useEffect, useCallback, ReactNode } from "react";
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
    // Regex matches [label](url), **bold**, and *italic*
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
          >
            {linkMatch[1]}
          </a>
        );
      }

      // Bold: **text**
      if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }

      // Italic: *text*
      if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
        return <em key={index}>{part.slice(1, -1)}</em>;
      }

      return part;
    });
  };

  const lines = text.split("\n");

  return (
    <div>
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} style={{ height: "0.5rem" }} />;
        }

        return (
          <div key={idx} style={{ minHeight: "1.2em" }}>
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
    text: "Hello! 👋 I'm **Mehboob Waqar's Portfolio AI Assistant**.\n\nFeel free to ask me anything about his work, projects, or background. How can I help you today?",
  };

  const [messages, setMessages] = useState<Message[]>([initialGreeting]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [showChips, setShowChips] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const cancelStreamRef = useRef<(() => void) | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [isOpen]);

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

      // Automatically hide suggestions once user sends a message
      setShowChips(false);

      // Add user message
      setMessages((prev) => [...prev, { role: "user", text: query }]);
      setInput("");
      setIsTyping(true);

      // Get AI response
      const fullResponse = getAIResponse(query);

      // Add empty bot message for streaming
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: "", isStreaming: true },
        ]);

        // Stream the response
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
                isStreaming: false,
              };
              return updated;
            });
            setIsTyping(false);
          }
        );
      }, 350);
    },
    [input, isTyping]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`ai-overlay ${isOpen ? "ai-overlay--open" : ""}`}
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`ai-modal ${isOpen ? "ai-modal--open" : ""}`}>
        {/* Header */}
        <div className="ai-modal__header">
          <div className="ai-modal__title-group">
            <div className="ai-modal__title">Mehboob Waqar</div>
            <div className="ai-modal__status">
              <span className="ai-modal__status-dot" />
              <span>Portfolio Assistant</span>
            </div>
          </div>

          <div className="ai-modal__header-actions">
            <button
              className="ai-modal__icon-btn"
              onClick={handleResetChat}
              title="Reset Conversation"
              aria-label="Reset Conversation"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
            </button>
            <button
              className="ai-modal__close"
              onClick={onClose}
              title="Close AI Assistant"
              aria-label="Close AI"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="ai-modal__messages">
          {messages.map((msg, i) => (
            <div key={i} className={`ai-message ai-message--${msg.role}`}>
              {msg.isStreaming && msg.text === "" ? (
                <div className="ai-message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              ) : (
                <>
                  <FormattedMessage text={msg.text} />
                  {msg.role === "bot" && !msg.isStreaming && msg.text && (
                    <div className="ai-message__actions">
                      <button
                        className="ai-message__copy"
                        onClick={() => handleCopy(msg.text, i)}
                        title="Copy answer"
                      >
                        {copiedIdx === i ? "✓ Copied!" : "📋 Copy"}
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Chips Section */}
        {showChips && (
          <div className="ai-chips-wrapper">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.4rem",
              }}
            >
              <span className="ai-chips-title">💡 Suggested Questions</span>
              <button
                onClick={() => setShowChips(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  cursor: "pointer",
                }}
              >
                Hide
              </button>
            </div>
            <div className="ai-chips">
              {suggestedChips.map((chip) => (
                <button
                  key={chip}
                  className="ai-chip"
                  onClick={() => handleSend(chip)}
                  disabled={isTyping}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="ai-modal__input-area">
          {!showChips && (
            <button
              onClick={() => setShowChips(true)}
              style={{
                background: "none",
                border: "1px solid var(--border-subtle)",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                color: "var(--accent-cyan)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
              }}
              title="Show suggestions"
            >
              💡
            </button>
          )}
          <input
            ref={inputRef}
            type="text"
            className="ai-modal__input"
            placeholder="Ask about Court Pro, IoT, skills, or contact..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isTyping}
          />
          <button
            className="ai-modal__send"
            onClick={() => handleSend()}
            disabled={isTyping || !input.trim()}
            aria-label="Send message"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
