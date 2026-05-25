import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PricingSection } from "@/components/sections/PricingSection";

export const metadata: Metadata = {
  title: "Pricing & Investment Packages",
  description:
    "Explore pricing and structures for Aether Studio's premium Next.js custom design, high-end motion implementation, SEO optimization, and the elite €0 upfront Aether Launch program."
};

export default function PricingPage() {
  return (
    <SmoothScroll>
      <div className="noise" />
      <Header />
      <main>
        <PricingSection />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
