"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 400;
    const height = mount.clientHeight || 420;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const tealLight = new THREE.PointLight(0x14b8a6, 80, 50);
    tealLight.position.set(10, 12, 15);
    scene.add(tealLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 60, 40);
    cyanLight.position.set(-12, -8, 10);
    scene.add(cyanLight);

    // 4. Main 3D Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 5. 3D Smartphone / Tablet Hologram Chassis
    const phoneGroup = new THREE.Group();
    rootGroup.add(phoneGroup);

    // Phone Body (rounded box)
    const phoneWidth = 6.8;
    const phoneHeight = 13.5;
    const phoneDepth = 0.55;
    const phoneGeom = new THREE.BoxGeometry(phoneWidth, phoneHeight, phoneDepth);
    const phoneMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.85,
      roughness: 0.25,
    });
    const phoneMesh = new THREE.Mesh(phoneGeom, phoneMat);
    phoneGroup.add(phoneMesh);

    // Phone Edge Glow Wireframe
    const wireGeom = new THREE.EdgesGeometry(phoneGeom);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.7,
      linewidth: 2,
    });
    const wireMesh = new THREE.LineSegments(wireGeom, wireMat);
    phoneGroup.add(wireMesh);

    // Holographic Screen Plane
    const screenGeom = new THREE.PlaneGeometry(phoneWidth - 0.4, phoneHeight - 0.7);
    const screenMat = new THREE.MeshBasicMaterial({
      color: 0x0a101d,
      transparent: true,
      opacity: 0.95,
    });
    const screenMesh = new THREE.Mesh(screenGeom, screenMat);
    screenMesh.position.z = phoneDepth / 2 + 0.01;
    phoneGroup.add(screenMesh);

    // Screen UI Elements (Flutter Logo Cyan Chevron Shapes in 3D)
    const flutterGroup = new THREE.Group();
    flutterGroup.position.set(0, 1.2, phoneDepth / 2 + 0.08);

    // Top Chevron
    const topBarGeom = new THREE.BoxGeometry(3.2, 0.4, 0.05);
    const flutterMat = new THREE.MeshBasicMaterial({ color: 0x14b8a6 });
    const topBar = new THREE.Mesh(topBarGeom, flutterMat);
    topBar.rotation.z = -Math.PI / 4;
    topBar.position.set(0.6, 1.2, 0);
    flutterGroup.add(topBar);

    // Middle Chevron
    const midBarGeom = new THREE.BoxGeometry(2.2, 0.4, 0.05);
    const cyanMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const midBar = new THREE.Mesh(midBarGeom, cyanMat);
    midBar.rotation.z = Math.PI / 4;
    midBar.position.set(0.9, -0.2, 0);
    flutterGroup.add(midBar);

    // Bottom Chevron
    const botBarGeom = new THREE.BoxGeometry(2.2, 0.4, 0.05);
    const botBar = new THREE.Mesh(botBarGeom, cyanMat);
    botBar.rotation.z = -Math.PI / 4;
    botBar.position.set(1.4, -0.9, 0);
    flutterGroup.add(botBar);

    phoneGroup.add(flutterGroup);

    // 6. Orbiting Holographic Rings
    const ring1Geom = new THREE.TorusGeometry(9.2, 0.04, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.rotation.x = Math.PI / 2.8;
    rootGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(10.5, 0.03, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = -Math.PI / 3.2;
    ring2.rotation.y = Math.PI / 5;
    rootGroup.add(ring2);

    // Orbiting Satellite Nodes
    const satelliteGeom = new THREE.SphereGeometry(0.35, 16, 16);
    const sat1Mat = new THREE.MeshBasicMaterial({ color: 0x14b8a6 });
    const sat1 = new THREE.Mesh(satelliteGeom, sat1Mat);
    ring1.add(sat1);
    sat1.position.x = 9.2;

    const sat2Mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const sat2 = new THREE.Mesh(satelliteGeom, sat2Mat);
    ring2.add(sat2);
    sat2.position.x = 10.5;

    // 7. Interactive Rotation with Pointer & Touch Controls
    let targetRotationX = 0.2;
    let targetRotationY = -0.3;

    const handlePointer = (clientX: number, clientY: number) => {
      const rect = mount.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 1.8;
      targetRotationX = y * 1.2;
    };

    const onPointerMove = (e: MouseEvent) => {
      handlePointer(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    mount.addEventListener("mousemove", onPointerMove);
    mount.addEventListener("touchmove", onTouchMove, { passive: true });

    // 8. Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW && newH) {
          camera.aspect = newW / newH;
          // Responsive camera distance: zoom out slightly on smaller screens
          camera.position.z = newW < 360 ? 22 : 19;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(mount);

    // 9. Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth Lerp rotation with Mouse / Touch
      phoneGroup.rotation.y += (targetRotationY - phoneGroup.rotation.y) * 0.08;
      phoneGroup.rotation.x += (targetRotationX - phoneGroup.rotation.x) * 0.08;

      // Gentle floating levitation
      phoneGroup.position.y = Math.sin(time * 1.5) * 0.35;

      // Orbiting rings rotation
      ring1.rotation.z += 0.008;
      ring2.rotation.z -= 0.006;

      // Glow light oscillation
      tealLight.intensity = 70 + Math.sin(time * 2.5) * 20;

      renderer.render(scene, camera);
    };

    animate();

    // 10. Cleanup
    return () => {
      cancelAnimationFrame(animId);
      mount.removeEventListener("mousemove", onPointerMove);
      mount.removeEventListener("touchmove", onTouchMove);
      resizeObserver.disconnect();
      renderer.dispose();
      phoneGeom.dispose();
      phoneMat.dispose();
      wireGeom.dispose();
      wireMat.dispose();
      screenGeom.dispose();
      screenMat.dispose();
      topBarGeom.dispose();
      midBarGeom.dispose();
      botBarGeom.dispose();
      flutterMat.dispose();
      cyanMat.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      satelliteGeom.dispose();
      sat1Mat.dispose();
      sat2Mat.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D Flutter Mobile Hologram"
    />
  );
}
