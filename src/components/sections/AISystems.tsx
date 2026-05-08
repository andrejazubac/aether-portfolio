import { Bot, GitBranch, Workflow } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MotionAccent } from "@/components/visuals/MotionAccent";

const systems = [
  { icon: Workflow, title: "Workflow intelligence", text: "Mapping repeated business actions into clean, observable automation flows." },
  { icon: Bot, title: "AI assistant layers", text: "Designing agent-like helpers that support decisions instead of adding noise." },
  { icon: GitBranch, title: "Operational architecture", text: "Connecting data, tools, triggers, permissions, and human review into one system." }
];

export function AISystems() {
  return (
    <section id="systems" className="relative overflow-hidden bg-porcelain px-5 py-24 text-carbon md:px-10 md:py-36">
      <div className="absolute inset-0 grid-lines opacity-55" />
      <div className="absolute right-[-10rem] top-20 h-[34rem] w-[34rem] rounded-full bg-mist/40 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1560px] gap-14 lg:grid-cols-[0.35fr_1fr]">
        <SectionLabel index="03" label="AI systems" />
        <div>
          <Reveal>
            <h2 className="max-w-5xl font-display text-[clamp(3rem,7vw,7.6rem)] font-medium leading-[0.9] text-balance">
              AI that behaves like infrastructure, not decoration.
            </h2>
          </Reveal>
          <Reveal className="relative mt-14 overflow-hidden border border-carbon/12 bg-chalk/50 p-5 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(166,95,62,0.14),transparent_26%),radial-gradient(circle_at_80%_55%,rgba(203,216,220,0.55),transparent_32%)]" />
            <div className="relative grid min-h-[22rem] gap-5 md:grid-cols-[1fr_0.8fr]">
              <div className="flex flex-col justify-between border border-carbon/10 bg-porcelain/70 p-5">
                <div>
                  <p className="text-xs uppercase tracking-label text-carbon/42">Automation map</p>
                  <p className="mt-6 max-w-xl font-display text-5xl leading-[0.92] md:text-7xl">
                    From scattered tasks to one intelligent operating layer.
                  </p>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-3 text-xs uppercase tracking-label text-carbon/45">
                  <span>Input</span>
                  <span>Reason</span>
                  <span>Act</span>
                </div>
              </div>
              <div className="relative min-h-72 overflow-hidden border border-carbon/10 bg-carbon text-chalk">
                <div className="absolute inset-0 dark-grid-lines opacity-55" />
                <MotionAccent variant="sweep" className="absolute inset-0 opacity-75" />
                <div className="absolute left-8 top-8 h-16 w-16 rounded-full border border-mist/60" />
                <div className="absolute right-8 top-20 h-24 w-24 rounded-full bg-oxide/75 blur-sm" />
                <div className="absolute bottom-8 left-10 right-10 space-y-3">
                  {["Client signal received", "AI summary generated", "Human approval checkpoint", "Workflow dispatched"].map((step) => (
                    <div key={step} className="flex items-center justify-between border border-chalk/12 bg-chalk/[0.04] px-4 py-3 text-xs uppercase tracking-label text-chalk/62">
                      <span>{step}</span>
                      <span className="h-2 w-2 rounded-full bg-mist" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {systems.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} className="border-t border-carbon/18 pt-6">
                  <Icon size={24} strokeWidth={1.4} className="mb-12 text-oxide" />
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <p className="mt-4 leading-7 text-carbon/62">{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
