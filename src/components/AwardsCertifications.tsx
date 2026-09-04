"use client";

import { awards, certifications } from "@/data/cvData";
import FadeIn from "./motion/FadeIn";

export default function AwardsCertifications() {
  return (
    <section className="section py-20 sm:py-28 relative z-10" id="awards">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header mb-12 sm:mb-16">
          <FadeIn delay={0.1} direction="down" distance={15}>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#14b8a6] mb-3">
              <span>●</span> Honors &amp; Verified Credentials
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up" distance={20}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Awards &amp; Certifications
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} direction="up" distance={20}>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              Competitive hackathons, algorithmic speed programming victories, and specialized certifications.
            </p>
          </FadeIn>
        </div>

        {/* Awards Cards */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 mb-8 sm:mb-12">
          {awards.map((award, idx) => (
            <FadeIn key={award.title} delay={0.15 + idx * 0.1} direction="up" distance={20}>
              <div className="group rounded-3xl border border-white/10 bg-[#0e121a]/90 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#14b8a6]/40 hover:bg-[#111722]">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-3 py-1 font-mono text-xs font-semibold text-[#f59e0b] mb-4">
                  <span>🏆</span> {award.award}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#14b8a6] transition-colors mb-1">
                  {award.title}
                </h3>

                <div className="font-mono text-xs text-[#14b8a6] mb-3">
                  {award.institution ? `${award.institution} • ` : ""}{award.date}
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-[#94a3b8]">
                  {award.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Certifications Grid */}
        <FadeIn delay={0.4} direction="up" distance={20}>
          <div className="rounded-3xl border border-white/10 bg-[#0e121a]/70 p-6 sm:p-8">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-4 sm:mb-6">
              Verified Coursework &amp; Specializations
            </h3>

            <div className="grid gap-4 sm:grid-cols-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-200 hover:border-[#14b8a6]/30 hover:bg-white/[0.04]"
                >
                  <h4 className="font-display text-sm font-semibold text-white mb-1.5">
                    {cert.title}
                  </h4>
                  <div className="font-mono text-xs text-[#64748b]">
                    {cert.issuer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
