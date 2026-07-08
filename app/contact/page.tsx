import Hero from "@/components/contact/Hero";
import ContactOptions from "@/components/contact/ContactOptions";
import ContactForm from "@/components/contact/ContactForm";
import OfficeLocations from "@/components/contact/OfficeLocations";
import FAQ from "@/components/contact/FAQ";
import CTA from "@/components/contact/CTA";

export default function ContactPage() {
  return (
    <>
      <Hero />
      <ContactOptions />
      <ContactForm />
      <OfficeLocations />
      <FAQ />
      <CTA />
    </>
  );
}