"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";

const accentClass: Record<string, string> = {
  moss: "bg-moss",
  oxide: "bg-oxide",
  mist: "bg-mist"
};

export function SelectedWork() {
  return (
    <section id="work" className="relative overflow-hidden bg-carbon px-5 py-24 text-chalk md:px-10 md:py-36">
      <div className="absolute inset-0 opacity-30 dark-grid-lines" />
      <div className="absolute left-1/2 top-12 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-mist/10 blur-3xl" />
      <div className="mx-auto max-w-[1560px]">
        <div className="relative mb-16 grid gap-8 lg:grid-cols-[0.35fr_1fr]">
          <SectionLabel index="02" label="Selected work" tone="light" />
          <h2 className="max-w-5xl font-display text-[clamp(3.2rem,8vw,8.5rem)] font-medium leading-[0.88] text-balance">
            Case studies with atmosphere, logic, and business shape.
          </h2>
        </div>

        <div className="relative space-y-7">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="group grid gap-0 overflow-hidden border border-chalk/12 bg-chalk/[0.035] md:grid-cols-[0.92fr_1.08fr]"
            >
              <div className="relative min-h-[24rem] overflow-hidden md:min-h-[34rem]">
                <Image
                  src={project.image}
                  alt={`${project.title} visual placeholder`}
                  fill
                  sizes="(min-width: 768px) 46vw, 100vw"
                  className="object-cover opacity-82 saturate-[0.82] transition duration-700 group-hover:scale-105 group-hover:saturate-100"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.palette} opacity-28 mix-blend-overlay`} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,15,0.08),rgba(17,17,15,0.72))]" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <span className="font-display text-7xl text-chalk/70">{project.index}</span>
                  <span className={`h-16 w-16 rounded-full ${accentClass[project.accent]} opacity-90`} />
                </div>
              </div>

              <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
                <div>
                  <p className="mb-5 text-xs uppercase tracking-label text-stone">{project.category}</p>
                  <h3 className="max-w-3xl font-display text-[clamp(3rem,6vw,7rem)] font-medium leading-[0.86]">
                    {project.title}
                  </h3>
                  <p className="mt-8 max-w-2xl text-lg leading-8 text-chalk/68">{project.description}</p>
                </div>

                <div className="mt-12 grid gap-6 border-t border-chalk/12 pt-7 lg:grid-cols-3">
                  <div>
                    <p className="mb-3 text-xs uppercase tracking-label text-chalk/35">Problem</p>
                    <p className="text-sm leading-6 text-chalk/58">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="mb-3 text-xs uppercase tracking-label text-chalk/35">Solution</p>
                    <p className="text-sm leading-6 text-chalk/58">{project.solution}</p>
                  </div>
                  <div>
                    <p className="mb-3 text-xs uppercase tracking-label text-chalk/35">Outcome</p>
                    <p className="text-sm leading-6 text-chalk/58">{project.outcome}</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-chalk/15 bg-chalk/[0.03] px-3 py-1 text-xs text-chalk/55">
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
