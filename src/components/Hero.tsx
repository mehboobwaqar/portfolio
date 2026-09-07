"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/cvData";
import FadeIn from "./motion/FadeIn";
import SplitTextReveal from "./motion/SplitTextReveal";
import Magnetic from "./motion/Magnetic";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: -y * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-28 sm:pt-40 pb-14 sm:pb-20" id="hero">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">

          {/* Left Column — Cinematic Typography & Intro */}
          <div className="text-left">
            {/* Pulsing Status Pill */}
            <FadeIn delay={0.2} direction="down" distance={15}>
              <div className="mb-5 sm:mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#14b8a6]/25 bg-[#14b8a6]/8 px-3.5 sm:px-4 py-1.5 text-xs font-medium text-[#14b8a6] backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#14b8a6] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#14b8a6]" />
                </span>
                <span>Engineering High-Scale Mobile Systems</span>
              </div>
            </FadeIn>

            {/* Split Text Headline */}
            <div className="mb-2">
              <SplitTextReveal
                text="Mehboob"
                as="h1"
                className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.08] tracking-tight text-white block"
                delay={0.4}
                stagger={0.04}
              />
              <SplitTextReveal
                text="Waqar"
                as="h1"
                className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.08] tracking-tight text-[#14b8a6] block mt-1"
                delay={0.7}
                stagger={0.05}
              />
            </div>

            {/* Subtitle */}
            <FadeIn delay={1.0} direction="up" distance={15}>
              <p className="mt-4 font-display text-lg sm:text-xl md:text-2xl font-medium text-white/85 tracking-tight">
                Flutter Developer &amp; Mobile Software Engineer
              </p>
            </FadeIn>

            {/* Narrative */}
            <FadeIn delay={1.2} direction="up" distance={15}>
              <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-[#cbd5e1]">
                Turning complex architectural challenges into polished, 60fps production mobile applications. Specializing in high-scale Flutter apps with on-device AI/ML vision, IoT hardware telemetry, and enterprise MVVM systems.
              </p>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn delay={1.4} direction="up" distance={15}>
              <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <Magnetic strength={0.3}>
                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#14b8a6] px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-[#0a0d14] transition-all duration-300 hover:shadow-xl hover:shadow-[#14b8a6]/30 hover:scale-[1.02]"
                  >
                    <span>View Projects</span>
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </Magnetic>

                <Magnetic strength={0.25}>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-[#14b8a6]/40 hover:bg-white/[0.08]"
                  >
                    <span>Contact Me</span>
                  </a>
                </Magnetic>
              </div>
            </FadeIn>

            {/* Social Icons Bar */}
            <FadeIn delay={1.6} direction="up" distance={15}>
              <div className="mt-8 sm:mt-10 flex items-center gap-3 sm:gap-4">
                {[
                  {
                    href: personalInfo.github,
                    label: "GitHub",
                    svg: (
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    ),
                  },
                  {
                    href: personalInfo.linkedin,
                    label: "LinkedIn",
                    svg: (
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.62 1.62 0 1 0 1.62 1.62c0-.9-.73-1.62-1.62-1.62z" />
                    ),
                  },
                  {
                    href: `mailto:${personalInfo.email}`,
                    label: "Email",
                    svg: (
                      <>
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </>
                    ),
                  },
                ].map((item) => (
                  <Magnetic key={item.label} strength={0.4}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={item.label}
                      className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#94a3b8] backdrop-blur-sm transition-all duration-300 hover:border-[#14b8a6]/50 hover:bg-[#14b8a6]/10 hover:text-[#14b8a6]"
                    >
                      <svg className="h-4 w-4" fill={item.label === "Email" ? "none" : "currentColor"} stroke={item.label === "Email" ? "currentColor" : "none"} strokeWidth={item.label === "Email" ? 2 : 0} viewBox="0 0 24 24">
                        {item.svg}
                      </svg>
                    </a>
                  </Magnetic>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column — Mehboob Waqar Portrait Showcase */}
          <FadeIn delay={0.8} direction="right" distance={30}>
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              {/* Ambient Glowing Aura behind photo */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#14b8a6]/20 via-[#06b6d4]/15 to-transparent blur-3xl -z-10 pointer-events-none opacity-80" />

              {/* 3D Tilt Frame */}
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                  transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="group relative rounded-3xl border-2 sm:border-[3px] border-[#14b8a6] shadow-2xl shadow-[#14b8a6]/25 backdrop-blur-xl overflow-hidden"
              >
                {/* Photo Container — Pure Clean Portrait */}
                <div className="relative w-full aspect-[3.7/4.7] overflow-hidden bg-[#090a0f]">
                  <Image
                    src="/mehboob-waqar.png"
                    alt="Mehboob Waqar - Senior Flutter & Mobile Engineer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Scroll Indicator matching thefahad.app */}
      <FadeIn delay={1.8} className="mx-auto mt-14 sm:mt-20">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-[10px] tracking-[0.3em] text-[#94a3b8] uppercase font-mono">
            Scroll to explore
          </span>
          <div className="h-8 sm:h-10 w-[1px] bg-gradient-to-b from-[#14b8a6]/60 to-transparent relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-3 w-full bg-[#14b8a6] animate-bounce" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
