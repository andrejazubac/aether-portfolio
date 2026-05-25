"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
import { renderFormattedText } from "@/lib/utils";

export function SelectedWork() {
  const { t } = useLanguage();

  return (
    <section id="work" className="relative overflow-hidden bg-porcelain px-5 py-20 text-carbon md:px-10 md:py-28">
      {/* Editorial grid lines */}
      <div className="absolute inset-0 opacity-25 grid-lines" />
      <div className="absolute left-1/3 top-10 h-[30rem] w-[30rem] rounded-full bg-mist/20 blur-3xl animate-drift-slow" />

      <div className="relative mx-auto max-w-[1560px]">
        {/* Header Grid */}
        <div className="relative mb-12 grid gap-8 lg:grid-cols-[0.25fr_1.75fr]">
          <SectionLabel index="03" label={t("selectedWork.title")} tone="dark" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 lg:border-l lg:border-carbon/10 lg:pl-10">
            <div>
              <span className="text-[10px] uppercase tracking-label text-oxide font-bold">
                {t("selectedWork.tag")}
              </span>
              <h2 className="mt-2 max-w-3xl font-display text-[clamp(2.4rem,5.6vw,4.8rem)] font-medium leading-[0.92] text-balance">
                {renderFormattedText(t("selectedWork.subtitle"))}
              </h2>
            </div>
            <Link
              href="/work"
              className="shrink-0 group inline-flex items-center gap-2 rounded-full border border-carbon/15 bg-chalk/60 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-carbon/75 transition-all duration-300 hover:border-oxide hover:text-carbon"
            >
              <span>{t("selectedWork.explore")}</span>
              <span className="text-[10px] font-display text-oxide font-bold">→</span>
            </Link>
          </div>
        </div>

        {/* Compact Grid Layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => {
            const pKey = `selectedWork.projects.p${idx + 1}`;
            const title = t(`${pKey}.title`);
            const category = t(`${pKey}.category`);
            const description = t(`${pKey}.desc`);
            const outcome = t(`${pKey}.outcome`);

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between overflow-hidden border border-carbon/10 bg-gradient-to-br from-chalk to-porcelain/60 shadow-sm transition-all duration-300 hover:border-oxide/40 hover:shadow-soft"
              >
                {/* Top accent interactive bar */}
                <div className="absolute top-0 left-0 w-full h-[2.5px] bg-oxide scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
                <div>
                  {/* Image Header */}
                  <div className="relative h-48 w-full overflow-hidden border-b border-carbon/8 bg-carbon/5">
                    <Image
                      src={project.image}
                      alt={`${project.title} case study`}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover opacity-75 saturate-[0.8] transition-transform duration-700 group-hover:scale-105 group-hover:saturate-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-porcelain/35 opacity-40 mix-blend-overlay" />
                    <div className="absolute top-4 left-4 rounded bg-carbon/80 px-2 py-0.5 text-[10px] font-bold text-chalk uppercase tracking-wider">
                      {project.index}
                    </div>
                  </div>

                  {/* Card Text Content */}
                  <div className="p-6">
                    <span className="text-[9px] uppercase tracking-label text-oxide font-bold">
                      {category}
                    </span>
                    
                    <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-carbon group-hover:text-oxide transition-colors duration-300">
                      {title}
                    </h3>
                    
                    <p className="mt-3 text-xs leading-relaxed text-carbon/62 line-clamp-3">
                      {description}
                    </p>

                    <div className="mt-5 border-t border-carbon/8 pt-4 space-y-2">
                      <p className="text-[10px] leading-relaxed text-carbon/68">
                        <span className="font-semibold text-carbon">{t("selectedWork.outcomeLabel")}</span>
                        {outcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Tags */}
                <div className="px-6 pb-6 pt-2 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-carbon/5 border border-carbon/5 px-2.5 py-0.5 text-[9.5px] text-carbon/55 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
