"use client";

import { useState, useEffect } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";
import { studio } from "@/data/studio";
import { testimonials } from "@/data/projects";

export function Contact() {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto rotate testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden bg-porcelain px-5 py-20 text-carbon md:px-10 md:py-28">
      {/* Editorial background grid lines */}
      <div className="absolute inset-0 grid-lines opacity-25" />
      <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-mist/30 blur-3xl" />
      <div className="absolute bottom-[-12rem] right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-oxide/10 blur-3xl" />
      
      <div className="relative mx-auto grid max-w-[1560px] gap-12 lg:grid-cols-[0.25fr_1.75fr]">
        <SectionLabel index="06" label={t("contact.tag")} tone="dark" />
        
        <div className="grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-stretch lg:border-l lg:border-carbon/10 lg:pl-10">
          {/* Main Inquiry Card */}
          <div className="relative overflow-hidden border border-carbon/10 bg-chalk/75 p-6 md:p-10 flex flex-col justify-between shadow-sm">
            <div className="absolute right-[-4rem] top-[-4rem] h-48 w-48 rounded-full bg-mist/50 blur-2xl" />
            <div className="relative">
              <p className="mb-6 text-[10px] uppercase tracking-label text-carbon/42 font-bold">
                {t("contact.badge")}
              </p>
              <h2 className="max-w-4xl font-display text-[clamp(2.5rem,5.8vw,5.6rem)] font-medium leading-[0.9] text-carbon text-balance">
                {t("contact.title")}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-carbon/62">
                {t("contact.description")}
              </p>
            </div>
            
            <div className="relative mt-8 flex flex-wrap gap-3">
              <MagneticButton href={`mailto:${studio.email}`}>
                {t("contact.cta")}
              </MagneticButton>
              <a
                href={`mailto:${studio.email}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-carbon/12 bg-mist/30 px-5 py-3 text-xs font-semibold text-carbon transition-colors duration-300 hover:bg-mist"
              >
                <Mail size={14} strokeWidth={1.7} className="text-oxide" />
                {studio.email}
              </a>
              <a
                href={`tel:${studio.phone}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-carbon/12 bg-chalk/70 px-5 py-3 text-xs font-semibold text-carbon transition-colors duration-300 hover:bg-mist/20"
              >
                <Phone size={14} strokeWidth={1.7} className="text-oxide" />
                {studio.phone}
              </a>
            </div>
          </div>

          {/* Sidebar Info Column */}
          <div className="grid gap-6">
            {/* Testimonials Rotating Card */}
            <div className="relative overflow-hidden border border-carbon/10 bg-chalk/75 p-6 text-carbon shadow-sm flex flex-col justify-between min-h-[200px] transition-all hover:border-oxide/30">
              <div className="absolute inset-0 grid-lines opacity-15" />
              <div className="relative flex flex-col justify-between h-full gap-6">
                <div>
                  <span className="text-[9px] uppercase tracking-label text-oxide font-bold">
                    {t("contact.feedback")}
                  </span>
                  <p className="mt-3 font-display text-base leading-relaxed text-carbon/88 italic">
                    &ldquo;{testimonials[activeIdx].quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-carbon/8 pt-3 text-[11px]">
                  <div>
                    <p className="font-semibold text-carbon">{testimonials[activeIdx].name}</p>
                    <p className="text-carbon/45">{testimonials[activeIdx].role}</p>
                  </div>
                  <div className="flex gap-1.5">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIdx(idx)}
                        className={`h-1 w-1 rounded-full transition-all ${
                          idx === activeIdx ? "bg-oxide w-2.5" : "bg-carbon/20"
                        }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Coordinates block */}
            <div className="relative overflow-hidden border border-carbon/10 bg-chalk/75 p-6 text-carbon shadow-sm transition-all hover:border-oxide/30">
              <div className="absolute inset-0 grid-lines opacity-15" />
              <div className="relative">
                <MapPin size={18} strokeWidth={1.7} className="text-oxide" />
                <p className="mt-8 text-[9px] uppercase tracking-label text-carbon/42 font-bold">
                  {t("contact.coordinatesHeader")}
                </p>
                <p className="mt-2 font-display text-2xl leading-tight text-carbon/88">
                  {t("contact.coordinatesContent")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
