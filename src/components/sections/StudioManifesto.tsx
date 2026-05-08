import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MotionAccent } from "@/components/visuals/MotionAccent";
import { studio } from "@/data/studio";

export function StudioManifesto() {
  return (
    <section id="studio" className="relative overflow-hidden bg-porcelain px-5 py-24 text-moss md:px-10 md:py-36">
      <div className="absolute left-[-12rem] top-16 h-[30rem] w-[30rem] rounded-full bg-mist/55 blur-3xl" />
      <div className="absolute bottom-[-8rem] right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-oxide/12 blur-3xl" />
      <div className="absolute inset-0 grid-lines opacity-35" />
      <div className="relative mx-auto grid max-w-[1560px] gap-12 lg:grid-cols-[0.35fr_1fr]">
        <SectionLabel index="00" label="Studio thesis" />
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
          <div>
            <p className="max-w-4xl font-display text-[clamp(3rem,7.4vw,8.2rem)] font-medium leading-[0.86] text-balance text-moss">
              {studio.manifesto}
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-carbon/58">
              Aether Studio blends product engineering, automation thinking, and editorial digital craft into focused systems for ambitious brands and founders.
            </p>
          </div>
          <div className="relative min-h-72 overflow-hidden border border-moss/16 bg-chalk/62 p-5 shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(203,216,220,0.78),transparent_26%),radial-gradient(circle_at_82%_74%,rgba(166,95,62,0.22),transparent_28%)]" />
            <MotionAccent variant="ring" className="absolute inset-x-0 top-5 opacity-55" />
            <div className="relative flex h-full min-h-60 flex-col justify-between">
              <p className="text-xs uppercase tracking-label text-moss/55">Studio coordinates</p>
              <div className="space-y-3">
                {["Architecture", "Automation", "Atmosphere"].map((item, index) => (
                  <div key={item} className="flex items-center justify-between border-t border-moss/14 pt-3">
                    <span className="text-sm text-moss/72">{item}</span>
                    <span className="font-display text-3xl text-oxide/70">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
