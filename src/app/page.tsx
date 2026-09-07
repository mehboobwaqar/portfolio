"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import AwardsCertifications from "@/components/AwardsCertifications";
import ContactSection from "@/components/ContactSection";
import AIAssistantModal from "@/components/AIAssistantModal";
import Footer from "@/components/Footer";
import WelcomeExperience from "@/components/WelcomeExperience";
import Background3D from "@/components/3d/Background3D";

export default function Home() {
  const [welcomeOpen, setWelcomeOpen] = useState(true);
  const [aiOpen, setAiOpen] = useState(false);

  useEffect(() => {
    if (welcomeOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [welcomeOpen]);

  const handleSelectPortfolio = () => {
    setWelcomeOpen(false);
  };

  const handleSelectChat = () => {
    setWelcomeOpen(false);
    setTimeout(() => {
      setAiOpen(true);
    }, 400);
  };

  return (
    <>
      {/* Real 3D Canvas Background with Three.js (always active and interactive) */}
      <Background3D />

      {/* Cinematic "Choose your experience" overlay — shown alone with 3D background */}
      <WelcomeExperience
        isOpen={welcomeOpen}
        onSelectPortfolio={handleSelectPortfolio}
        onSelectChat={handleSelectChat}
      />

      {/* Portfolio Content — hidden while welcome screen is active, smoothly fades in when dismissed */}
      <div
        style={{
          opacity: welcomeOpen ? 0 : 1,
          visibility: welcomeOpen ? "hidden" : "visible",
          pointerEvents: welcomeOpen ? "none" : "auto",
          transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.6s",
        }}
      >
        {/* Ambient Backdrop matching thefahad.app color palette */}
        <div className="ambient-backdrop" />
        <div className="ambient-grid" />

        {/* Navigation */}
        <Navbar onAIClick={() => setAiOpen(true)} />

        {/* Main Sections */}
        <main style={{ position: "relative", zIndex: 1 }}>
          <Hero />
          <ProjectsSection />
          <SkillsGrid />
          <ExperienceTimeline />
          <AwardsCertifications />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating AI Assistant Trigger — Sleek Obsidian & Primary Teal Design */}
        {!aiOpen && (
          <button
            onClick={() => setAiOpen(true)}
            aria-label="Open portfolio AI assistant"
            className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 rounded-full border border-[#14b8a6]/40 bg-[#0d121a]/92 px-4 py-2.5 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.5),0_0_25px_rgba(20,184,166,0.18)] transition-all duration-300 hover:border-[#14b8a6] hover:bg-[#121824] hover:shadow-[0_15px_45px_rgba(0,0,0,0.6),0_0_35px_rgba(20,184,166,0.35)] hover:-translate-y-1 active:scale-95 cursor-pointer"
          >
            {/* Mehboob Avatar with pulsing teal status ring */}
            <div className="relative flex items-center justify-center shrink-0">
              <div className="relative h-7 w-7 rounded-full overflow-hidden border border-[#14b8a6]/60 bg-[#14b8a6]/10">
                <Image
                  src="/mehboob-avatar.png"
                  alt="Mehboob AI"
                  width={28}
                  height={28}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Pulsing online indicator */}
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14b8a6] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#14b8a6] border border-[#0d121a]" />
              </span>
            </div>

            {/* Label + Sparkle */}
            <div className="flex items-center gap-1.5 font-medium text-xs sm:text-sm text-white group-hover:text-[#14b8a6] transition-colors">
              <span>Ask AI</span>
              <svg
                className="h-3.5 w-3.5 text-[#14b8a6] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                />
              </svg>
            </div>
          </button>
        )}
      </div>

      <AIAssistantModal isOpen={aiOpen} onClose={() => setAiOpen(false)} />
    </>
  );
}
