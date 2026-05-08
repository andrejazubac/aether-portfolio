import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MotionAccent } from "@/components/visuals/MotionAccent";
import { studio } from "@/data/studio";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-porcelain px-5 py-24 text-moss md:px-10 md:py-36">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-mist/50 blur-3xl" />
      <div className="absolute bottom-[-12rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-oxide/16 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1560px] gap-12 lg:grid-cols-[0.28fr_1fr]">
        <SectionLabel index="09" label="Contact" />
        <div className="grid gap-5 lg:grid-cols-[0.95fr_0.62fr] lg:items-stretch">
          <div className="relative overflow-hidden border border-moss/14 bg-chalk/68 p-7 md:p-10">
            <div className="absolute right-[-4rem] top-[-4rem] h-52 w-52 rounded-full bg-mist/75 blur-2xl" />
            <div className="relative">
              <p className="mb-8 text-xs uppercase tracking-label text-moss/55">New product, automation, or premium web presence</p>
              <h2 className="max-w-4xl font-display text-[clamp(3.4rem,7.6vw,8.4rem)] font-medium leading-[0.86] text-moss text-balance">
                Let&apos;s shape the next system.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-carbon/58">
                For cinematic websites, AI-powered workflows, and product engineering engagements, start with a clear note about what you want to build.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <MagneticButton href={`mailto:${studio.email}`}>
                  Contact the studio
                </MagneticButton>
                <a
                  href={`mailto:${studio.email}`}
                  className="inline-flex items-center gap-3 rounded-full border border-moss/18 bg-mist/45 px-5 py-3 text-sm font-medium text-moss transition-colors duration-300 hover:bg-mist"
                >
                  <Mail size={16} strokeWidth={1.6} />
                  {studio.email}
                </a>
                <a
                  href={`tel:${studio.phone}`}
                  className="inline-flex items-center gap-3 rounded-full border border-moss/18 bg-chalk/70 px-5 py-3 text-sm font-medium text-moss transition-colors duration-300 hover:bg-mist/45"
                >
                  <Phone size={16} strokeWidth={1.6} />
                  {studio.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="relative overflow-hidden bg-moss p-7 text-chalk">
              <div className="absolute inset-0 dark-grid-lines opacity-35" />
              <MotionAccent variant="sweep" className="absolute inset-0 opacity-35" />
              <div className="relative">
                <MapPin size={22} strokeWidth={1.5} className="text-mist" />
                <p className="mt-12 text-xs uppercase tracking-label text-chalk/46">Studio mode</p>
                <p className="mt-4 font-display text-4xl leading-tight text-chalk/92">
                  Europe based. Remote by design. Built for focused collaborations.
                </p>
              </div>
            </div>
            <a
              href={`mailto:${studio.email}`}
              className="group flex min-h-40 items-end justify-between border border-oxide/24 bg-oxide/12 p-7 text-moss transition-colors duration-300 hover:bg-oxide/18"
            >
              <div>
                <p className="text-xs uppercase tracking-label text-moss/50">Direct line</p>
                <p className="mt-4 max-w-xs text-lg leading-7 text-carbon/64">
                  Share the goal, timeline, and the kind of experience you want people to feel. Email or call directly.
                </p>
              </div>
              <ArrowRight className="shrink-0 text-oxide transition-transform duration-300 group-hover:translate-x-1" size={24} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
