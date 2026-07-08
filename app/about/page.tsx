import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import VisionMission from "@/components/about/VisionMission";
import Values from "@/components/about/Values";
import Ecosystem from "@/components/about/Ecosystem";
import NationalVision from "@/components/about/NationalVision";
import Founder from "@/components/about/Founder";
import CTA from "@/components/about/CTA";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <Story />
      <VisionMission />
      <Values />
      <Ecosystem />
      <NationalVision />
      <Founder />
      <CTA />
    </>
  );
}