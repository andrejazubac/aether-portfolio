import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="bg-carbon px-5 py-24 text-chalk md:px-10 md:py-36">
      <div className="mx-auto max-w-[1560px]">
        <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
          <SectionLabel index="08" label="Services" tone="light" />
          <Reveal>
            <h2 className="max-w-5xl font-display text-[clamp(3.2rem,8vw,8.6rem)] font-medium leading-[0.88] text-balance">
              Premium digital work for founders, teams, and brands that need more than execution.
            </h2>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Reveal key={service.title}>
              <article className="min-h-64 border border-chalk/12 p-7 transition-colors duration-300 hover:border-chalk/32">
                <h3 className="font-display text-4xl font-medium leading-tight">{service.title}</h3>
                <p className="mt-10 max-w-xl leading-7 text-chalk/62">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
