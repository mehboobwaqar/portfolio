"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
  as?: "div" | "button" | "a";
  [key: string]: any;
}

export default function Magnetic({
  children,
  strength = 0.25,
  className = "",
  as = "div",
  ...props
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = motion[as as "div"];

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", damping: 15, stiffness: 150, mass: 0.1 }}
      className={`inline-block ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
