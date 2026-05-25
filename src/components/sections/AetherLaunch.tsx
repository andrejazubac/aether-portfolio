"use client";

import { Check, Flame, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLanguage } from "@/context/LanguageContext";
import { pricingData } from "@/data/pricingData";
import { studio } from "@/data/studio";

export function AetherLaunch() {
  const { lang, t } = useLanguage();
  const content = pricingData[lang];

  return (
    <section
      id="launch"
      className="relative overflow-hidden bg-porcelain px-5 py-14 text-carbon md:px-10 md:py-20"
    >
      {/* Decorative Gradients */}
      <div className="absolute left-[-10rem] top-5 h-[24rem] w-[24rem] rounded-full bg-mist/30 blur-3xl animate-drift-slow" />
      <div className="absolute bottom-[-10rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-oxide/8 blur-3xl animate-drift-medium" />
      <div className="absolute inset-0 grid-lines opacity-20" />

      <div className="relative mx-auto max-w-[1560px]">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.25fr_1.75fr] lg:items-start">
          <div className="flex flex-col gap-4">
            <SectionLabel index="05" label={t("workArchive.currentLabel")} tone="dark" />
          </div>

          <div className="lg:border-l lg:border-carbon/10 lg:pl-10">
            <Reveal>
              <span className="text-[10px] uppercase tracking-label text-oxide font-bold">
                {content.sections.launchHeader.tag}
              </span>
              <h2 className="mt-2 max-w-4xl font-display text-[clamp(2.2rem,5.2vw,4.4rem)] font-medium leading-[0.92] text-balance text-carbon">
                {content.sections.launchHeader.title}
              </h2>
              <p className="mt-2 font-display text-lg text-carbon/62 md:text-xl italic">
                {content.sections.launchHeader.subtitle}
              </p>
            </Reveal>

            {/* Scarcity Notification Bar */}
            <Reveal className="mt-6" delay={0.05}>
              <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 rounded-lg border border-oxide/15 bg-oxide/5 px-4 py-2.5 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-oxide opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-oxide"></span>
                  </span>
                  <span className="text-xs font-semibold text-oxide font-display">
                    {content.sections.launchHeader.scarcity}
                  </span>
                </div>
                <span className="hidden sm:inline text-carbon/15 font-light">|</span>
                <span className="text-[10px] uppercase tracking-label text-carbon/50">
                  {content.sections.launchHeader.statusActive}
                </span>
              </div>
            </Reveal>

            {/* Compact Cards Grid */}
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:max-w-5xl">
              {content.launch.map((pkg, idx) => {
                const isGrowth = pkg.id === "launch-growth";
                return (
                  <Reveal
                    key={pkg.id}
                    delay={idx * 0.1}
                    className={`relative flex flex-col justify-between p-6 md:p-8 transition-all duration-300 rounded-xl ${
                      isGrowth
                        ? "bg-carbon text-chalk border-2 border-oxide shadow-soft scale-[1.01] z-10"
                        : "bg-chalk/80 text-carbon border border-carbon/10 hover:border-carbon/20 shadow-sm"
                    }`}
                  >
                    {isGrowth && (
                      <div className="absolute -top-2.5 right-6 flex items-center gap-1 rounded-full bg-oxide px-3 py-0.5 text-[9px] font-bold uppercase tracking-widest text-chalk">
                        <Flame size={8} className="fill-chalk" />
                        {lang === "en" ? "Best choice" : "Najbolji izbor"}
                      </div>
                    )}

                    <div>
                      {/* Top Label */}
                      <div className="flex justify-between items-start">
                        <div>
                          <p className={`text-[10px] uppercase tracking-label ${isGrowth ? "text-oxide" : "text-carbon/42"}`}>
                            {pkg.initialCost}
                          </p>
                          <h3 className="mt-1 font-display text-2xl font-semibold leading-tight">
                            {pkg.title}
                          </h3>
                        </div>
                        {isGrowth && (
                          <Sparkles size={16} className="text-oxide animate-pulse" />
                        )}
                      </div>

                      {/* Pricing block */}
                      <div className="mt-4 border-t border-b py-4 my-4 border-current/10">
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-display text-4xl font-medium leading-none">
                            {pkg.price}
                          </span>
                          <span className={`text-xs ${isGrowth ? "text-chalk/62" : "text-carbon/50"}`}>
                            / {lang === "en" ? "month" : "mesečno"}
                          </span>
                        </div>
                        <p className={`mt-1 text-[10px] italic ${isGrowth ? "text-chalk/50" : "text-carbon/50"}`}>
                          {pkg.initialLabel}
                        </p>
                      </div>

                      {/* Features list */}
                      <ul className="space-y-2.5">
                        {pkg.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5">
                            <Check
                              size={13}
                              className={`mt-0.5 shrink-0 ${isGrowth ? "text-oxide" : "text-moss"}`}
                              strokeWidth={3}
                            />
                            <span className={`text-xs leading-relaxed ${isGrowth ? "text-chalk/75" : "text-carbon/68"}`}>
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action button */}
                    <div className="mt-8">
                      <MagneticButton
                        href={`mailto:${studio.email}?subject=${encodeURIComponent(
                          `Aether Launch Application - ${pkg.title}`
                        )}&body=${encodeURIComponent(
                          `Zdravo Andreja,\n\nZainteresovan sam za elitni Aether Launch program i paket "${pkg.title}".\n\nNaziv firme:\nKontakt telefon:\nWeb sajt (ukoliko postoji):\nOpis poslovanja:\n\nSrdačan pozdrav,`
                        )}`}
                        variant={isGrowth ? "light" : "dark"}
                        className="w-full justify-center py-2.5 text-xs"
                      >
                        {pkg.cta}
                      </MagneticButton>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
