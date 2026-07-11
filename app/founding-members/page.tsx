import Hero from "@/components/founding-members/Hero";
import WhyFounding from "@/components/founding-members/WhyFounding";
import ApplicationForm from "@/components/founding-members/ApplicationForm";
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
      <ApplicationForm />
      <CTA />
    </main>
  );
}