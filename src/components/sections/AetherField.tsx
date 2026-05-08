"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export function AetherField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let animation = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      nodes.length = 0;

      const count = width < 768 ? 34 : 58;
      for (let i = 0; i < count; i += 1) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.12,
          r: Math.random() * 1.6 + 0.6
        });
      }
    };

    const render = () => {
      frame += 1;
      context.clearRect(0, 0, width, height);

      const gradient = context.createRadialGradient(width * 0.64, height * 0.28, 0, width * 0.64, height * 0.28, width * 0.78);
      gradient.addColorStop(0, "rgba(203, 216, 220, 0.22)");
      gradient.addColorStop(0.42, "rgba(166, 95, 62, 0.09)");
      gradient.addColorStop(1, "rgba(17, 17, 15, 0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      nodes.forEach((node, index) => {
        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < -20) node.x = width + 20;
          if (node.x > width + 20) node.x = -20;
          if (node.y < -20) node.y = height + 20;
          if (node.y > height + 20) node.y = -20;
        }

        context.beginPath();
        context.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        context.fillStyle = index % 5 === 0 ? "rgba(166, 95, 62, 0.55)" : "rgba(251, 250, 247, 0.46)";
        context.fill();
      });

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.strokeStyle = `rgba(251, 250, 247, ${0.08 * (1 - distance / 150)})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }
      }

      const scanY = (Math.sin(frame * 0.006) * 0.5 + 0.5) * height;
      context.fillStyle = "rgba(251, 250, 247, 0.045)";
      context.fillRect(width * 0.08, scanY, width * 0.84, 1);

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

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
