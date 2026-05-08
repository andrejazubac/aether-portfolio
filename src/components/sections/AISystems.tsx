import { Bot, GitBranch, Workflow } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const systems = [
  { icon: Workflow, title: "Workflow intelligence", text: "Mapping repeated business actions into clean, observable automation flows." },
  { icon: Bot, title: "AI assistant layers", text: "Designing agent-like helpers that support decisions instead of adding noise." },
  { icon: GitBranch, title: "Operational architecture", text: "Connecting data, tools, triggers, permissions, and human review into one system." }
];

export function AISystems() {
  return (
    <section id="systems" className="bg-porcelain px-5 py-24 text-carbon md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1560px] gap-14 lg:grid-cols-[0.35fr_1fr]">
        <SectionLabel index="03" label="AI systems" />
        <div>
          <Reveal>
            <h2 className="max-w-5xl font-display text-[clamp(3rem,7vw,7.6rem)] font-medium leading-[0.9] text-balance">
              AI that behaves like infrastructure, not decoration.
            </h2>
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
