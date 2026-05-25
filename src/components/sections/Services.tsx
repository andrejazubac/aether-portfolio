"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative overflow-hidden bg-porcelain px-5 py-20 text-carbon md:px-10 md:py-28">
      {/* Editorial background grid lines */}
      <div className="absolute inset-0 opacity-25 grid-lines" />
      
      <div className="relative mx-auto max-w-[1560px]">
        {/* Section Header */}
        <div className="grid gap-12 lg:grid-cols-[0.25fr_1.75fr]">
          <SectionLabel index="04" label={t("nav.services")} tone="dark" />
          <Reveal className="lg:border-l lg:border-carbon/10 lg:pl-10">
            <span className="text-[10px] uppercase tracking-label text-oxide font-bold">
              {t("services.tag")}
            </span>
            <h2 className="mt-2 max-w-4xl font-display text-[clamp(2.4rem,5.6vw,4.8rem)] font-medium leading-[0.92] text-balance">
              {t("services.title")}
            </h2>
          </Reveal>
        </div>

        {/* Services Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((item) => {
            const title = t(`services.s${item}_title`);
            const description = t(`services.s${item}_desc`);

            return (
              <Reveal key={item}>
                <article className="min-h-60 border border-carbon/10 bg-chalk/75 p-8 transition-all duration-300 hover:border-oxide/40 hover:bg-chalk shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-3xl font-semibold leading-tight text-carbon">
                      {title}
                    </h3>
                    <p className="mt-6 max-w-xl text-sm leading-relaxed text-carbon/62">
                      {description}
                    </p>
                  </div>
                  <div className="mt-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-carbon/30">
                    <span>Aether Cap.</span>
                    <span className="text-oxide">→</span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
