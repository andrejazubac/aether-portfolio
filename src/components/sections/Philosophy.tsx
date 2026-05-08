import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const principles = [
  "Clarity is a feature.",
  "Motion should guide, never perform.",
  "Architecture is part of the user experience.",
  "Premium means fewer things, made more precisely."
];

export function Philosophy() {
  return (
    <section id="philosophy" className="dark-grid-lines bg-moss px-5 py-24 text-chalk md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1560px] gap-14 lg:grid-cols-[0.35fr_1fr]">
        <SectionLabel index="05" label="Design philosophy" tone="light" />
        <div>
          <Reveal>
            <p className="max-w-4xl text-lg uppercase tracking-label text-stone">Creative engineer meets digital architect</p>
            <h2 className="mt-8 max-w-5xl font-display text-[clamp(3.2rem,8vw,8.8rem)] font-medium leading-[0.88] text-balance">
              The interface should feel calm because the system behind it is disciplined.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {principles.map((principle) => (
              <Reveal key={principle} className="border-t border-chalk/18 py-6">
                <p className="font-display text-3xl leading-tight text-chalk/88 md:text-4xl">{principle}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
