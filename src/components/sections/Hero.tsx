"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { AetherField } from "@/components/sections/AetherField";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { studio } from "@/data/studio";

const AetherOrb = dynamic(
  () => import("@/components/visuals/AetherOrb").then((mod) => mod.AetherOrb),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[24rem] items-center justify-center md:h-[34rem] lg:h-[42rem]">
        <div className="h-40 w-40 rounded-full border border-mist/35 bg-mist/10" />
      </div>
    )
  }
);

export function Hero() {
  return (
    <section className="dark-grid-lines relative flex min-h-screen overflow-hidden bg-carbon px-5 pb-12 pt-20 text-chalk md:px-10 md:pb-14 md:pt-20">
      <AetherField />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_36%,rgba(203,216,220,0.18),transparent_36%),radial-gradient(circle_at_26%_70%,rgba(166,95,62,0.11),transparent_34%),linear-gradient(180deg,rgba(17,17,15,0.36),rgba(17,17,15,0.96))]" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1560px] flex-col justify-between gap-6">
        <div className="grid flex-1 gap-4 lg:grid-cols-[0.92fr_0.88fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            <p className="mb-5 text-xs uppercase tracking-label text-stone">
              Premium digital studio / Product engineering atelier
            </p>
            <h1 className="max-w-5xl font-display text-[clamp(4.2rem,10.6vw,11rem)] font-medium leading-[0.8] text-balance">
              Aether Studio
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="relative -mt-8 min-h-[20rem] overflow-visible md:-mt-10 lg:-mt-20 lg:min-h-[31rem]"
          >
            <AetherOrb />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.72 }}
          className="grid gap-6 border-t border-chalk/14 pt-5 lg:grid-cols-[0.34fr_0.66fr] lg:items-end"
        >
          <div className="text-sm text-chalk/48">
            <p>Founded by {studio.founder}</p>
            <p className="mt-2">{studio.location}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-lg leading-8 text-chalk/76 md:text-xl">
              {studio.positioning}
            </p>
            <div className="flex flex-wrap items-center gap-4 md:justify-end">
              <MagneticButton href={`mailto:${studio.email}`} variant="light">
                Start a project
              </MagneticButton>
              <a href="#work" className="text-sm text-chalk/62 underline-offset-8 transition-colors duration-300 hover:text-chalk hover:underline">
                View studio directions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
