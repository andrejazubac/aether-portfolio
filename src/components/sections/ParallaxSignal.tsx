"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function ParallaxSignal() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const gridY = useTransform(scrollYProgress, [0, 1], ["8%", "-10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["16%", "-12%"]);

  return (
    <section ref={ref} className="relative min-h-[92vh] overflow-hidden bg-porcelain text-carbon">
      <motion.div style={{ y: imageY }} className="absolute inset-[-10%]">
        {/* TODO: Replace image with custom Aether Studio process or architecture visual. */}
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85"
          alt="Minimal architectural interior placeholder"
          fill
          sizes="100vw"
          className="object-cover opacity-55 saturate-[0.72]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(243,240,234,0.92),rgba(243,240,234,0.64),rgba(243,240,234,0.92))]" />
      <motion.div style={{ y: gridY }} className="absolute inset-0 grid-lines opacity-70" />
      <div className="absolute inset-x-5 top-10 h-px bg-carbon/18 md:inset-x-10" />
      <div className="absolute inset-x-5 bottom-10 h-px bg-carbon/18 md:inset-x-10" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-[1560px] items-center px-5 py-28 md:px-10">
        <motion.div style={{ y: textY }} className="grid w-full gap-10 lg:grid-cols-[0.35fr_1fr]">
          <div className="text-xs uppercase tracking-label text-carbon/48">
            <p>Scroll signal</p>
            <p className="mt-4">Architecture / Atmosphere / Automation</p>
          </div>
          <div>
            <p className="max-w-5xl font-display text-[clamp(3.8rem,9vw,10.5rem)] font-medium leading-[0.84] text-balance">
              Digital products with atmosphere and architecture.
            </p>
            <div className="mt-12 grid max-w-4xl gap-4 text-sm uppercase tracking-label text-carbon/52 md:grid-cols-3">
              <span>01 Strategy</span>
              <span>02 Systems</span>
              <span>03 Experience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
