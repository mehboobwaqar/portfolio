"use client";

import { useState } from "react";
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
      {/* Real 3D Canvas Background with Three.js (Particles, Wave Mesh, Floating Geometries, Mouse Parallax) */}
      <Background3D />

      {/* Cinematic "Choose your experience" overlay matching thefahad.app */}
      <WelcomeExperience
        isOpen={welcomeOpen}
        onSelectPortfolio={handleSelectPortfolio}
        onSelectChat={handleSelectChat}
      />

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

      <AIAssistantModal isOpen={aiOpen} onClose={() => setAiOpen(false)} />
    </>
  );
}
