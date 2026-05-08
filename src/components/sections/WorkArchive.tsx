"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { workReferences } from "@/data/workReferences";

const categoryStyles = {
  Motion: "border-mist/45 bg-mist/18 text-mist",
  Refreshing: "border-oxide/40 bg-oxide/12 text-oxide",
  Professional: "border-moss/35 bg-moss/10 text-moss"
};

export function WorkArchive() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "8%"]);

  return (
    <main className="bg-porcelain text-carbon">
      <section ref={heroRef} className="relative min-h-[86vh] overflow-hidden bg-carbon px-5 pt-28 text-chalk md:px-10">
        <div className="absolute inset-0 dark-grid-lines opacity-45" />
        <div className="absolute right-[-10rem] top-[-10rem] h-[40rem] w-[40rem] rounded-full bg-mist/20 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[-8rem] h-[32rem] w-[32rem] rounded-full bg-oxide/12 blur-3xl" />

        <motion.div style={{ y: heroY }} className="relative mx-auto grid max-w-[1560px] gap-12 lg:grid-cols-[0.35fr_1fr]">
          <SectionLabel index="W" label="Reference archive" tone="light" />
          <div>
            <p className="max-w-6xl font-display text-[clamp(4rem,11vw,12.5rem)] font-medium leading-[0.8] text-balance">
              Work Aether aligns with.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-[0.7fr_0.3fr] md:items-end">
              <p className="max-w-2xl text-xl leading-8 text-chalk/68">
                A curated archive of Awwwards-level references that match the kind of products, systems, motion, and creative direction Aether Studio is built to create.
              </p>
              <p className="text-sm uppercase tracking-label text-chalk/42 md:text-right">
                Not client work / Directional references
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
        <div className="absolute inset-0 grid-lines opacity-45" />
        <div className="relative mx-auto grid max-w-[1560px] gap-10 lg:grid-cols-[0.34fr_1fr]">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <SectionLabel index="10" label="Chosen references" />
            <p className="mt-8 max-w-sm text-lg leading-8 text-carbon/60">
              The selection balances motion-heavy experiences, refreshing creative sites, and professional studio/product references.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {["Motion", "Refreshing", "Professional"].map((category) => (
                <span
                  key={category}
                  className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-label ${categoryStyles[category as keyof typeof categoryStyles]}`}
                >
                  {category}
                </span>
              ))}
            </div>
          </aside>

          <div className="space-y-8">
            {workReferences.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.9, delay: index % 2 === 0 ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group grid overflow-hidden border border-carbon/12 bg-chalk/70 shadow-soft md:grid-cols-[0.92fr_1fr]"
              >
                <motion.a
                  href={item.awwwardsUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ y: imageY }}
                  className="relative block min-h-[22rem] overflow-hidden bg-carbon md:min-h-[34rem]"
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} website screenshot placeholder`}
                    fill
                    sizes="(min-width: 768px) 46vw, 100vw"
                    className="object-cover opacity-88 saturate-[0.9] transition duration-700 group-hover:scale-105 group-hover:saturate-110"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,15,0.02),rgba(17,17,15,0.58))]" />
                  <span className="absolute bottom-6 left-6 font-display text-7xl text-chalk/74">{item.index}</span>
                </motion.a>

                <div className="flex flex-col justify-between p-7 md:p-10">
                  <div>
                    <div className="mb-7 flex flex-wrap items-center gap-3">
                      <span className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-label ${categoryStyles[item.category]}`}>
                        {item.category}
                      </span>
                      <span className="text-xs uppercase tracking-label text-carbon/38">{item.tone}</span>
                    </div>
                    <h2 className="font-display text-[clamp(3rem,6vw,6.6rem)] font-medium leading-[0.86] text-moss">
                      {item.title}
                    </h2>
                    <p className="mt-8 max-w-2xl text-lg leading-8 text-carbon/64">{item.description}</p>
                  </div>

                  <div className="mt-12 border-t border-carbon/12 pt-7">
                    <p className="text-xs uppercase tracking-label text-carbon/38">Why it aligns</p>
                    <p className="mt-4 max-w-2xl leading-7 text-carbon/62">{item.alignment}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-carbon/12 px-3 py-1 text-xs text-carbon/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-moss underline-offset-8 hover:underline"
                      >
                        Visit site <ArrowUpRight size={15} strokeWidth={1.6} />
                      </a>
                      <a
                        href={item.awwwardsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-carbon/48 underline-offset-8 hover:text-carbon hover:underline"
                      >
                        Awwwards reference <ArrowUpRight size={15} strokeWidth={1.6} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
