"use client";

import { projects } from "@/data/cvData";
import FadeIn from "./motion/FadeIn";

function AppleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.71-.94 2.73 1.01.08 2.03-.48 2.65-1.23z" />
    </svg>
  );
}

function PlayStoreIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.609 1.814L13.793 12 3.61 22.186c-.37-.312-.61-.782-.61-1.32V3.134c0-.538.24-1.008.61-1.32zm11.24 11.24l2.58 2.58-12.06 6.88 9.48-9.46zm0-2.108L5.369 1.486l12.06 6.88-2.58 2.58zm1.48 1.054l3.82 2.18c.68.39.68 1.02 0 1.41l-3.82 2.18-2.42-2.38 2.42-2.39z" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

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
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
              Cross-platform mobile applications shipped to the App Store &amp; Google Play Store, managing live IoT hardware streams, high-volume transactional APIs, and on-device computer vision.
            </p>
          </FadeIn>
        </div>

        {/* Projects Grid — Clean, Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => {
            const hasLinks = Boolean(project.appStoreUrl || project.playStoreUrl);

            return (
              <FadeIn
                key={project.name}
                delay={0.1 + idx * 0.08}
                direction="up"
                distance={20}
              >
                <div className="group relative flex flex-col justify-between h-full rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#0e121a]/95 p-8 sm:p-10 backdrop-blur-2xl transition-all duration-300 hover:border-[#14b8a6]/40 hover:bg-[#121722] hover:shadow-2xl hover:shadow-[#14b8a6]/5">
                  <div>
                    {/* Top Row: Category & Store Status */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#14b8a6] uppercase tracking-wider">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#14b8a6]" />
                        {project.category}
                      </span>
                      {hasLinks ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 font-mono text-[11px] font-medium text-emerald-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live on Store
                        </span>
                      ) : (
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 font-mono text-[11px] text-[#cbd5e1]">
                          Client Production
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#14b8a6] transition-colors duration-300">
                      {project.name}
                    </h3>
                    <div className="mt-1 text-xs sm:text-sm font-medium text-white/75">
                      {project.subtitle}
                    </div>

                    {/* Summary */}
                    <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[#cbd5e1]">
                      {project.description}
                    </p>

                    {/* Curated Key Highlights (Top 2 architecture highlights) */}
                    <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                      {project.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#e2e8f0] leading-relaxed">
                          <span className="text-[#14b8a6] font-bold shrink-0 mt-0.5">▹</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section: Tech Stack & Store Action Buttons */}
                  <div className="mt-6 pt-5 border-t border-white/[0.08] space-y-4">
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap items-center gap-2">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-mono text-xs text-[#cbd5e1] transition-colors group-hover:border-white/20 group-hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className="font-mono text-xs text-[#94a3b8] px-1">
                          +{project.techStack.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Store Links / Action Buttons */}
                    {hasLinks ? (
                      <div className="flex flex-wrap items-center gap-2.5 pt-1">
                        {project.appStoreUrl && (
                          <a
                            href={project.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.name} on Apple App Store`}
                            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-white transition-all duration-200 hover:border-[#14b8a6]/60 hover:bg-[#14b8a6]/10 hover:text-[#14b8a6] hover:shadow-lg hover:shadow-[#14b8a6]/10 active:scale-95"
                          >
                            <AppleIcon className="h-4 w-4 fill-current shrink-0" />
                            <span>App Store</span>
                            <ExternalLinkIcon className="h-3 w-3 opacity-60 ml-0.5 shrink-0" />
                          </a>
                        )}

                        {project.playStoreUrl && (
                          <a
                            href={project.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.name} on Google Play Store`}
                            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-white transition-all duration-200 hover:border-[#14b8a6]/60 hover:bg-[#14b8a6]/10 hover:text-[#14b8a6] hover:shadow-lg hover:shadow-[#14b8a6]/10 active:scale-95"
                          >
                            <PlayStoreIcon className="h-4 w-4 fill-current shrink-0" />
                            <span>Google Play</span>
                            <ExternalLinkIcon className="h-3 w-3 opacity-60 ml-0.5 shrink-0" />
                          </a>
                        )}
                      </div>
                    ) : (
                      <div className="pt-1">
                        <span className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-1.5 font-mono text-[11px] text-[#94a3b8]">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Enterprise / Client Project
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
