"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceItem {
  index: string;
  title: string;
  desc: string;
  subservices: string[];
}

export function Services() {
  const { lang, t } = useLanguage();
  const items = (t("services.items") || []) as ServiceItem[];

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
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const indexNum = parseInt(item.index, 10);
            const accentBg = indexNum % 2 === 0 ? "bg-moss" : "bg-oxide";

            return (
              <Reveal key={item.index}>
                <article className="relative overflow-hidden min-h-[24rem] border border-carbon/10 bg-gradient-to-br from-chalk to-porcelain/60 p-8 transition-all duration-500 hover:border-oxide/40 hover:shadow-soft flex flex-col justify-between group rounded-2xl">
                  {/* Top accent interactive bar */}
                  <div className={`absolute top-0 left-0 w-full h-[3px] ${accentBg} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  
                  <div>
                    {/* Index header */}
                    <div className="flex justify-between items-start">
                      <span className="font-display text-xs text-oxide/70 font-semibold">{item.index}</span>
                      <span className="text-[9px] uppercase tracking-widest text-carbon/30 group-hover:text-oxide transition-colors duration-300 font-bold">
                        / {item.subservices.length} {lang === "en" ? "services" : "usluga"}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-6">
                      <h3 className="font-display text-2xl font-semibold leading-tight text-carbon group-hover:text-oxide transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-carbon/60 group-hover:text-carbon/80 transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>

                    {/* Subservices tags (fades and slides up on hover) */}
                    <div className="mt-6 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 ease-out">
                      {item.subservices.map((sub) => (
                        <span 
                          key={sub} 
                          className="rounded-full border border-carbon/8 bg-chalk/90 px-2.5 py-0.5 text-[9.5px] text-carbon/75 font-medium transition-all hover:border-oxide/30 hover:text-oxide"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-8 pt-4 border-t border-carbon/8 flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-carbon/35">
                    <span className="group-hover:text-carbon transition-colors">
                      {lang === "en" ? "Explore Service" : "Istraži Uslugu"}
                    </span>
                    <span className="text-oxide group-hover:translate-x-1.5 transition-transform duration-300">→</span>
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
