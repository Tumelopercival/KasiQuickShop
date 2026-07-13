import Hero from "@/components/entrepreneurs/Hero";
import WhyBecomeEntrepreneur from "@/components/entrepreneurs/WhyBecomeEntrepreneur";
import EntrepreneurApplicationForm from "@/components/entrepreneurs/EntrepreneurApplicationForm";
import CTA from "@/components/entrepreneurs/CTA";

export const metadata = {
  title: "Entrepreneurs | KASI QUICKSHOP",
  description:
    "Build your own business with South Africa's first youth-owned retail ecosystem.",
};

export default function EntrepreneursPage() {
  return (
    <main className="bg-[#050505] text-white">
      <Hero />
      <WhyBecomeEntrepreneur />
      <EntrepreneurApplicationForm />
      <CTA />
    </main>
  );
}