"use client";

import { personalInfo } from "@/data/cvData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0d14]/90 py-8 sm:py-10 relative z-10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs text-[#94a3b8]">
        <div className="text-center sm:text-left">
          <span className="font-semibold text-white">{personalInfo.name}</span>
          <span className="text-white/30 mx-2">•</span>
          <span>Crafted with Flutter &amp; Web Technologies</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xs">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#14b8a6] transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#14b8a6] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-[#14b8a6] transition-colors"
          >
            Email
          </a>
          <a href="#hero" className="text-[#14b8a6] hover:underline">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
