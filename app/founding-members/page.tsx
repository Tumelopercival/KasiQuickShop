import Hero from "@/components/founding-members/Hero";
import WhyFounding from "@/components/founding-members/WhyFounding";
import Professions from "@/components/founding-members/Professions";
import Ecosystem from "@/components/founding-members/Ecosystem";
import Principles from "@/components/founding-members/Principles";
import Benefits from "@/components/founding-members/Benefits";
import Journey from "@/components/founding-members/Journey";
import ApplicationForm from "@/components/founding-members/ApplicationForm";
import FAQ from "@/components/founding-members/FAQ";
import CTA from "@/components/founding-members/CTA";

export const metadata = {
  title: "Become a Founding Member | KASI QUICKSHOP",
  description:
    "Help build South Africa's first youth-owned retail ecosystem. Join the founding team shaping the future of township retail through technology, logistics, infrastructure, entrepreneurship and innovation.",
};

export default function FoundingMembersPage() {
  return (
    <main className="bg-[#050505] text-white">
      <Hero />
      <WhyFounding />
      <Professions />
      <Ecosystem />
      <Principles />
      <Benefits />
      <Journey />
      <ApplicationForm />
      <FAQ />
      <CTA />
    </main>
  );
}