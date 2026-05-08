import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { studio } from "@/data/studio";

const signals = ["Senior engineering", "Product systems", "AI automation", "Creative direction"];

export function About() {
  return (
    <section id="about" className="grid-lines bg-chalk px-5 py-24 text-carbon md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1560px] gap-16 lg:grid-cols-[0.52fr_1fr]">
        <div>
          <SectionLabel index="01" label="Founder" />
        </div>
        <div className="grid gap-12 md:grid-cols-[1fr_0.55fr]">
          <Reveal>
            <h2 className="font-display text-[clamp(3rem,7vw,7.4rem)] font-medium leading-[0.86] text-balance">
              Andreja Zubac builds through Aether Studio.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-carbon/68">
              Aether Studio is the studio identity behind Andreja Zubac: a senior software engineer, product builder, and AI automation creator focused on digital products that feel precise, useful, and quietly memorable.
            </p>
          </Reveal>
          <Reveal className="space-y-4">
            {signals.map((signal) => (
              <div key={signal} className="border-t border-carbon/15 py-4">
                <p className="text-sm uppercase tracking-label text-carbon/45">{signal}</p>
              </div>
            ))}
            <a
              href={`mailto:${studio.email}`}
              className="inline-block pt-4 text-sm font-medium text-carbon underline underline-offset-8"
            >
              {studio.email}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
