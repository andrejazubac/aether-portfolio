import { About } from "@/components/sections/About";
import { AISystems } from "@/components/sections/AISystems";
import { Contact } from "@/components/sections/Contact";
import { Expertise } from "@/components/sections/Expertise";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { ParallaxSignal } from "@/components/sections/ParallaxSignal";
import { Philosophy } from "@/components/sections/Philosophy";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { StudioManifesto } from "@/components/sections/StudioManifesto";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="noise" />
      <Header />
      <main>
        <Hero />
        <StudioManifesto />
        <About />
        <ParallaxSignal />
        <SelectedWork />
        <AISystems />
        <Expertise />
        <Philosophy />
        <Testimonials />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
