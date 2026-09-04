"use client";

import { useState, useEffect } from "react";
import Magnetic from "./motion/Magnetic";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onAIClick }: { onAIClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0d14]/85 backdrop-blur-2xl border-b border-white/10 py-3 shadow-xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        {/* Monogram Brand Logo matching Fahad's MF. */}
        <Magnetic strength={0.25}>
          <a
            href="#hero"
            className="font-display text-2xl font-bold tracking-tight text-white inline-flex items-baseline"
          >
            MW<span className="text-[#14b8a6]">.</span>
          </a>
        </Magnetic>

        {/* Center Nav Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Magnetic strength={0.15}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 text-sm text-[#94a3b8] transition-colors duration-300 hover:text-[#14b8a6] group"
                >
                  <span className="relative z-10 font-medium">{link.label}</span>
                  <span className="absolute inset-0 rounded-full bg-[#14b8a6]/0 transition-all duration-300 group-hover:bg-[#14b8a6]/10" />
                </a>
              </Magnetic>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#14b8a6]/20 bg-[#14b8a6]/5 px-3 py-1 text-xs font-medium text-[#14b8a6]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#14b8a6] animate-pulse" />
            <span>Available for Hire</span>
          </div>

          <Magnetic strength={0.25}>
            <button
              onClick={onAIClick}
              className="inline-flex items-center gap-2 rounded-full border border-[#14b8a6]/40 bg-[#14b8a6]/10 px-4 py-2 text-xs font-semibold text-[#14b8a6] backdrop-blur-sm transition-all duration-300 hover:bg-[#14b8a6] hover:text-[#0a0d14] hover:shadow-lg hover:shadow-[#14b8a6]/25 cursor-pointer"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              <span>Ask AI</span>
            </button>
          </Magnetic>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#94a3b8] hover:text-white"
            aria-label="Toggle Navigation"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0d14]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4">
          <div className="space-y-2 pb-3 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-lg font-medium text-white/85 hover:text-[#14b8a6] py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileOpen(false);
                onAIClick();
              }}
              className="w-full flex items-center justify-center gap-2 rounded-full border border-[#14b8a6]/40 bg-[#14b8a6]/10 px-4 py-3 text-sm font-semibold text-[#14b8a6] hover:bg-[#14b8a6] hover:text-[#0a0d14] transition-all cursor-pointer"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              <span>Ask AI Assistant</span>
            </button>
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#14b8a6]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#14b8a6] animate-pulse" />
              <span>Available for Hire &amp; Mobile Contracts</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
