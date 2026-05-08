import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { studio } from "@/data/studio";

export function StudioManifesto() {
  return (
    <section id="studio" className="bg-porcelain px-5 py-28 text-carbon md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1560px] gap-12 lg:grid-cols-[0.35fr_1fr]">
        <SectionLabel index="00" label="Studio thesis" />
        <Reveal>
          <p className="max-w-5xl font-display text-[clamp(2.8rem,7vw,8rem)] font-medium leading-[0.9] text-balance">
            {studio.manifesto}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
