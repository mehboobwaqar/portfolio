"use client";

import { projects } from "@/data/cvData";
import FadeIn from "./motion/FadeIn";

export default function ProjectsSection() {
  return (
    <section className="section py-20 sm:py-28 relative z-10" id="projects">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header mb-12 sm:mb-16">
          <FadeIn delay={0.1} direction="down" distance={15}>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#14b8a6] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#14b8a6] animate-pulse" />
              Featured Engineering Work
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up" distance={20}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Production Applications
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} direction="up" distance={20}>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              Cross-platform mobile applications shipped to the App Store &amp; Google Play Store, managing live IoT hardware streams, high-volume transactional APIs, and on-device computer vision.
            </p>
          </FadeIn>
        </div>

        {/* Projects Grid — Clean, Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <FadeIn
              key={project.name}
              delay={0.1 + idx * 0.08}
              direction="up"
              distance={20}
            >
              <div className="group relative flex flex-col justify-between h-full rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#0e121a]/95 p-6 sm:p-8 backdrop-blur-2xl transition-all duration-300 hover:border-[#14b8a6]/40 hover:bg-[#121722] hover:shadow-2xl hover:shadow-[#14b8a6]/5">
                <div>
                  {/* Top Row: Category & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#14b8a6] uppercase tracking-wider">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#14b8a6]" />
                      {project.category}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-0.5 font-mono text-[11px] text-[#94a3b8]">
                      {project.platforms.join(" • ")}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#14b8a6] transition-colors duration-300">
                    {project.name}
                  </h3>
                  <div className="mt-1 text-xs sm:text-sm font-medium text-white/60">
                    {project.subtitle}
                  </div>

                  {/* Summary */}
                  <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[#94a3b8]">
                    {project.description}
                  </p>

                  {/* Curated Key Highlights (Top 2 architecture highlights) */}
                  <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                        <span className="text-[#14b8a6] font-bold shrink-0 mt-0.5">▹</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills (Clean, elegant, non-cramped) */}
                <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-[#94a3b8] transition-colors group-hover:border-white/20 group-hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="font-mono text-xs text-[#64748b] px-1">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
