"use client";

import { useState, useEffect } from "react";
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

        {/* Floating AI Assistant Trigger */}
        <button
          className="ai-trigger"
          onClick={() => setAiOpen(true)}
          aria-label="Open portfolio AI assistant"
        >
          <span className="ai-trigger__dot" />
          <span>Ask AI</span>
        </button>
      </div>

      <AIAssistantModal isOpen={aiOpen} onClose={() => setAiOpen(false)} />
    </>
  );
}
