"use client";

import { motion } from "framer-motion";
import { AetherField } from "@/components/sections/AetherField";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { studio } from "@/data/studio";

export function Hero() {
  return (
    <section className="dark-grid-lines relative flex min-h-screen overflow-hidden bg-carbon px-5 pb-10 pt-28 text-chalk md:px-10 md:pt-36">
      <AetherField />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_22%,rgba(203,216,220,0.12),transparent_34%),linear-gradient(180deg,rgba(17,17,15,0.42),rgba(17,17,15,0.96))]" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1560px] flex-col justify-between gap-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            <p className="mb-7 text-xs uppercase tracking-label text-stone">
              Premium digital studio / Product engineering atelier
            </p>
            <h1 className="max-w-6xl font-display text-[clamp(4.4rem,13vw,13.5rem)] font-medium leading-[0.78] text-balance">
              Aether Studio
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="max-w-xl justify-self-end pt-1 lg:pt-12"
          >
            <p className="text-xl leading-relaxed text-chalk/78 md:text-2xl">
              {studio.positioning}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton href={`mailto:${studio.email}`} variant="light">
                Start a project
              </MagneticButton>
              <a href="#work" className="text-sm text-chalk/62 underline-offset-8 transition-colors duration-300 hover:text-chalk hover:underline">
                View studio directions
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.9 }}
          className="grid gap-6 border-t border-chalk/14 pt-6 text-sm text-chalk/55 md:grid-cols-3"
        >
          <p>Founded by {studio.founder}</p>
          <p>{studio.location}</p>
          <p className="md:text-right">AI systems / Web experiences / Product architecture</p>
        </motion.div>
      </div>
    </section>
  );
}
