import Hero from "@/components/careers/Hero";
import CurrentStatus from "@/components/careers/CurrentStatus";
import CareerInterestForm from "@/components/careers/CareerInterestForm";
import CTA from "@/components/careers/CTA";

export const metadata = {
  title: "Future Careers | KASI QUICKSHOP",
  description:
    "Register your interest for future career opportunities at KASI QUICKSHOP while we build South Africa's first youth-owned retail ecosystem.",
};

export default function FutureCareersPage() {
  return (
    <main className="bg-[#050505] text-white">
      <Hero />
      <CurrentStatus />
      <CareerInterestForm />
      <CTA />
    </main>
  );
}