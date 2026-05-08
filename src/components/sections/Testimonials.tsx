"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/projects";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-chalk px-5 py-24 text-carbon md:px-10 md:py-36">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-mist/45 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-oxide/10 blur-3xl" />
      <div className="relative mx-auto max-w-[1560px]">
        <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
          <SectionLabel index="06" label="Proof" />
          <div>
            <h2 className="max-w-5xl font-display text-[clamp(3rem,7vw,7.4rem)] font-medium leading-[0.9] text-balance">
              Trusted for work that needs taste and technical weight.
            </h2>
            <div className="mt-16 grid gap-4 md:grid-cols-3">
              {testimonials.map((item, index) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-12% 0px" }}
                  transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="border border-carbon/12 bg-porcelain/60 p-7 backdrop-blur-sm"
                >
                  <p className="font-display text-3xl leading-tight text-carbon/82">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-12 border-t border-carbon/12 pt-5">
                    <p className="font-medium">{item.name}</p>
                    <p className="mt-1 text-sm text-carbon/52">{item.role}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
