"use client";

import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles, ArrowDownRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLanguage } from "@/context/LanguageContext";
import { studio } from "@/data/studio";
import { renderFormattedText } from "@/lib/utils";

const avatarGroupVariants: Variants = {
  idle: {
    x: [0, 6, -4, 0],
    y: [0, -8, 5, 0],
    transition: {
      x: { repeat: Infinity, duration: 8, ease: "easeInOut" as const },
      y: { repeat: Infinity, duration: 7, ease: "easeInOut" as const }
    }
  },
  hover: {
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 150, damping: 20 }
  }
};

const avatarCircleVariants: Variants = {
  idle: {
    cx: 100,
    cy: 65,
    r: 28,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  },
  hover: {
    cx: 75,
    cy: 50,
    r: 14,
    transition: { type: "spring", stiffness: 150, damping: 20 }
  }
};

const rectGroupVariants: Variants = {
  idle: {
    x: [0, -5, 7, 0],
    y: [0, 8, -6, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      x: { repeat: Infinity, duration: 9, ease: "easeInOut" as const },
      y: { repeat: Infinity, duration: 8, ease: "easeInOut" as const },
      rotate: { repeat: Infinity, duration: 10, ease: "easeInOut" as const }
    }
  },
  hover: {
    x: 0,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 150, damping: 20 }
  }
};

const rectShapeVariants: Variants = {
  idle: {
    x: 210,
    y: 45,
    width: 130,
    height: 80,
    rx: 16,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  },
  hover: {
    x: 60,
    y: 76,
    width: 280,
    height: 62,
    rx: 8,
    transition: { type: "spring", stiffness: 150, damping: 20 }
  }
};

const tagGroupVariants: Variants = {
  idle: {
    x: [0, 8, -6, 0],
    y: [0, 6, -9, 0],
    rotate: [0, -3, 3, 0],
    transition: {
      x: { repeat: Infinity, duration: 7, ease: "easeInOut" as const },
      y: { repeat: Infinity, duration: 9, ease: "easeInOut" as const },
      rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" as const }
    }
  },
  hover: {
    x: 0,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 150, damping: 20 }
  }
};

const tagShapeVariants: Variants = {
  idle: {
    x: 95,
    y: 110,
    width: 40,
    height: 40,
    rx: 8,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  },
  hover: {
    x: 280,
    y: 42,
    width: 60,
    height: 16,
    rx: 8,
    transition: { type: "spring", stiffness: 150, damping: 20 }
  }
};

export function Hero() {
  const { t } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const disciplines = [
    {
      index: "01",
      title: t("hero.d1_title"),
      desc: t("hero.d1_desc")
    },
    {
      index: "02",
      title: t("hero.d2_title"),
      desc: t("hero.d2_desc")
    },
    {
      index: "03",
      title: t("hero.d3_title"),
      desc: t("hero.d3_desc")
    },
    {
      index: "04",
      title: t("hero.d4_title"),
      desc: t("hero.d4_desc")
    }
  ];

  return (
    <section className="grid-lines relative flex min-h-screen overflow-hidden bg-porcelain px-5 pb-12 pt-28 text-carbon md:px-10 md:pb-16 md:pt-32">
      {/* Decorative Warm Gradients */}
      <div className="absolute right-[10%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-mist/25 blur-3xl animate-drift-slow" />
      <div className="absolute left-[5%] bottom-[15%] h-[28rem] w-[28rem] rounded-full bg-oxide/8 blur-3xl animate-drift-medium" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_20%,rgba(243,240,234,0.4)_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1560px] flex-col justify-between gap-12">
        {/* Main Branding & Editorial copy */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-label text-oxide">
              <Sparkles size={11} className="animate-pulse" />
              <span>{t("hero.tag")}</span>
            </div>
            
            <h1 className="mt-4 max-w-5xl font-display text-[clamp(4.2rem,11.2vw,11.8rem)] font-medium leading-[0.8] text-balance tracking-tight">
              {t("hero.title")}
            </h1>

            <p className="mt-8 max-w-2xl font-display text-2xl leading-relaxed text-carbon/75 md:text-3xl italic">
              {renderFormattedText(t("hero.subtitle"))}
            </p>
          </motion.div>

          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative flex flex-col justify-between p-8 bg-chalk/35 border border-carbon/10 rounded-2xl shadow-sm backdrop-blur-sm hover:border-oxide/30 hover:shadow-soft transition-all duration-500 overflow-hidden min-h-[460px] lg:mt-16"
          >
            {/* Ambient indicator tracking labels inside layout */}
            <div className="absolute inset-0 grid-lines opacity-10 pointer-events-none" />

            <div className="relative z-10">
              <p className="max-w-md text-sm leading-relaxed text-carbon/62">
                {renderFormattedText(t("hero.description"))}
              </p>
            </div>

            {/* Middle: Abstract SVG Animation */}
            <div className="relative z-10 flex items-center justify-center h-44 my-2 select-none">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-carbon"
              >
                {/* Background coordinate grid line accents */}
                <line x1="100" y1="10" x2="100" y2="170" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-10" />
                <line x1="200" y1="10" x2="200" y2="170" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-10" />
                <line x1="300" y1="10" x2="300" y2="170" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-10" />
                <line x1="10" y1="90" x2="390" y2="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-10" />

                {/* Monospace telemetry labels */}
                <text x="15" y="22" className="fill-carbon/35 font-mono text-[7px]" letterSpacing="0.5">
                  KINETIC.LAYOUT: {isHovered ? "MOCKUP_ALIGN" : "CREATIVE_DRIFT"}
                </text>
                <text x="310" y="22" className="fill-oxide/60 font-mono text-[7px] font-semibold" letterSpacing="0.5">
                  SYS.MODE: {isHovered ? "LOCKED" : "ACTIVE"}
                </text>

                {/* Outer mobile mockup frame guide */}
                <motion.rect
                  x="40"
                  y="20"
                  width="320"
                  height="140"
                  rx="16"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="text-carbon"
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: isHovered ? 0.35 : 0.1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Crop marks */}
                <g className="text-carbon/25 opacity-40">
                  <path d="M 30 20 L 40 20 M 40 10 L 40 20" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M 370 20 L 360 20 M 360 10 L 360 20" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M 30 160 L 40 160 M 40 170 L 40 160" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M 370 160 L 360 160 M 360 170 L 360 160" stroke="currentColor" strokeWidth="0.75" />
                </g>

                {/* Spacing alignment lines & pixel-metrics */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Left Margin (20px) */}
                  <line x1="40" y1="107" x2="60" y2="107" stroke="#A65F3E" strokeWidth="0.75" />
                  <line x1="40" y1="104" x2="40" y2="110" stroke="#A65F3E" strokeWidth="0.75" />
                  <line x1="60" y1="104" x2="60" y2="110" stroke="#A65F3E" strokeWidth="0.75" />
                  <text x="44" y="102" className="fill-oxide font-mono text-[7px]">20</text>

                  {/* Right Margin (20px) */}
                  <line x1="340" y1="50" x2="360" y2="50" stroke="#A65F3E" strokeWidth="0.75" />
                  <line x1="340" y1="47" x2="340" y2="53" stroke="#A65F3E" strokeWidth="0.75" />
                  <line x1="360" y1="47" x2="360" y2="53" stroke="#A65F3E" strokeWidth="0.75" />
                  <text x="344" y="45" className="fill-oxide font-mono text-[7px]">20</text>

                  {/* Vert Padding (12px) */}
                  <line x1="75" y1="64" x2="75" y2="76" stroke="#A65F3E" strokeWidth="0.75" />
                  <line x1="72" y1="64" x2="78" y2="64" stroke="#A65F3E" strokeWidth="0.75" />
                  <line x1="72" y1="76" x2="78" y2="76" stroke="#A65F3E" strokeWidth="0.75" />
                  <text x="82" y="73" className="fill-oxide font-mono text-[7px]">12</text>

                  {/* Width Indicator (280px) */}
                  <line x1="60" y1="147" x2="340" y2="147" stroke="#A65F3E" strokeWidth="0.75" strokeDasharray="2 2" className="opacity-60" />
                  <line x1="60" y1="144" x2="60" y2="150" stroke="#A65F3E" strokeWidth="0.75" />
                  <line x1="340" y1="144" x2="340" y2="150" stroke="#A65F3E" strokeWidth="0.75" />
                  <text x="200" y="155" className="fill-oxide font-mono text-[8px] font-semibold" textAnchor="middle">W: 280</text>

                  {/* Subtle alignment grid guides */}
                  <line x1="60" y1="15" x2="60" y2="165" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="text-carbon/10" />
                  <line x1="340" y1="15" x2="340" y2="165" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="text-carbon/10" />
                </motion.g>

                {/* Header Text Placeholders (only visible on hover) */}
                <motion.g
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 5 }}
                  transition={{ duration: 0.4, delay: isHovered ? 0.08 : 0 }}
                >
                  <rect x="100" y="43" width="90" height="5" rx="2.5" className="fill-carbon/20" />
                  <rect x="100" y="52" width="55" height="4" rx="2" className="fill-carbon/10" />
                </motion.g>

                {/* Card Body Text Placeholders (only visible on hover) */}
                <motion.g
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 5 }}
                  transition={{ duration: 0.4, delay: isHovered ? 0.12 : 0 }}
                >
                  <rect x="75" y="90" width="250" height="5" rx="2.5" className="fill-carbon/15" />
                  <rect x="75" y="102" width="215" height="5" rx="2.5" className="fill-carbon/10" />
                  <rect x="75" y="114" width="130" height="5" rx="2.5" className="fill-carbon/10" />
                </motion.g>

                {/* Shape B: Slate Rectangle Group */}
                <motion.g
                  variants={rectGroupVariants}
                  animate={isHovered ? "hover" : "idle"}
                >
                  <motion.rect
                    variants={rectShapeVariants}
                    className="fill-carbon/90"
                  />
                  {/* Idle inner wireframe detail */}
                  <motion.g
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isHovered ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <rect x="230" y="65" width="90" height="4" rx="2" className="fill-porcelain/20" />
                    <rect x="230" y="77" width="70" height="4" rx="2" className="fill-porcelain/15" />
                    <rect x="230" y="89" width="45" height="4" rx="2" className="fill-porcelain/15" />
                    <circle cx="315" cy="67" r="3" className="fill-oxide/80" />
                  </motion.g>
                </motion.g>

                {/* Shape A: Oxide Circle Group */}
                <motion.g
                  variants={avatarGroupVariants}
                  animate={isHovered ? "hover" : "idle"}
                >
                  <motion.circle
                    variants={avatarCircleVariants}
                    className="fill-oxide"
                  />
                  {/* Dynamic inner concentric ring */}
                  <motion.circle
                    animate={{
                      cx: isHovered ? 75 : 100,
                      cy: isHovered ? 50 : 65,
                      r: isHovered ? 5 : 12,
                    }}
                    transition={isHovered ? { type: "spring", stiffness: 150, damping: 20 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    fill="none"
                    stroke="#FBFAF7"
                    strokeWidth="1.5"
                    className="opacity-70"
                  />
                </motion.g>

                {/* Shape C: Moss Tag Group */}
                <motion.g
                  variants={tagGroupVariants}
                  animate={isHovered ? "hover" : "idle"}
                >
                  <motion.rect
                    variants={tagShapeVariants}
                    className="fill-moss"
                  />
                  {/* Idle inner sign */}
                  <motion.g
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isHovered ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <line x1="110" y1="130" x2="120" y2="130" stroke="#FBFAF7" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="115" y1="125" x2="115" y2="135" stroke="#FBFAF7" strokeWidth="1.5" strokeLinecap="round" />
                  </motion.g>
                  {/* Hovered inner content */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: isHovered ? 0.15 : 0 }}
                  >
                    <circle cx="290" cy="50" r="2.5" className="fill-porcelain" />
                    <rect x="297" y="48" width="33" height="4" rx="2" className="fill-porcelain/80" />
                  </motion.g>
                </motion.g>

                {/* Calibration tick marks representing scan limits */}
                {[20, 56, 92, 128, 164, 200, 236, 272, 308, 344, 380].map((x, i) => (
                  <line
                    key={i}
                    x1={x}
                    y1="168"
                    x2={x}
                    y2={i % 5 === 0 ? "175" : "172"}
                    stroke="currentColor"
                    strokeWidth="0.75"
                    className="opacity-15 text-carbon"
                  />
                ))}
              </svg>
            </div>

            {/* Bottom: CTA Buttons */}
            <div className="relative z-10 flex flex-wrap items-center gap-4 border-t border-carbon/8 pt-6">
              <MagneticButton href={`mailto:${studio.email}`} variant="dark">
                {t("hero.ctaStart")}
              </MagneticButton>
              <a
                href="/pricing"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-label text-carbon/72 transition-colors hover:text-oxide font-semibold"
              >
                <span>{t("hero.ctaPricing")}</span>
                <ArrowDownRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </div>

            {/* Live Locator Status indicator */}
            <div className="absolute bottom-6 right-8 text-[9px] font-mono text-carbon/30 select-none">
              {isHovered ? (
                <span>SYS.LOC: [{(mousePos.x * 0.5).toFixed(1)}, {(mousePos.y * -0.5).toFixed(1)}]</span>
              ) : (
                <span>SYS.LOC: [IDLE_TRACK]</span>
              )}
            </div>
          </motion.div>
        </div>

        {/* Dynamic Coordinates Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 border-t border-carbon/10 pt-8"
        >
          {disciplines.map((disc) => (
            <div
              key={disc.index}
              className="group relative flex flex-col justify-between border border-carbon/8 bg-chalk/45 p-6 shadow-sm transition-all duration-300 hover:border-oxide/30 hover:bg-chalk/82 hover:shadow-soft"
            >
              <div className="flex justify-between items-start">
                <span className="font-display text-xs text-oxide/70 font-semibold">{disc.index}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-carbon/15 group-hover:bg-oxide transition-colors duration-300" />
              </div>
              <div className="mt-8">
                <h3 className="text-base font-semibold text-carbon group-hover:text-oxide transition-colors duration-300">
                  {disc.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-carbon/58">
                  {disc.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Footer info strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-carbon/10 pt-5 text-[11px] uppercase tracking-label text-carbon/45"
        >
          <div>
            <span>{t("hero.founded")}: {studio.founder}</span>
          </div>
          <div>
            <span>{t("hero.coordinates")}: {studio.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
