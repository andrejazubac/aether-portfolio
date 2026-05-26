"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";

const slideImages = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85", // Strategy
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85", // Design/Dev
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85"  // Launch
];

export function Approach() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Dynamic values mapped to scroll
  const bgColor = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.7, 0.9],
    ["#F3F0EA", "#26382D", "#26382D", "#F3F0EA"]
  );

  const textColor = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.7, 0.9],
    ["#181816", "#FBFAF7", "#FBFAF7", "#181816"]
  );

  const titleOpacity = useTransform(scrollYProgress, [0, 0.08, 0.22], [0, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.08, 0.22], [20, 0, -30]);

  const scale = useTransform(
    scrollYProgress,
    [0.12, 0.36, 0.68, 0.92],
    [0.66, 1.0, 1.0, 0.8]
  );

  const cardY = useTransform(
    scrollYProgress,
    [0.12, 0.36],
    ["12%", "0%"]
  );

  const borderRadius = useTransform(
    scrollYProgress,
    [0.12, 0.36, 0.68, 0.92],
    ["24px", "0px", "0px", "24px"]
  );

  // Detect and update active slide index
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.38) {
      setActiveSlide(0);
    } else if (latest < 0.64) {
      setActiveSlide(1);
    } else {
      setActiveSlide(2);
    }
  });

  const slides = (t("approach.slides") || []) as {
    index: string;
    label: string;
    title: string;
    desc: string;
  }[];

  return (
    <div ref={containerRef} className="relative h-[240vh] w-full">
      <motion.div
        style={{ backgroundColor: bgColor }}
        className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden transition-colors duration-300"
      >
        <div className="absolute inset-0 opacity-[0.15] grid-lines pointer-events-none" />

        {/* Outer Grid content wrapper */}
        <div className="relative mx-auto w-full max-w-[1560px] px-5 md:px-10 h-full flex flex-col justify-between py-20 md:py-24 z-10 pointer-events-none">
          {/* Header Title Section: Fades out as card scales up */}
          <motion.div 
            style={{ opacity: titleOpacity, y: titleY, color: textColor }} 
            className="grid gap-8 lg:grid-cols-[0.25fr_1.75fr] w-full"
          >
            <SectionLabel index="05" label={t("approach.tag")} tone="dark" />
            <div className="lg:border-l lg:border-current/10 lg:pl-10">
              <h2 className="font-display text-[clamp(2.4rem,5.6vw,4.8rem)] font-medium leading-[0.92] text-balance">
                {t("approach.title")}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-70">
                {t("approach.subtitle")}
              </p>
            </div>
          </motion.div>

          {/* Spacer to align label layout correctly when title fades */}
          <div className="hidden lg:block h-20" />
        </div>

        {/* Center Zooming Canvas Container */}
        <motion.div
          style={{ scale, borderRadius, y: cardY }}
          className="absolute inset-0 mx-auto flex items-center justify-center overflow-hidden bg-carbon shadow-2xl z-0"
        >
          {/* Crossfading Slide Images */}
          {slideImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeSlide === idx ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Image
                src={img}
                alt={`Approach step ${idx + 1}`}
                fill
                className="object-cover saturate-[0.85] brightness-[0.75]"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/20 to-transparent opacity-60" />
            </motion.div>
          ))}

          {/* Central Glossy/Glassmorphic Card */}
          <div className="relative z-10 w-full max-w-2xl px-6">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-b from-white/12 to-white/2 backdrop-blur-xl p-8 md:p-12 shadow-2xl text-chalk text-center"
            >
              {/* Glossy sheen linear highlight animation */}
              <motion.div
                className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/12 to-transparent skew-x-12 pointer-events-none"
                animate={{ x: ["-150%", "350%"] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
              />

              <span className="text-[10px] font-bold uppercase tracking-widest text-oxide">
                {slides[activeSlide]?.label}
              </span>
              
              <h3 className="mt-4 font-display text-[clamp(1.6rem,3.6vw,2.8rem)] font-medium leading-tight">
                {slides[activeSlide]?.title}
              </h3>
              
              <p className="mt-4 text-xs md:text-sm leading-relaxed text-chalk/72 max-w-lg mx-auto">
                {slides[activeSlide]?.desc}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
