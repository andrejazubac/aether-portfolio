"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";
import { currentProjects, workReferences } from "@/data/workReferences";

const categoryStyles = {
  Motion: "border-mist/45 bg-mist/18 text-mist",
  Refreshing: "border-oxide/40 bg-oxide/12 text-oxide",
  Professional: "border-moss/35 bg-moss/10 text-moss"
};

export function WorkArchive() {
  const { lang, t } = useLanguage();
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
          <SectionLabel index="W" label={t("workArchive.tag")} tone="light" />
          <div>
            <p className="max-w-6xl font-display text-[clamp(4rem,11vw,12.5rem)] font-medium leading-[0.8] text-balance">
              {t("workArchive.title")}
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-[0.7fr_0.3fr] md:items-end">
              <p className="max-w-2xl text-xl leading-8 text-chalk/68">
                {t("workArchive.desc")}
              </p>
              <p className="text-sm uppercase tracking-label text-chalk/42 md:text-right">
                {t("workArchive.subTag")}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
        <div className="absolute inset-0 grid-lines opacity-45" />
        <div className="relative mx-auto max-w-[1560px]">
          <div className="mb-20 grid gap-10 lg:grid-cols-[0.34fr_1fr]">
            <SectionLabel index="01" label={t("workArchive.currentLabel")} />
            
            <div className="space-y-8">
              {currentProjects.map((project, idx) => {
                // Determine localized details if needed, or fallback to default
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
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="group grid min-w-0 overflow-hidden bg-moss text-chalk shadow-soft xl:grid-cols-[0.92fr_1.08fr]"
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="relative block min-h-[21rem] overflow-hidden md:min-h-[28rem] xl:min-h-[34rem]"
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} project visual placeholder`}
                        fill
                        sizes="(min-width: 1280px) 36vw, 100vw"
                        className="object-cover opacity-82 saturate-[0.78] transition duration-700 group-hover:scale-105 group-hover:saturate-100"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(38,56,45,0.04),rgba(38,56,45,0.74))]" />
                      <span className="absolute bottom-6 left-6 rounded-full border border-chalk/24 bg-chalk/10 px-4 py-2 text-xs uppercase tracking-label text-chalk/72">
                        {t("workArchive.liveLabel")}
                      </span>
                    </a>
                    
                    <div className="flex min-w-0 flex-col justify-between p-7 md:p-10">
                      <div>
                        <div className="mb-7 flex flex-wrap gap-3">
                          <span className="rounded-full border border-mist/35 bg-mist/12 px-3 py-1.5 text-xs uppercase tracking-label text-mist">
                            {project.category}
                          </span>
                          <span className="rounded-full border border-chalk/18 px-3 py-1.5 text-xs uppercase tracking-label text-chalk/52">
                            {project.location}
                          </span>
                        </div>
                        <h2 className="max-w-3xl overflow-hidden text-balance font-display text-[clamp(3rem,5.2vw,5.8rem)] font-medium leading-[0.9]">
                          {project.title}
                        </h2>
                        <p className="mt-7 max-w-2xl text-lg leading-8 text-chalk/68">{localizedDesc}</p>
                      </div>

                      <div className="mt-10 grid gap-6 border-t border-chalk/14 pt-7 md:grid-cols-2">
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-label text-chalk/38">{t("workArchive.roleLabel")}</p>
                          <p className="mt-4 text-sm leading-7 text-chalk/62 md:text-base">{localizedRole}</p>
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-label text-chalk/38">{t("workArchive.whyLabel")}</p>
                          <p className="mt-4 text-sm leading-7 text-chalk/62 md:text-base">{localizedAlignment}</p>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-3">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-chalk/14 px-3 py-1 text-xs text-chalk/48">
                            {tag}
                          </span>
                        ))}
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-mist underline-offset-8 hover:underline md:ml-auto"
                        >
                          {t("workArchive.visitLabel")} <ArrowUpRight size={15} strokeWidth={1.6} />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr]">
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <SectionLabel index="10" label={t("workArchive.referencesLabel")} />
              <p className="mt-8 max-w-sm text-lg leading-8 text-carbon/60">
                {t("workArchive.referencesDesc")}
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
                      alt={`${item.title} visual direction placeholder`}
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
                      <p className="text-xs uppercase tracking-label text-carbon/38">{t("workArchive.whyLabel")}</p>
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
                          {t("workArchive.visitLabel")} <ArrowUpRight size={15} strokeWidth={1.6} />
                        </a>
                        <a
                          href={item.awwwardsUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-carbon/48 underline-offset-8 hover:text-carbon hover:underline"
                        >
                          {t("workArchive.awwwardsLabel")} <ArrowUpRight size={15} strokeWidth={1.6} />
                        </a>
                      </div>
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
