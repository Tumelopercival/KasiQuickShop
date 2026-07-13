import Hero from "@/components/contact/Hero";
import ContactOptions from "@/components/contact/ContactOptions";
import ContactForm from "@/components/contact/ContactForm";
import Location from "@/components/contact/Location";
import CTA from "@/components/contact/CTA";

export const metadata = {
  title: "Contact | KASI QUICKSHOP",
  description:
    "Get in touch with KASI QUICKSHOP. Whether you're an entrepreneur, investor, supplier, future team member or strategic partner, we'd love to hear from you as we build South Africa's first youth-owned retail ecosystem.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#050505] text-white">
      <Hero />
      <ContactOptions />
      <ContactForm />
      <Location />
      <CTA />
    </main>
  );
}