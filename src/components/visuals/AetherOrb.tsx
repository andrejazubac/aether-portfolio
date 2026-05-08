"use client";

import { useEffect, useRef } from "react";

type Particle = {
  angle: number;
  radius: number;
  speed: number;
  size: number;
  color: string;
  orbit: number;
};

export function AetherOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let ratio = 1;
    let frame = 0;
    let animation = 0;

    const colors = ["#DDF7FF", "#8ADCE8", "#CBD8DC", "#FBFAF7", "#7FB9C8"];

    const resize = () => {
      ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles.length = 0;

      for (let i = 0; i < 92; i += 1) {
        particles.push({
          angle: Math.random() * Math.PI * 2,
          radius: 44 + Math.random() * Math.min(width, height) * 0.38,
          speed: 0.0011 + Math.random() * 0.0026,
          size: 0.65 + Math.random() * 1.55,
          color: colors[i % colors.length],
          orbit: i % 4
        });
      }
    };

    const drawOrbit = (
      centerX: number,
      centerY: number,
      radiusX: number,
      radiusY: number,
      rotation: number,
      color: string,
      opacity: number
    ) => {
      context.save();
      context.translate(centerX, centerY);
      context.rotate(rotation);
      context.beginPath();
      context.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
      context.strokeStyle = color;
      context.globalAlpha = opacity;
      context.lineWidth = 1;
      context.stroke();
      context.restore();
      context.globalAlpha = 1;
    };

    const render = () => {
      frame += prefersReducedMotion ? 0.2 : 1;
      context.clearRect(0, 0, width, height);

      const centerX = width * 0.5;
      const centerY = height * 0.5;
      const pulse = Math.sin(frame * 0.018) * 0.5 + 0.5;
      const coreRadius = Math.min(width, height) * (0.18 + pulse * 0.012);

      const glow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, coreRadius * 2.8);
      glow.addColorStop(0, "rgba(221,247,255,0.42)");
      glow.addColorStop(0.34, "rgba(138,220,232,0.22)");
      glow.addColorStop(0.64, "rgba(203,216,220,0.08)");
      glow.addColorStop(1, "rgba(17,17,15,0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      drawOrbit(centerX, centerY, coreRadius * 2.05, coreRadius * 0.56, frame * 0.0035, "#DDF7FF", 0.42);
      drawOrbit(centerX, centerY, coreRadius * 1.48, coreRadius * 0.42, -frame * 0.0045, "#8ADCE8", 0.36);
      drawOrbit(centerX, centerY, coreRadius * 2.32, coreRadius * 0.66, frame * 0.0025 + 1.1, "#F3F0EA", 0.2);
      drawOrbit(centerX, centerY, coreRadius * 1.76, coreRadius * 0.34, -frame * 0.003 + 2.2, "#7FB9C8", 0.22);

      context.save();
      context.translate(centerX, centerY);
      context.rotate(frame * 0.0025);
      context.beginPath();
      for (let i = 0; i <= 96; i += 1) {
        const angle = (i / 96) * Math.PI * 2;
        const radius = coreRadius * (1 + Math.sin(angle * 5 + frame * 0.016) * 0.06);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        if (i === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.closePath();
      context.fillStyle = "rgba(118,181,195,0.16)";
      context.strokeStyle = "rgba(221,247,255,0.72)";
      context.lineWidth = 1;
      context.fill();
      context.stroke();
      context.restore();

      particles.forEach((particle) => {
        if (!prefersReducedMotion) {
          particle.angle += particle.speed;
        }

        const squash = [0.42, 0.52, 0.6, 0.36][particle.orbit];
        const tilt = [0.2, 1.2, -0.8, 2.1][particle.orbit] + frame * 0.001;
        const x = centerX + Math.cos(particle.angle + tilt) * particle.radius;
        const y = centerY + Math.sin(particle.angle) * particle.radius * squash;

        context.beginPath();
        context.arc(x, y, particle.size, 0, Math.PI * 2);
        context.fillStyle = particle.color;
        context.globalAlpha = particle.color === "#DDF7FF" ? 0.76 : 0.54;
        context.fill();
        context.globalAlpha = 1;
      });

      animation = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative h-[20rem] w-full overflow-hidden md:h-[28rem] lg:h-[31rem]">
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />
    </div>
  );
}
