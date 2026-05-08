import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { expertise, technicalStack } from "@/data/expertise";

export function Expertise() {
  return (
    <section id="expertise" className="bg-chalk px-5 py-24 text-carbon md:px-10 md:py-36">
      <div className="mx-auto max-w-[1560px]">
        <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
          <SectionLabel index="04" label="Technical expertise" />
          <div>
            <Reveal>
              <h2 className="max-w-4xl font-display text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.9]">
                Built with taste. Structured for scale.
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-0 border-t border-carbon/15">
              {expertise.map((item, index) => (
                <Reveal key={item.title}>
                  <div className="grid gap-5 border-b border-carbon/15 py-8 md:grid-cols-[0.16fr_0.4fr_1fr]">
                    <span className="text-sm text-carbon/38">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="text-2xl font-medium">{item.title}</h3>
                    <p className="max-w-2xl leading-7 text-carbon/62">{item.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {technicalStack.map((item) => (
                <span key={item} className="rounded-full border border-carbon/15 px-3 py-1.5 text-xs text-carbon/58">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
