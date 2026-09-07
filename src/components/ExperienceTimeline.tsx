"use client";

import { experiences, education } from "@/data/cvData";
import FadeIn from "./motion/FadeIn";

export default function ExperienceTimeline() {
  return (
    <section className="section py-20 sm:py-28 relative z-10" id="experience">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header mb-12 sm:mb-16">
          <FadeIn delay={0.1} direction="down" distance={15}>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#14b8a6] mb-3">
              <span>●</span> Career &amp; Foundation
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up" distance={20}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Experience &amp; Education
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} direction="up" distance={20}>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
              Engineering journey across production mobile software companies and selective technical fellowships.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10">
          {/* Work History */}
          <div>
            <FadeIn delay={0.2} direction="left" distance={15}>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#94a3b8] mb-4 sm:mb-6">
                Professional Experience
              </h3>
            </FadeIn>

            <div className="space-y-4 sm:space-y-6">
              {experiences.map((exp, idx) => (
                <FadeIn key={exp.company} delay={0.2 + idx * 0.1} direction="up" distance={20}>
                  <div className="group rounded-3xl border border-white/10 bg-[#0e121a]/90 p-8 sm:p-10 lg:p-11 backdrop-blur-xl transition-all duration-300 hover:border-[#14b8a6]/40 hover:bg-[#111722]">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <h4 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#14b8a6] transition-colors">
                        {exp.role}
                      </h4>
                      <span className="rounded-full border border-[#14b8a6]/20 bg-[#14b8a6]/10 px-4 py-1.5 font-mono text-xs text-[#14b8a6]">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm font-medium text-white/80 mb-1">{exp.company}</div>
                    <div className="text-[11px] sm:text-xs text-[#94a3b8] mb-5">{exp.type} • {exp.location}</div>

                    <p className="text-xs sm:text-sm leading-relaxed text-[#cbd5e1] mb-5">
                      {exp.description}
                    </p>

                    <ul className="space-y-3">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#e2e8f0] leading-relaxed">
                          <span className="text-[#14b8a6] mt-0.5 font-bold">▹</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Education & Academic Rigor */}
          <div>
            <FadeIn delay={0.25} direction="right" distance={15}>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#94a3b8] mb-4 sm:mb-6">
                Academic Rigor
              </h3>
            </FadeIn>

            <FadeIn delay={0.35} direction="up" distance={20}>
              <div className="rounded-3xl border border-white/10 bg-[#0e121a]/90 p-8 sm:p-10 lg:p-11 backdrop-blur-xl transition-all duration-300 hover:border-[#14b8a6]/40 hover:bg-[#111722] mb-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h4 className="font-display text-xl font-bold text-white">
                    {education.shortDegree}
                  </h4>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-[#cbd5e1]">
                    {education.start} – {education.end}
                  </span>
                </div>

                <div className="text-sm font-medium text-white/80 mb-1">{education.institution}</div>
                <div className="text-xs text-[#94a3b8] mb-4">{education.location}</div>

                <p className="text-sm leading-relaxed text-[#cbd5e1] mb-4">
                  {education.degree}
                </p>

                <ul className="space-y-2">
                  {education.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#e2e8f0] leading-relaxed">
                      <span className="text-[#14b8a6] mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
