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
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
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
                width="280"
                height="170"
                viewBox="0 0 280 170"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-carbon"
              >
                {/* Background coordinate grid line accents */}
                <line x1="140" y1="5" x2="140" y2="165" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-15" />
                <line x1="15" y1="65" x2="265" y2="65" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-15" />

                {/* Concentric Energy Waves expanding outwards from nucleus */}
                <circle cx="140" cy="65" r="3" className="fill-carbon" />
                <motion.circle
                  cx="140"
                  cy="65"
                  animate={{ r: [6, 20, 6], opacity: [0.6, 0.1, 0.6] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  stroke="currentColor"
                  strokeWidth="0.75"
                  className="text-oxide/40"
                />
                <motion.circle
                  cx="140"
                  cy="65"
                  animate={{ r: [12, 34, 12], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-carbon/20"
                />
                <motion.circle
                  cx="140"
                  cy="65"
                  animate={{ r: [20, 52, 20], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-carbon/10"
                />

                {/* 3D Atomic Elliptical Orbits with rotating particle dots */}
                {/* Orbit 1: Tilted left (-28 degrees) */}
                <g transform="translate(140, 65) rotate(-28)">
                  <g transform="scale(1, 0.36)">
                    <circle cx="0" cy="0" r="54" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 3" className="opacity-25 text-carbon" />
                    <motion.g
                      animate={{ rotate: 360 }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
                    >
                      <circle cx="54" cy="0" r="2.5" className="fill-oxide" />
                    </motion.g>
                  </g>
                </g>

                {/* Orbit 2: Tilted right (28 degrees) */}
                <g transform="translate(140, 65) rotate(28)">
                  <g transform="scale(1, 0.36)">
                    <circle cx="0" cy="0" r="54" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 3" className="opacity-25 text-carbon" />
                    <motion.g
                      animate={{ rotate: -360 }}
                      transition={{ duration: 7.5, repeat: Infinity, ease: "linear" }}
                    >
                      <circle cx="54" cy="0" r="2" className="fill-carbon opacity-60" />
                    </motion.g>
                  </g>
                </g>

                {/* Orbit 3: Horizontal (0 degrees, wider) */}
                <g transform="translate(140, 65)">
                  <g transform="scale(1, 0.28)">
                    <circle cx="0" cy="0" r="72" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 3" className="opacity-20 text-carbon" />
                    <motion.g
                      animate={{ rotate: 360 }}
                      transition={{ duration: 9.5, repeat: Infinity, ease: "linear" }}
                    >
                      <circle cx="72" cy="0" r="2" className="fill-oxide" />
                    </motion.g>
                  </g>
                </g>

                {/* Sliding Frequency Waves at the bottom boundary */}
                <g>
                  {/* Solid Wave (Carbon) */}
                  <motion.path
                    d="M -80 135 Q -60 123, -40 135 T 0 135 T 40 135 T 80 135 T 120 135 T 160 135 T 200 135 T 240 135 T 280 135 T 320 135 T 360 135"
                    stroke="currentColor"
                    strokeWidth="0.75"
                    className="opacity-25 text-carbon"
                    animate={{ x: [-80, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Dashed Wave (Oxide, out-of-phase sliding opposite direction) */}
                  <motion.path
                    d="M -80 135 Q -60 147, -40 135 T 0 135 T 40 135 T 80 135 T 120 135 T 160 135 T 200 135 T 240 135 T 280 135 T 320 135 T 360 135"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="3 3"
                    className="opacity-18 text-oxide"
                    animate={{ x: [0, -80] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                  />
                </g>

                {/* Bottom measurement scale ticks representing wave scan */}
                {[30, 52, 74, 96, 118, 140, 162, 184, 206, 228, 250].map((x, i) => (
                  <line
                    key={i}
                    x1={x}
                    y1="152"
                    x2={x}
                    y2={i % 5 === 0 ? "160" : "156"}
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
