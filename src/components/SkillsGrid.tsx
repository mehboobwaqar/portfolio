"use client";

import { skillCategories } from "@/data/cvData";
import FadeIn from "./motion/FadeIn";

export default function SkillsGrid() {
  return (
    <section className="section py-20 sm:py-28 relative z-10" id="skills">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header mb-12 sm:mb-16">
          <FadeIn delay={0.1} direction="down" distance={15}>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#14b8a6] mb-3">
              <span>●</span> Capabilities &amp; Architecture
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up" distance={20}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Technical Stack
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} direction="up" distance={20}>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
              Core technologies, architectural methodologies, and third-party frameworks leveraged across high-scale mobile codebases.
            </p>
          </FadeIn>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {skillCategories.map((cat, idx) => (
            <FadeIn key={cat.title} delay={0.15 + idx * 0.1} direction="up" distance={20}>
              <div className="group rounded-3xl border border-white/10 bg-[#0e121a]/90 p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 hover:border-[#14b8a6]/40 hover:bg-[#111722]">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-4 sm:mb-5 flex items-center gap-2 group-hover:text-[#14b8a6] transition-colors">
                  <span className="h-2 w-2 rounded-full bg-[#14b8a6]" />
                  {cat.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/5 bg-white/[0.03] px-4 py-2 font-mono text-xs text-[#cbd5e1] transition-all duration-200 hover:border-[#14b8a6]/40 hover:text-white hover:bg-[#14b8a6]/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
