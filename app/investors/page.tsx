import Hero from "@/components/investors/Hero";
import Opportunity from "@/components/investors/Opportunity";
import WhyInvest from "@/components/investors/WhyInvest";
import BusinessModel from "@/components/investors/BusinessModel";
import CompetitiveAdvantage from "@/components/investors/CompetitiveAdvantage";
import RolloutPlan from "@/components/investors/RolloutPlan";
import Leadership from "@/components/investors/Leadership";
import FAQ from "@/components/investors/FAQ";
import CTA from "@/components/investors/CTA";

export default function InvestorsPage() {
  return (
    <>
      <Hero />
      <Opportunity />
      <WhyInvest />
      <BusinessModel />
      <CompetitiveAdvantage />
      <RolloutPlan />
      <Leadership />
      <FAQ />
      <CTA />
    </>
  );
}