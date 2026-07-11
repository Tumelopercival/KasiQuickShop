import Hero from "@/components/suppliers/Hero";
import WhyPartner from "@/components/suppliers/WhyPartner";
import SupplyCategories from "@/components/suppliers/SupplyCategories";
import SupplyNetwork from "@/components/suppliers/SupplyNetwork";
import WhyChoose from "@/components/suppliers/WhyChoose";
import SupplierStandards from "@/components/suppliers/SupplierStandards";
import SupplierJourney from "@/components/suppliers/SupplierJourney";
import SupplierApplication from "@/components/suppliers/SupplierApplication";
import FAQ from "@/components/suppliers/FAQ";
import CTA from "@/components/suppliers/CTA";

export default function SuppliersPage() {
  return (
    <main className="bg-[#050505]">
      <Hero />
      <WhyPartner />
      <SupplyCategories />
      <SupplyNetwork />
      <WhyChoose />
      <SupplierStandards />
      <SupplierJourney />
      <SupplierApplication />
      <FAQ />
      <CTA />
    </main>
  );
}