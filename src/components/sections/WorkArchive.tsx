"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";
import { currentProjects, workReferences } from "@/data/workReferences";
import { renderFormattedText } from "@/lib/utils";

const categoryStyles = {
  Motion: "border-oxide/20 bg-oxide/5 text-oxide",
  Refreshing: "border-moss/20 bg-moss/5 text-moss",
  Professional: "border-carbon/15 bg-carbon/5 text-carbon/75"
};

export function WorkArchive() {
  const { lang, t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <main className="bg-porcelain text-carbon">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex flex-col justify-center overflow-hidden bg-porcelain px-5 pt-32 pb-16 text-carbon md:px-10">
        <div className="absolute inset-0 grid-lines opacity-25" />
        <div className="absolute right-[-10rem] top-[-10rem] h-[40rem] w-[40rem] rounded-full bg-mist/20 blur-3xl animate-drift-slow" />
        <div className="absolute bottom-[-12rem] left-[-8rem] h-[32rem] w-[32rem] rounded-full bg-oxide/8 blur-3xl animate-drift-medium" />

        <motion.div style={{ y: heroY }} className="relative mx-auto grid max-w-[1560px] gap-8 lg:grid-cols-[0.25fr_1.75fr] lg:items-start lg:border-b lg:border-carbon/10 lg:pb-16">
          <SectionLabel index="W" label={t("workArchive.tag")} tone="dark" />
          <div>
            <h1 className="font-display text-[clamp(2.8rem,6.4vw,6.8rem)] font-medium leading-[0.9] text-balance text-carbon">
              {t("workArchive.title")}
            </h1>
            <div className="mt-8 grid gap-8 md:grid-cols-[0.7fr_0.3fr] md:items-end">
              <p className="max-w-2xl text-lg leading-relaxed text-carbon/62">
                {renderFormattedText(t("workArchive.desc"))}
              </p>
              <p className="text-xs uppercase tracking-label text-carbon/42 md:text-right font-bold">
                {t("workArchive.subTag")}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Current Projects Section */}
      <section className="relative overflow-hidden px-5 py-16 md:px-10 md:py-24">
        <div className="absolute inset-0 grid-lines opacity-25" />
        <div className="relative mx-auto max-w-[1560px]">
          <div className="grid gap-10 lg:grid-cols-[0.25fr_1.75fr]">
            <div>
              <SectionLabel index="01" label={t("workArchive.currentLabel")} tone="dark" />
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:gap-10 lg:border-l lg:border-carbon/10 lg:pl-10">
              {currentProjects.map((project, idx) => {
                const isSRB = lang === "sr";
                const localizedDesc = isSRB && idx === 1
                  ? "Premium veb sajt za frizerski i kozmetički salon Beauty Boom Plus, kreiran oko elegancije, prefinjene atmosfere i direktnih rezervacija."
                  : project.description;
                const localizedRole = isSRB && idx === 1
                  ? "Digitalni razvoj, prefinjena prezentacija salona, prilagođen frontend sajt, pripovedanje usluga i premium proces rezervacija."
                  : project.role;
                const localizedAlignment = isSRB && idx === 1
                  ? "Usklađeno sa Aether standardima kroz luksuzni dizajn, emocionalnu vizuelnu direkciju, glatke animacije i luksuzno pozicioniranje brenda."
                  : project.alignment;

                return (
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex flex-col justify-between overflow-hidden bg-chalk/90 border border-carbon/10 hover:border-carbon/25 transition-all duration-500 rounded-2xl shadow-sm hover:shadow-soft group"
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="relative block aspect-[16/10] w-full overflow-hidden border-b border-carbon/10 bg-carbon"
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} project visual`}
                        fill
                        sizes="(min-width: 768px) 40vw, 95vw"
                        className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:saturate-100 saturate-[0.85]"
                      />
                      <span className="absolute bottom-4 left-4 rounded-full border border-chalk/20 bg-black/40 backdrop-blur-sm px-3.5 py-1.5 text-[10px] uppercase tracking-label text-chalk">
                        {t("workArchive.liveLabel")}
                      </span>
                    </a>
                    
                    <div className="flex flex-col justify-between flex-grow p-6 md:p-8 gap-6">
                      <div>
                        <div className="mb-4 flex flex-wrap gap-2.5">
                          <span className="rounded-full border border-oxide/20 bg-oxide/5 px-2.5 py-1 text-[10px] uppercase tracking-label text-oxide font-semibold">
                            {project.category}
                          </span>
                          <span className="rounded-full border border-carbon/10 bg-porcelain px-2.5 py-1 text-[10px] uppercase tracking-label text-carbon/50">
                            {project.location}
                          </span>
                        </div>
                        <h2 className="font-display text-2xl md:text-3xl font-semibold leading-tight text-carbon group-hover:text-oxide transition-colors">
                          {project.title}
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-carbon/62">{localizedDesc}</p>
                      </div>

                      <div className="space-y-4 border-t border-carbon/8 pt-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-label text-carbon/42 font-bold">{t("workArchive.roleLabel")}</p>
                          <p className="mt-1 text-xs leading-relaxed text-carbon/75">{localizedRole}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-label text-carbon/42 font-bold">{t("workArchive.whyLabel")}</p>
                          <p className="mt-1 text-xs leading-relaxed text-carbon/75">{localizedAlignment}</p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-carbon/8 pt-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="rounded border border-carbon/8 px-2 py-0.5 text-[10px] text-carbon/45 bg-porcelain">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-oxide underline underline-offset-4 hover:text-carbon transition-colors"
                        >
                          {t("workArchive.visitLabel")} <ArrowUpRight size={13} strokeWidth={2} />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="relative overflow-hidden border-t border-carbon/10 px-5 py-16 md:px-10 md:py-24">
        <div className="absolute inset-0 grid-lines opacity-25" />
        <div className="relative mx-auto max-w-[1560px]">
          <div className="grid gap-10 lg:grid-cols-[0.25fr_1.75fr]">
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <SectionLabel index="02" label={t("workArchive.referencesLabel")} tone="dark" />
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-carbon/60">
                {t("workArchive.referencesDesc")}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Motion", "Refreshing", "Professional"].map((category) => (
                  <span
                    key={category}
                    className={`rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-label font-semibold ${categoryStyles[category as keyof typeof categoryStyles]}`}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </aside>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-10 lg:border-l lg:border-carbon/10 lg:pl-10">
              {workReferences.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.8, delay: index % 2 === 0 ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col justify-between overflow-hidden border border-carbon/12 bg-chalk/70 hover:border-carbon/25 transition-all duration-300 rounded-2xl shadow-sm hover:shadow-soft group"
                >
                  <a
                    href={item.awwwardsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative block aspect-[16/10] w-full overflow-hidden border-b border-carbon/10 bg-carbon"
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} visual direction`}
                      fill
                      sizes="(min-width: 768px) 40vw, 95vw"
                      className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100 saturate-[0.85] group-hover:saturate-100"
                    />
                    <span className="absolute bottom-4 left-4 font-display text-4xl text-chalk/70 drop-shadow-sm font-semibold">{item.index}</span>
                  </a>

                  <div className="p-6 md:p-8 flex flex-col justify-between flex-grow gap-6">
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <span className={`rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-label font-semibold ${categoryStyles[item.category]}`}>
                          {item.category}
                        </span>
                        <span className="text-[10px] uppercase tracking-label text-carbon/42 font-bold">{item.tone}</span>
                      </div>
                      <h3 className="font-display text-2xl font-semibold leading-tight text-moss group-hover:text-oxide transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-carbon/64">{item.description}</p>
                    </div>

                    <div className="space-y-4 border-t border-carbon/8 pt-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-label text-carbon/38 font-bold">{t("workArchive.whyLabel")}</p>
                        <p className="mt-1 text-xs leading-relaxed text-carbon/62">{item.alignment}</p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="rounded border border-carbon/12 px-2 py-0.5 text-[10px] text-carbon/48 bg-porcelain">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-carbon/8 pt-4">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-moss underline underline-offset-4 hover:text-oxide transition-colors"
                      >
                        {t("workArchive.visitLabel")} <ArrowUpRight size={13} strokeWidth={2} />
                      </a>
                      <a
                        href={item.awwwardsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-carbon/48 underline underline-offset-4 hover:text-carbon transition-colors"
                      >
                        {t("workArchive.awwwardsLabel")} <ArrowUpRight size={13} strokeWidth={2} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
