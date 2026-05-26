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
                <line x1="140" y1="10" x2="140" y2="160" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-15" />
                <line x1="20" y1="60" x2="260" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="opacity-15" />

                {/* Rotating Outer Dashed Circle representing Orbit */}
                <motion.circle
                  cx="140"
                  cy="60"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="6 4"
                  className="opacity-25"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  style={{ originX: "140px", originY: "60px" }}
                />

                {/* Rotating Inner Circle with solid parts */}
                <motion.circle
                  cx="140"
                  cy="60"
                  r="24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="15 8"
                  className="opacity-45 text-oxide"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  style={{ originX: "140px", originY: "60px" }}
                />

                {/* Solid Core Dot */}
                <circle cx="140" cy="60" r="4" className="fill-carbon" />
                <motion.circle
                  cx="140"
                  cy="60"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="opacity-40"
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Oscillating Pendulum/Equalizer Lines below the core */}
                {[70, 87, 104, 121, 138, 155, 172, 189, 206, 223, 240].map((x, i) => {
                  // i ranges from 0 to 10. Center index is 5 (x = 138)
                  const distanceFromCenter = Math.abs(i - 5);
                  const baseHeight = 115 + (5 - distanceFromCenter) * 6; // Center lines are longer
                  
                  return (
                    <g key={i}>
                      {/* Vertical Connecting Line */}
                      <motion.line
                        x1={x}
                        y1="96"
                        x2={x}
                        animate={{
                          y2: [baseHeight - 10, baseHeight + 10, baseHeight - 10]
                        }}
                        transition={{
                          duration: 2.2 + (i * 0.12),
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        stroke="currentColor"
                        strokeWidth="1"
                        className="opacity-20 text-carbon"
                      />
                      {/* Interactive Target Circle Node on tip */}
                      <motion.circle
                        cx={x}
                        animate={{
                          cy: [baseHeight - 10, baseHeight + 10, baseHeight - 10]
                        }}
                        transition={{
                          duration: 2.2 + (i * 0.12),
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        r="2"
                        className="fill-oxide opacity-80"
                      />
                    </g>
                  );
                })}
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
