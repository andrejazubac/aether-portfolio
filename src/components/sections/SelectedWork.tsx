"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";

const accentClass: Record<string, string> = {
  moss: "bg-moss",
  oxide: "bg-oxide",
  mist: "bg-mist"
};

export function SelectedWork() {
  return (
    <section id="work" className="bg-carbon px-5 py-24 text-chalk md:px-10 md:py-36">
      <div className="mx-auto max-w-[1560px]">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.35fr_1fr]">
          <SectionLabel index="02" label="Selected directions" tone="light" />
          <h2 className="max-w-5xl font-display text-[clamp(3.2rem,8vw,8.5rem)] font-medium leading-[0.88] text-balance">
            Work shaped as systems, stories, and interfaces.
          </h2>
        </div>

        <div className="border-t border-chalk/14">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="group grid gap-8 border-b border-chalk/14 py-10 md:grid-cols-[0.16fr_0.9fr_0.7fr] md:items-center md:py-14"
            >
              <span className="text-sm text-chalk/38">{project.index}</span>
              <div>
                <p className="mb-3 text-xs uppercase tracking-label text-stone">{project.category}</p>
                <h3 className="font-display text-[clamp(2.5rem,6vw,6.8rem)] font-medium leading-[0.88] transition-transform duration-500 group-hover:translate-x-3">
                  {project.title}
                </h3>
              </div>
              <div className="space-y-6">
                <div className={`h-44 overflow-hidden rounded-sm ${accentClass[project.accent]} shadow-soft`}>
                  <div className="h-full w-full bg-[linear-gradient(135deg,rgba(251,250,247,0.24),transparent_38%),radial-gradient(circle_at_70%_25%,rgba(251,250,247,0.28),transparent_24%)] transition-transform duration-700 group-hover:scale-110" />
                </div>
                <p className="text-base leading-7 text-chalk/65">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-chalk/15 px-3 py-1 text-xs text-chalk/55">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
