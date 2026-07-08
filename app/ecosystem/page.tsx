import Hero from "@/components/ecosystem/Hero";
import Overview from "@/components/ecosystem/Overview";
import EcosystemMap from "@/components/ecosystem/EcosystemMap";
import Pillars from "@/components/ecosystem/Pillars";
import Technology from "@/components/ecosystem/Technology";
import Logistics from "@/components/ecosystem/Logistics";
import Wholesale from "@/components/ecosystem/Wholesale";
import Infrastructure from "@/components/ecosystem/Infrastructure";
import Retail from "@/components/ecosystem/Retail";
import Academy from "@/components/ecosystem/Academy";
import Impact from "@/components/ecosystem/Impact";
import CTA from "@/components/ecosystem/CTA";

export default function EcosystemPage() {
  return (
    <>
      <Hero />
      <Overview />
      <EcosystemMap />
      <Pillars />
      <Technology />
      <Logistics />
      <Wholesale />
      <Infrastructure />
      <Retail />
      <Academy />
      <Impact />
      <CTA />
    </>
  );
}