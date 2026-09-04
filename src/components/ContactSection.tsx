"use client";

import { personalInfo } from "@/data/cvData";
import FadeIn from "./motion/FadeIn";
import Magnetic from "./motion/Magnetic";

export default function ContactSection() {
  return (
    <section className="section py-20 sm:py-28 relative z-10" id="contact">
      <div className="container">
        <FadeIn delay={0.15} direction="up" distance={25}>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e121a]/95 p-6 sm:p-12 md:p-16 text-center backdrop-blur-2xl shadow-2xl">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-72 rounded-full bg-[#14b8a6]/10 blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#14b8a6] mb-4">
              <span>●</span> Available for New Opportunities
            </div>

            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto">
              Let&apos;s build something exceptional together.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
              Whether you are looking to hire a senior Flutter developer, explore a contract for a new mobile product, or need IoT/AI integration expertise — I&apos;m always available for a conversation.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Magnetic strength={0.3}>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-full bg-[#14b8a6] px-7 py-3.5 text-xs sm:text-sm font-semibold text-[#0a0d14] transition-all duration-300 hover:shadow-xl hover:shadow-[#14b8a6]/30 hover:scale-[1.02]"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{personalInfo.email}</span>
                </a>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-xs sm:text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-[#14b8a6]/40 hover:bg-white/[0.08]"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{personalInfo.phone}</span>
                </a>
              </Magnetic>
            </div>

            {/* Meta Row */}
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-[#64748b]">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                {personalInfo.workPreference}
              </span>
              <span>Based in {personalInfo.location}</span>
              <span>Response within 24 hours</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
