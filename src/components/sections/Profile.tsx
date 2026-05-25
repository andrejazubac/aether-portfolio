"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";
import { technicalStack } from "@/data/expertise";
import { studio } from "@/data/studio";

export function Profile() {
  const { t } = useLanguage();

  return (
    <section
      id="studio"
      className="relative overflow-hidden bg-porcelain px-5 py-20 text-carbon md:px-10 md:py-28"
    >
      {/* Soft background glow */}
      <div className="absolute left-[-10rem] top-10 h-[30rem] w-[30rem] rounded-full bg-mist/35 blur-3xl" />
      <div className="absolute bottom-[-8rem] right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-oxide/10 blur-3xl" />
      <div className="absolute inset-0 grid-lines opacity-25" />

      <div className="relative mx-auto max-w-[1560px]">
        <div className="grid gap-12 lg:grid-cols-[0.25fr_1.75fr]">
          <SectionLabel index="02" label={t("profile.title")} tone="dark" />
          
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:border-l lg:border-carbon/10 lg:pl-10">
            {/* Left Column: Thesis & Biography */}
            <div className="flex flex-col justify-between gap-10">
              <Reveal>
                <p className="text-xs uppercase tracking-label text-oxide font-semibold">
                  {t("profile.tag")}
                </p>
                <h2 className="mt-4 font-display text-[clamp(2.5rem,5.6vw,5.2rem)] font-medium leading-[0.9] text-balance">
                  {t("profile.manifesto")}
                </h2>
                <p className="mt-8 text-base leading-8 text-carbon/68">
                  {t("profile.bio")}
                </p>
              </Reveal>

              <Reveal className="border-t border-carbon/12 pt-6">
                <p className="text-[11px] uppercase tracking-label text-carbon/42">{t("profile.contactLabel")}</p>
                <a
                  href={`mailto:${studio.email}`}
                  className="mt-3 inline-block font-display text-2xl font-medium text-carbon underline decoration-oxide/40 underline-offset-8 transition-colors hover:text-oxide hover:decoration-oxide"
                >
                  {studio.email}
                </a>
              </Reveal>
            </div>

            {/* Right Column: Expertise & Tech Stack */}
            <div className="flex flex-col gap-10 border-t border-carbon/12 pt-10 lg:border-t-0 lg:pt-0">
              {/* Expertise List */}
              <div className="space-y-6">
                <Reveal>
                  <p className="text-xs uppercase tracking-label text-carbon/45 font-semibold mb-2">
                    {t("profile.capacitiesTag")}
                  </p>
                </Reveal>
                {[1, 2, 3, 4].map((item, index) => {
                  const title = t(`profile.c${item}_title`);
                  const detail = t(`profile.c${item}_desc`);
                  return (
                    <Reveal key={item} delay={index * 0.08} className="border-b border-carbon/10 pb-5 last:border-0 last:pb-0">
                      <h3 className="text-lg font-semibold flex items-baseline gap-2.5">
                        <span className="font-display text-xs text-oxide">0{item}</span>
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-carbon/60">
                        {detail}
                      </p>
                    </Reveal>
                  );
                })}
              </div>

              {/* Technical Stack Tags */}
              <Reveal className="border-t border-carbon/12 pt-8">
                <p className="text-xs uppercase tracking-label text-carbon/45 font-semibold mb-4">
                  {t("profile.technicalTag")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technicalStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-carbon/10 bg-chalk/45 px-3 py-1.5 text-xs text-carbon/62 transition-all duration-300 hover:border-oxide/30 hover:text-carbon"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
