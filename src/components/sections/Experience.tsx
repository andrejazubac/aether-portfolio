import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experience } from "@/data/services";

export function Experience() {
  return (
    <section id="experience" className="bg-porcelain px-5 py-24 text-carbon md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1560px] gap-14 lg:grid-cols-[0.35fr_1fr]">
        <SectionLabel index="06" label="Studio credibility" />
        <div className="grid gap-8">
          {experience.map((item) => (
            <Reveal key={item.period}>
              <article className="grid gap-6 border-t border-carbon/15 py-8 md:grid-cols-[0.16fr_0.5fr_1fr]">
                <span className="font-display text-5xl text-carbon/28">{item.period}</span>
                <h3 className="text-2xl font-medium">{item.role}</h3>
                <p className="max-w-2xl leading-7 text-carbon/62">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
