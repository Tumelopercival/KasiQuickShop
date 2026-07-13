import Hero from "@/components/suppliers/Hero";
import WhyPartner from "@/components/suppliers/WhyPartner";
import SupplierApplicationForm from "@/components/suppliers/SupplierApplicationForm";
import CTA from "@/components/suppliers/CTA";

export const metadata = {
  title: "Suppliers | KASI QUICKSHOP",
  description:
    "Partner with KASI QUICKSHOP and help build South Africa's first youth-owned retail ecosystem. Join our growing network of manufacturers, wholesalers, distributors and strategic suppliers.",
};

export default function SuppliersPage() {
  return (
    <main className="bg-[#050505] text-white">
      <Hero />
      <WhyPartner />
      <SupplierApplicationForm />
      <CTA />
    </main>
  );
}