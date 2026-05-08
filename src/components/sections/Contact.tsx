import { Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { studio } from "@/data/studio";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-chalk px-5 py-24 text-carbon md:px-10 md:py-40">
      <div className="absolute inset-x-0 top-0 h-px bg-carbon/15" />
      <div className="mx-auto grid max-w-[1560px] gap-16 lg:grid-cols-[0.35fr_1fr]">
        <SectionLabel index="09" label="Contact" />
        <div>
          <h2 className="max-w-6xl font-display text-[clamp(4rem,12vw,13rem)] font-medium leading-[0.82] text-balance">
            Build something precise.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-[0.7fr_1fr] md:items-end">
            <p className="max-w-xl text-xl leading-8 text-carbon/64">
              For premium web experiences, AI automation systems, and product engineering engagements, contact Andreja Zubac at Aether Studio.
            </p>
            <div className="flex flex-col gap-5 md:items-end">
              <MagneticButton href={`mailto:${studio.email}`}>
                Contact the studio
              </MagneticButton>
              <a href={`mailto:${studio.email}`} className="inline-flex items-center gap-3 text-sm text-carbon/58 transition-colors duration-300 hover:text-carbon">
                <Mail size={16} strokeWidth={1.6} />
                {studio.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
