import { Hero } from "@/components/sections/Hero";
import { Profile } from "@/components/sections/Profile";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { Approach } from "@/components/sections/Approach";
import { AetherLaunch } from "@/components/sections/AetherLaunch";
import { Contact } from "@/components/sections/Contact";
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
        <Profile />
        <SelectedWork />
        <Services />
        <Approach />
        <AetherLaunch />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
