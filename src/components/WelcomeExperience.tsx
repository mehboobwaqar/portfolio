"use client";

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
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0a0d14]/95 backdrop-blur-3xl"
        >
          {/* Ambient Lighting Orbs (matching thefahad.app) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] h-[45%] w-[45%] rounded-full bg-[#14b8a6]/10 blur-[130px]" />
            <div className="absolute bottom-[-10%] right-[-10%] h-[45%] w-[45%] rounded-full bg-[#14b8a6]/10 blur-[130px]" />
          </div>

          <div className="relative z-10 w-full max-w-3xl px-4 sm:px-6 py-8 text-center max-h-[94vh] overflow-y-auto">
            {/* Greeting Pill */}
            <FadeIn delay={0.15} direction="down" distance={20}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#14b8a6]/25 bg-[#14b8a6]/8 px-3.5 py-1 text-xs sm:text-sm font-medium text-[#14b8a6] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#14b8a6] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#14b8a6]" />
                </span>
                <span>Hello! I am glad you are here</span>
              </div>
            </FadeIn>

            {/* SplitText Headline */}
            <div className="mb-8 sm:mb-12">
              <SplitTextReveal
                text="Choose your experience"
                as="h1"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
                delay={0.3}
                stagger={0.03}
              />
            </div>

            {/* Two Choices Cards */}
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 text-left">
              {/* Option 1: Explore Portfolio */}
              <FadeIn delay={0.6} direction="up" distance={20}>
                <button
                  onClick={onSelectPortfolio}
                  className="group relative flex h-full w-full flex-col items-center justify-center gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 text-center transition-all duration-300 hover:border-[#14b8a6]/50 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-[#14b8a6]/10 cursor-pointer"
                >
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#14b8a6]/10 text-[#14b8a6] transition-transform duration-300 group-hover:scale-105">
                    <svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 font-display">
                      Explore Portfolio
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-[260px] mx-auto">
                      Take a guided tour through Mehboob&apos;s curated Flutter apps, technical stack, and architecture.
                    </p>
                  </div>
                </button>
              </FadeIn>

              {/* Option 2: AI Assistant */}
              <FadeIn delay={0.75} direction="up" distance={20}>
                <button
                  onClick={onSelectChat}
                  className="group relative flex h-full w-full flex-col items-center justify-center gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl border border-[#14b8a6]/30 bg-[#14b8a6]/5 p-6 sm:p-8 text-center transition-all duration-300 hover:border-[#14b8a6]/60 hover:bg-[#14b8a6]/10 hover:shadow-2xl hover:shadow-[#14b8a6]/20 cursor-pointer"
                >
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#14b8a6] text-[#0a0d14] shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-transform duration-300 group-hover:scale-105">
                    <svg className="h-7 w-7 sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 font-display">
                      AI Assistant
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-[260px] mx-auto">
                      Skip the reading and chat directly with Mehboob&apos;s intelligent portfolio assistant.
                    </p>
                  </div>
                </button>
              </FadeIn>
            </div>

            {/* Quick Skip Footer */}
            <FadeIn delay={1} direction="up" distance={15}>
              <div className="mt-8 flex justify-center pb-2">
                <button
                  onClick={onSelectPortfolio}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-2 text-xs font-mono tracking-widest text-white/50 uppercase transition-all hover:border-[#14b8a6]/40 hover:text-[#14b8a6] hover:bg-[#14b8a6]/5 cursor-pointer"
                >
                  Direct Entry →
                </button>
              </div>
            </FadeIn>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
