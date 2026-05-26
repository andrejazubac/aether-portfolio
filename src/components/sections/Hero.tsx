"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowDownRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLanguage } from "@/context/LanguageContext";
import { studio } from "@/data/studio";
import { renderFormattedText } from "@/lib/utils";

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
                <defs>
                  {/* Gradients for stacked area layers */}
                  <linearGradient id="layer1Grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#181816" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#181816" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="layer2Grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#26382d" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#26382d" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="layer3Grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a65f3e" stopOpacity="0.32" />
                    <stop offset="100%" stopColor="#a65f3e" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Background coordinate grid line accents */}
                <line x1="100" y1="10" x2="100" y2="170" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-10" />
                <line x1="200" y1="10" x2="200" y2="170" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-10" />
                <line x1="300" y1="10" x2="300" y2="170" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-10" />
                <line x1="10" y1="90" x2="390" y2="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-10" />

                {/* Monospace telemetry labels */}
                <text x="15" y="22" className="fill-carbon/35 font-mono text-[7px]" letterSpacing="0.5">STACK.ANLYS: ACTIVE</text>
                <text x="315" y="22" className="fill-oxide/60 font-mono text-[7px] font-semibold" letterSpacing="0.5">LOAD: NOMINAL</text>
                
                <text x="250" y="145" className="fill-carbon/25 font-mono text-[6px] font-bold" letterSpacing="0.3">L1: BASE_DB</text>
                <text x="250" y="115" className="fill-moss/45 font-mono text-[6px] font-bold" letterSpacing="0.3">L2: API_FLOW</text>
                <text x="250" y="75" className="fill-oxide/65 font-mono text-[6px] font-bold" letterSpacing="0.3">L3: PEAK_IO</text>

                {/* 1. LAYER 1: Bottom Area (Carbon) */}
                <motion.path
                  d="M 0 140 Q 60 120, 120 135 T 240 115 T 360 130 T 400 120 L 400 180 L 0 180 Z"
                  fill="url(#layer1Grad)"
                  stroke="#181816"
                  strokeWidth="0.75"
                  className="opacity-30 text-carbon"
                  animate={{
                    d: [
                      "M 0 140 Q 60 120, 120 135 T 240 115 T 360 130 T 400 120 L 400 180 L 0 180 Z",
                      "M 0 140 Q 60 135, 120 115 T 240 130 T 360 110 T 400 135 L 400 180 L 0 180 Z",
                      "M 0 140 Q 60 115, 120 140 T 240 120 T 360 125 T 400 115 L 400 180 L 0 180 Z",
                      "M 0 140 Q 60 120, 120 135 T 240 115 T 360 130 T 400 120 L 400 180 L 0 180 Z"
                    ]
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* 2. LAYER 2: Middle Area (Moss/Sage) */}
                <motion.path
                  d="M 0 140 Q 50 90, 110 105 T 220 85 T 330 100 T 400 90 L 400 180 L 0 180 Z"
                  fill="url(#layer2Grad)"
                  stroke="#26382d"
                  strokeWidth="1"
                  className="opacity-40 text-moss"
                  animate={{
                    d: [
                      "M 0 140 Q 50 90, 110 105 T 220 85 T 330 100 T 400 90 L 400 180 L 0 180 Z",
                      "M 0 140 Q 50 110, 110 85 T 220 100 T 330 80 T 400 105 L 400 180 L 0 180 Z",
                      "M 0 140 Q 50 85, 110 100 T 220 90 T 330 95 T 400 80 L 400 180 L 0 180 Z",
                      "M 0 140 Q 50 90, 110 105 T 220 85 T 330 100 T 400 90 L 400 180 L 0 180 Z"
                    ]
                  }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />

                {/* 3. LAYER 3: Top Area (Oxide/Terracotta) */}
                <motion.path
                  d="M 0 140 Q 55 55, 105 70 T 210 50 T 315 65 T 400 50 L 400 180 L 0 180 Z"
                  fill="url(#layer3Grad)"
                  stroke="#a65f3e"
                  strokeWidth="1.25"
                  className="opacity-60 text-oxide"
                  animate={{
                    d: [
                      "M 0 140 Q 55 55, 105 70 T 210 50 T 315 65 T 400 50 L 400 180 L 0 180 Z",
                      "M 0 140 Q 55 75, 105 45 T 210 65 T 315 45 T 400 70 L 400 180 L 0 180 Z",
                      "M 0 140 Q 55 45, 105 60 T 210 50 T 315 55 T 400 45 L 400 180 L 0 180 Z",
                      "M 0 140 Q 55 55, 105 70 T 210 50 T 315 65 T 400 50 L 400 180 L 0 180 Z"
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating Peak Nodes tracking peak shifts */}
                <motion.circle
                  cx="105"
                  animate={{ cy: [70, 45, 60, 70] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  r="3.5"
                  className="fill-oxide"
                />
                <motion.circle
                  cx="210"
                  animate={{ cy: [50, 65, 50, 50] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  r="3"
                  className="fill-carbon"
                />
                <motion.circle
                  cx="315"
                  animate={{ cy: [65, 45, 55, 65] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  r="3"
                  className="fill-oxide"
                />

                {/* Diagnostic sweep line across stacked area chart */}
                <motion.line
                  x1="0"
                  y1="10"
                  x2="0"
                  y2="175"
                  stroke="currentColor"
                  strokeWidth="0.75"
                  className="text-oxide opacity-45"
                  animate={{ x: [10, 390, 10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Calibration tick marks along the bottom border representing scan limits */}
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
