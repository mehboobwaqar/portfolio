"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0d14, 0.0009);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 400;
    camera.position.y = 60;

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0a0d14, 0);
    container.appendChild(renderer.domElement);

    // 4. Circular Particle Glow Texture Generator
    const createParticleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.2, "rgba(20, 184, 166, 0.95)"); // #14b8a6 teal
      gradient.addColorStop(0.5, "rgba(6, 182, 212, 0.45)");  // #06b6d4 cyan
      gradient.addColorStop(1, "rgba(10, 13, 20, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();

      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createParticleTexture();

    // 5. 3D Floating Particle Cloud
    const particleCount = 850;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const tealColor = new THREE.Color("#14b8a6");
    const emeraldColor = new THREE.Color("#10b981");
    const cyanColor = new THREE.Color("#22d3ee");
    const whiteColor = new THREE.Color("#f8fafc");

    const colorPalette = [tealColor, tealColor, emeraldColor, cyanColor, whiteColor];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1400;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 900;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1000;

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 14,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      map: particleTexture ?? undefined,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 6. Undulating 3D Cyber Wave Grid (Horizon Mesh)
    const gridWidth = 1400;
    const gridDepth = 1200;
    const gridSegmentsX = 40;
    const gridSegmentsY = 35;
    const waveGeometry = new THREE.PlaneGeometry(
      gridWidth,
      gridDepth,
      gridSegmentsX,
      gridSegmentsY
    );
    waveGeometry.rotateX(-Math.PI / 2);
    waveGeometry.translate(0, -220, -100);

    const waveMaterial = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      wireframe: true,
      transparent: true,
      opacity: 0.14,
    });

    const waveMesh = new THREE.Mesh(waveGeometry, waveMaterial);
    scene.add(waveMesh);

    // 7. Floating 3D Geometric Tech Rings / Polyhedrons
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    // Outer Torus Ring
    const torusGeom = new THREE.TorusGeometry(180, 0.8, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const torus1 = new THREE.Mesh(torusGeom, ringMaterial);
    torus1.position.set(220, 60, -200);
    torus1.rotation.x = Math.PI / 3;
    ringGroup.add(torus1);

    // Inner Icosahedron Wireframe
    const icoGeom = new THREE.IcosahedronGeometry(75, 1);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const ico = new THREE.Mesh(icoGeom, icoMaterial);
    ico.position.set(-260, 100, -250);
    ringGroup.add(ico);

    // 8. Interactive Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onPointerMove = (e: MouseEvent) => {
      mouseX = (e.clientX - windowHalfX) * 0.4;
      mouseY = (e.clientY - windowHalfY) * 0.3;
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });

    // 9. Resize Handling
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    // 10. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const initialPositions = waveGeometry.attributes.position.array.slice() as Float32Array;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth Camera Lerp towards Mouse
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      camera.position.x = targetX * 0.8;
      camera.position.y = 60 - targetY * 0.6;
      camera.lookAt(0, 0, 0);

      // Particle Field Gentle Rotation
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = Math.sin(elapsedTime * 0.05) * 0.05;

      // Rotate 3D Floating Geometry
      torus1.rotation.x += 0.003;
      torus1.rotation.y += 0.005;
      ico.rotation.x -= 0.004;
      ico.rotation.y += 0.003;
      ringGroup.position.y = Math.sin(elapsedTime * 0.8) * 15;

      // Undulating Cyber Wave Animation (sin wave displacement on vertices)
      const positionAttr = waveGeometry.attributes.position;
      const vertex = new THREE.Vector3();

      for (let i = 0; i < positionAttr.count; i++) {
        const u = initialPositions[i * 3];
        const v = initialPositions[i * 3 + 2];

        // 3D Wave function
        const wave =
          Math.sin(u * 0.01 + elapsedTime * 1.2) * 16 +
          Math.cos(v * 0.01 + elapsedTime * 0.9) * 14 +
          Math.sin((u + v) * 0.005 + elapsedTime * 0.7) * 10;

        vertex.fromArray(initialPositions, i * 3);
        positionAttr.setY(i, vertex.y + wave);
      }
      positionAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 11. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      particleMaterial.dispose();
      waveGeometry.dispose();
      waveMaterial.dispose();
      torusGeom.dispose();
      ringMaterial.dispose();
      icoGeom.dispose();
      icoMaterial.dispose();
      if (particleTexture) particleTexture.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
