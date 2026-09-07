"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./motion/FadeIn";
import SplitTextReveal from "./motion/SplitTextReveal";

interface WelcomeExperienceProps {
  isOpen: boolean;
  onSelectPortfolio: () => void;
  onSelectChat: () => void;
}

export default function WelcomeExperience({
  isOpen,
  onSelectPortfolio,
  onSelectChat,
}: WelcomeExperienceProps) {
  const [activeCard, setActiveCard] = useState<"portfolio" | "ai" | null>(null);
  const isPortfolioActive = activeCard === "portfolio";
  const isAIActive = activeCard === "ai";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[50] flex items-center justify-center overflow-hidden bg-transparent"
        >
          {/* Ambient Lighting Orbs */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] h-[45%] w-[45%] rounded-full bg-[#14b8a6]/10 blur-[130px]" />
            <div className="absolute bottom-[-10%] right-[-10%] h-[45%] w-[45%] rounded-full bg-[#14b8a6]/10 blur-[130px]" />
          </div>

          <div className="relative z-10 w-full max-w-3xl px-4 sm:px-6 py-8 text-center max-h-[94vh] overflow-y-auto">
            {/* Greeting Pill */}
            <FadeIn delay={0.15} direction="down" distance={20}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "9px 24px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(20, 184, 166, 0.35)",
                  backgroundColor: "rgba(20, 184, 166, 0.12)",
                  backdropFilter: "blur(12px)",
                  marginBottom: "24px",
                  boxShadow: "0 0 20px rgba(20, 184, 166, 0.12)",
                }}
              >
                <span
                  style={{
                    position: "relative",
                    display: "flex",
                    height: "8px",
                    width: "8px",
                    flexShrink: 0,
                  }}
                >
                  <span
                    className="animate-ping"
                    style={{
                      position: "absolute",
                      display: "inline-flex",
                      height: "100%",
                      width: "100%",
                      borderRadius: "9999px",
                      backgroundColor: "#14b8a6",
                      opacity: 0.75,
                    }}
                  />
                  <span
                    style={{
                      position: "relative",
                      display: "inline-flex",
                      height: "8px",
                      width: "8px",
                      borderRadius: "9999px",
                      backgroundColor: "#14b8a6",
                    }}
                  />
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#14b8a6",
                    letterSpacing: "0.02em",
                    lineHeight: 1.4,
                    whiteSpace: "nowrap",
                  }}
                >
                  Hello! I am glad you are here
                </span>
              </div>
            </FadeIn>

            {/* SplitText Headline */}
            <div style={{ marginBottom: "34px" }}>
              <SplitTextReveal
                text="Explore My Work"
                as="h1"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
                delay={0.3}
                stagger={0.03}
              />
            </div>

            {/* Two Choices Cards */}
            <div
              className="grid gap-6 sm:gap-7 md:grid-cols-2 text-left"
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Option 1: Browse Portfolio */}
              <FadeIn delay={0.6} direction="up" distance={20} className="h-full flex flex-col">
                <button
                  onClick={onSelectPortfolio}
                  onMouseEnter={() => setActiveCard("portfolio")}
                  className={`group relative w-full rounded-3xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${isPortfolioActive
                    ? "border border-[#14b8a6]/50 bg-[#0e121a]/95 shadow-2xl shadow-[#14b8a6]/20"
                    : "border border-white/10 bg-[#0e121a]/80 hover:border-[#14b8a6]/30"
                    }`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "44px 28px",
                    minHeight: "290px",
                    height: "100%",
                    textAlign: "center",
                  }}
                >
                  {/* Icon Container */}
                  <div
                    style={{
                      display: "flex",
                      height: "64px",
                      width: "64px",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "18px",
                      backgroundColor: isPortfolioActive ? "#14b8a6" : "rgba(20, 184, 166, 0.12)",
                      color: isPortfolioActive ? "#0a0d14" : "#14b8a6",
                      border: isPortfolioActive ? "1px solid #14b8a6" : "1px solid rgba(20, 184, 166, 0.25)",
                      boxShadow: isPortfolioActive ? "0 0 35px rgba(20, 184, 166, 0.55)" : "none",
                      marginBottom: "20px",
                      transition: "all 0.3s ease",
                      flexShrink: 0,
                    }}
                    className="group-hover:scale-105"
                  >
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>

                  {/* Text Container */}
                  <div>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: isPortfolioActive ? "#ffffff" : "rgba(255, 255, 255, 0.85)",
                        marginBottom: "8px",
                        transition: "color 0.3s ease",
                      }}
                      className="font-display"
                    >
                      Browse Portfolio
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: isPortfolioActive ? "rgba(255, 255, 255, 0.75)" : "rgba(255, 255, 255, 0.6)",
                        lineHeight: 1.6,
                        maxWidth: "260px",
                        margin: "0 auto",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Take a guided tour through Mehboob&apos;s curated Flutter apps, technical stack, and architecture.
                    </p>
                  </div>
                </button>
              </FadeIn>

              {/* Option 2: AI Assistant */}
              <FadeIn delay={0.75} direction="up" distance={20} className="h-full flex flex-col">
                <button
                  onClick={onSelectChat}
                  onMouseEnter={() => setActiveCard("ai")}
                  className={`group relative w-full rounded-3xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${isAIActive
                    ? "border border-[#14b8a6]/50 bg-[#0e121a]/95 shadow-2xl shadow-[#14b8a6]/20"
                    : "border border-white/10 bg-[#0e121a]/80 hover:border-[#14b8a6]/30"
                    }`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "44px 28px",
                    minHeight: "290px",
                    height: "100%",
                    textAlign: "center",
                  }}
                >
                  {/* Icon Container */}
                  <div
                    style={{
                      display: "flex",
                      height: "64px",
                      width: "64px",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "18px",
                      backgroundColor: isAIActive ? "#14b8a6" : "rgba(20, 184, 166, 0.12)",
                      color: isAIActive ? "#0a0d14" : "#14b8a6",
                      border: isAIActive ? "1px solid #14b8a6" : "1px solid rgba(20, 184, 166, 0.25)",
                      boxShadow: isAIActive ? "0 0 35px rgba(20, 184, 166, 0.55)" : "none",
                      marginBottom: "20px",
                      transition: "all 0.3s ease",
                      flexShrink: 0,
                    }}
                    className="group-hover:scale-105"
                  >
                    <svg
                      style={{ width: "36px", height: "36px" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  </div>

                  {/* Text Container */}
                  <div>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: isAIActive ? "#ffffff" : "rgba(255, 255, 255, 0.85)",
                        marginBottom: "8px",
                        transition: "color 0.3s ease",
                      }}
                      className="font-display"
                    >
                      AI Assistant
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: isAIActive ? "rgba(255, 255, 255, 0.75)" : "rgba(255, 255, 255, 0.6)",
                        lineHeight: 1.6,
                        maxWidth: "260px",
                        margin: "0 auto",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Skip the reading and chat directly with Mehboob&apos;s intelligent portfolio assistant.
                    </p>
                  </div>
                </button>
              </FadeIn>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
