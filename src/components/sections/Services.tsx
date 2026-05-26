"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

interface ServiceItem {
  index: string;
  title: string;
  desc: string;
  subservices: string[];
}

const serviceImages = [
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80", // Brand Identity
  "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80", // Visual Content
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80", // Web & Mobile Apps
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80", // Web Development
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"  // E-commerce
];

export function Services() {
  const { lang, t } = useLanguage();
  const items = (t("services.items") || []) as ServiceItem[];

  return (
    <section id="services" className="relative overflow-hidden bg-porcelain px-5 py-20 text-carbon md:px-10 md:py-28">
      {/* Editorial background grid lines */}
      <div className="absolute inset-0 opacity-25 grid-lines pointer-events-none" />
      
      <div className="relative mx-auto max-w-[1560px]">
        {/* Section Header */}
        <div className="mb-12">
          <SectionLabel index="04" label={t("nav.services")} tone="dark" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map((item, idx) => {
            return (
              <Reveal key={item.index}>
                <article className="relative overflow-hidden aspect-[3/4.2] w-full rounded-2xl border border-carbon/10 bg-carbon text-chalk shadow-sm flex flex-col justify-between group cursor-pointer">
                  {/* Background Image */}
                  <Image
                    src={serviceImages[idx] || serviceImages[0]}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-sm group-hover:brightness-[0.4] group-hover:saturate-[0.8]"
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  
                  {/* Dark gradient overlay for text protection */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/35 z-0 pointer-events-none group-hover:bg-black/55 transition-colors duration-500" />
                  
                  {/* Card Content Top */}
                  <div className="relative z-10 p-6 flex justify-between items-start w-full pointer-events-none">
                    <h3 className="font-display text-lg md:text-xl font-medium leading-tight text-white max-w-[70%]">
                      {item.title}
                    </h3>
                    <span className="font-sans text-[10px] text-white/70 tracking-wider">
                      /{item.subservices.length} {lang === "en" ? "services" : "usluga"}
                    </span>
                  </div>

                  {/* Subservices tags (center of card, fades and slides up on hover) */}
                  <div className="relative z-10 px-6 flex flex-col gap-2.5 flex-1 justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-none">
                    {item.subservices.map((sub) => (
                      <span 
                        key={sub} 
                        className="w-fit rounded-lg bg-white/20 backdrop-blur-md px-3 py-1 text-[10.5px] text-white/90 font-medium tracking-wide border border-white/8"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>

                  {/* Card Content Bottom */}
                  <div className="relative z-10 p-6 flex justify-between items-end w-full pointer-events-none">
                    {/* Dot matrix icon at bottom left */}
                    <div className="opacity-60 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-white/80" viewBox="0 0 100 100" fill="currentColor">
                        <rect x="20" y="20" width="12" height="12" rx="6" />
                        <rect x="44" y="20" width="12" height="12" rx="6" />
                        <rect x="68" y="20" width="12" height="12" rx="6" />
                        <rect x="20" y="44" width="12" height="12" rx="6" />
                        <rect x="44" y="44" width="12" height="12" rx="6" />
                        <rect x="68" y="44" width="12" height="12" rx="6" />
                        <rect x="20" y="68" width="12" height="12" rx="6" />
                        <rect x="44" y="68" width="12" height="12" rx="6" />
                        <rect x="68" y="68" width="12" height="12" rx="6" />
                      </svg>
                    </div>
                    
                    <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 group-hover:text-white underline decoration-white/30 underline-offset-4 transition-colors">
                      {lang === "en" ? "See More" : "Vidi Više"}
                    </span>
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
