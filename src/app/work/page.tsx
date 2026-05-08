import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { WorkArchive } from "@/components/sections/WorkArchive";

export const metadata: Metadata = {
  title: "Work References",
  description:
    "A curated reference archive of Awwwards-level motion, refreshing, and professional websites aligned with Aether Studio's creative direction."
};

export default function WorkPage() {
  return (
    <SmoothScroll>
      <div className="noise" />
      <Header />
      <WorkArchive />
      <Footer />
    </SmoothScroll>
  );
}
