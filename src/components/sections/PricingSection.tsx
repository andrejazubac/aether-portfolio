"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, AlertCircle, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLanguage } from "@/context/LanguageContext";
import { pricingData } from "@/data/pricingData";
import { studio } from "@/data/studio";

export function PricingSection() {
  const { lang, t } = useLanguage();
  const [billingTab, setBillingTab] = useState<"one-time" | "retainer">("one-time");
  const [isYearly, setIsYearly] = useState(false);

  const content = pricingData[lang];

  // Helper to dynamically calculate yearly discount (15% off)
  const getDisplayPrice = (priceStr: string, isRetainer: boolean) => {
    if (!isRetainer || !isYearly) return priceStr;
    const numericPrice = parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
    if (isNaN(numericPrice)) return priceStr;
    const discountedPrice = Math.round(numericPrice * 0.85);
    return `${discountedPrice}€`;
  };

  const getCtaLink = (pkgTitle: string, isRetainer: boolean) => {
    const periodText = isRetainer ? (isYearly ? "Yearly Retainer" : "Monthly Retainer") : "One-Time Project";
    const subject = encodeURIComponent(`Aether Studio - Inquiry: ${pkgTitle} (${periodText})`);
    const body = encodeURIComponent(
      `Zdravo Andreja,\n\nŽelim da se raspitam o saradnji sa Aether Studio.\n\nIzabrani paket: ${pkgTitle}\nTip saradnje: ${periodText}\n\nOpis našeg projekta / biznisa:\nPlanirani budžet i rokovi:\n\nSrdačan pozdrav,`
    );
    return `mailto:${studio.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative overflow-hidden bg-porcelain px-5 pb-24 pt-32 text-carbon md:px-10 md:pb-36 md:pt-40">
      {/* Visual background accents */}
      <div className="absolute left-1/3 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-mist/30 blur-3xl" />
      <div className="absolute bottom-10 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-oxide/8 blur-3xl" />
      <div className="absolute inset-0 grid-lines opacity-25" />

      <div className="relative mx-auto max-w-[1560px]">
        {/* Top Controls Grid */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 border-b border-carbon/10 pb-8 mb-16">
          <div>
            <SectionLabel index="01" label={t("nav.pricing")} tone="dark" />
            <h1 className="mt-6 font-display text-[clamp(2.8rem,6.4vw,6.8rem)] font-medium leading-[0.9] text-balance">
              {content.sections.pricingHeader.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-carbon/62">
              {content.sections.pricingHeader.description}
            </p>
          </div>
        </div>

        {/* Tab Controls for Development Model */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative inline-flex rounded-full border border-carbon/10 bg-chalk/70 p-1.5 shadow-sm backdrop-blur-sm">
            <button
              onClick={() => setBillingTab("one-time")}
              className={`relative z-10 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                billingTab === "one-time" ? "text-chalk" : "text-carbon/62 hover:text-carbon"
              }`}
            >
              {billingTab === "one-time" && (
                <motion.span
                  layoutId="activeTabPill"
                  className="absolute inset-0 -z-10 rounded-full bg-carbon"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {content.toggles.oneTime}
            </button>
            <button
              onClick={() => setBillingTab("retainer")}
              className={`relative z-10 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                billingTab === "retainer" ? "text-chalk" : "text-carbon/62 hover:text-carbon"
              }`}
            >
              {billingTab === "retainer" && (
                <motion.span
                  layoutId="activeTabPill"
                  className="absolute inset-0 -z-10 rounded-full bg-carbon"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {content.toggles.boost}
            </button>
          </div>

          {/* Sub-Toggle: Billing Frequency (Only for Retainers) */}
          <AnimatePresence>
            {billingTab === "retainer" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.24 }}
                className="mt-6 inline-flex items-center gap-4 rounded-full border border-carbon/8 bg-chalk/45 px-4 py-2"
              >
                <button
                  onClick={() => setIsYearly(false)}
                  className={`text-xs uppercase tracking-wider font-semibold transition-colors ${
                    !isYearly ? "text-oxide" : "text-carbon/45 hover:text-carbon"
                  }`}
                >
                  {content.toggles.monthly}
                </button>
                <span className="h-3 w-px bg-carbon/15" />
                <button
                  onClick={() => setIsYearly(true)}
                  className={`flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold transition-colors ${
                    isYearly ? "text-oxide" : "text-carbon/45 hover:text-carbon"
                  }`}
                >
                  <span>{content.toggles.yearly}</span>
                  <span className="rounded bg-oxide/10 px-1.5 py-0.5 text-[8px] font-bold text-oxide normal-case">
                    -15%
                  </span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3 md:items-stretch">
          {billingTab === "one-time"
            ? content.oneTime.map((pkg) => (
                <Reveal
                  key={pkg.index}
                  className={`relative flex flex-col justify-between p-8 md:p-10 rounded-2xl transition-all duration-300 bg-gradient-to-br from-chalk to-porcelain/60 border ${
                    pkg.popular
                      ? "border-oxide shadow-soft scale-[1.01]"
                      : "border-carbon/10 hover:border-carbon/25"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-oxide/8 to-transparent blur-xl" />
                  )}
                  {pkg.popular && (
                    <div className="absolute -top-3 left-8 flex items-center gap-1 rounded-full bg-oxide px-3.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-chalk">
                      <Sparkles size={9} />
                      {pkg.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-carbon/35">
                          {pkg.index} / {pkg.subtitle}
                        </span>
                        <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-carbon">
                          {pkg.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-carbon/60 min-h-[3rem]">
                      {pkg.target}
                    </p>

                    {/* Price block */}
                    <div className="mt-6 border-t border-b border-carbon/10 py-5 my-6">
                      <div className={`font-display text-4xl font-semibold leading-none ${pkg.popular ? "text-oxide" : "text-carbon"}`}>
                        {pkg.price}
                      </div>
                      <p className="mt-1.5 text-xs text-carbon/48 italic">
                        {pkg.pricePeriod}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3.5">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5">
                          <Check size={14} className="mt-1 shrink-0 text-oxide" strokeWidth={2.5} />
                          <span className="text-sm leading-relaxed text-carbon/75">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <MagneticButton
                      href={getCtaLink(pkg.title, false)}
                      variant={pkg.popular ? "dark" : "light"}
                      className="w-full justify-center"
                    >
                      {pkg.cta}
                    </MagneticButton>
                  </div>
                </Reveal>
              ))
            : content.retainers.map((pkg) => (
                <Reveal
                  key={pkg.index}
                  className={`relative flex flex-col justify-between p-8 md:p-10 rounded-2xl transition-all duration-300 bg-gradient-to-br from-chalk to-porcelain/60 border ${
                    pkg.popular
                      ? "border-moss shadow-soft scale-[1.01]"
                      : "border-carbon/10 hover:border-carbon/25"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-moss/8 to-transparent blur-xl" />
                  )}
                  {pkg.popular && (
                    <div className="absolute -top-3 left-8 flex items-center gap-1 rounded-full bg-moss px-3.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-chalk">
                      <Sparkles size={9} />
                      {pkg.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-carbon/35">
                          {pkg.index} / {pkg.subtitle}
                        </span>
                        <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-carbon">
                          {pkg.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-carbon/60 min-h-[3rem]">
                      {pkg.target}
                    </p>

                    {/* Price block */}
                    <div className="mt-6 border-t border-b border-carbon/10 py-5 my-6">
                      <div className="flex items-baseline gap-1.5">
                        <span className={`font-display text-4xl font-semibold leading-none ${pkg.popular ? "text-moss" : "text-carbon"}`}>
                          {getDisplayPrice(pkg.price, true)}
                        </span>
                        <span className="text-sm text-carbon/50">
                          / {lang === "en" ? pkg.pricePeriod : "mesec"}
                        </span>
                      </div>
                      {isYearly && (
                        <p className="mt-1.5 text-xs text-oxide font-medium">
                          {lang === "en" ? "Billed annually" : "Obračunava se godišnje"}
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3.5">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5">
                          <Check size={14} className="mt-1 shrink-0 text-moss" strokeWidth={2.5} />
                          <span className="text-sm leading-relaxed text-carbon/75">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <MagneticButton
                      href={getCtaLink(pkg.title, true)}
                      variant={pkg.popular ? "dark" : "light"}
                      className="w-full justify-center"
                    >
                      {pkg.cta}
                    </MagneticButton>
                  </div>
                </Reveal>
              ))}
        </div>

        {/* Promo Banner: Aether Launch Link */}
        <Reveal className="mt-20">
          <div className="relative overflow-hidden rounded-2xl border border-oxide/24 bg-oxide/5 p-8 md:p-12">
            <div className="absolute right-[-6rem] top-[-6rem] h-48 w-48 rounded-full bg-oxide/12 blur-3xl" />
            <div className="absolute left-[-6rem] bottom-[-6rem] h-48 w-48 rounded-full bg-mist/20 blur-3xl" />
            
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-xs uppercase tracking-label text-oxide font-semibold">
                  <AlertCircle size={14} />
                  <span>{lang === "en" ? "Elite Serbian Partnership Program" : "Elitni Lokalni Program Partnerstva"}</span>
                </div>
                <h3 className="mt-4 font-display text-3xl md:text-4xl font-medium text-carbon">
                  {lang === "en"
                    ? "Aether Launch: €0 Upfront Creation."
                    : "Aether Launch: Izrada sajta za 0€ inicijalno."}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-carbon/70">
                  {lang === "en"
                    ? "Perfect for restaurants, premium clinics, real estate, and salons looking for a high-end web presence with predictable cash flow. We build your platform for 0€ creation cost on a rolling 12-month retainer plan."
                    : "Savršeno za premium ordinacije, salone, restorane i startape koji žele vrhunski digitalni nastup uz predvidljive troškove. Radimo kompletan dizajn i programiranje za 0€ početnog troška uz ugovor na 12 meseci."}
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="#launch-cta"
                  onClick={(e) => {
                    e.preventDefault();
                    // Smooth scroll to homepage launch section if on same page or redirect to index with launch anchor
                    if (window.location.pathname === "/") {
                      document.getElementById("launch")?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.location.href = "/#launch";
                    }
                  }}
                  className="group inline-flex items-center gap-3 rounded-full bg-carbon px-6 py-4 text-sm font-semibold uppercase tracking-wider text-chalk transition-all duration-300 hover:bg-oxide"
                >
                  <span>{lang === "en" ? "Explore Launch Program" : "Istraži Launch Program"}</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
