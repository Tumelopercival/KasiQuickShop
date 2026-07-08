"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "We aim to respond to all enquiries within 1–2 business days. Complex enquiries may require additional time, but we'll keep you informed throughout the process.",
  },
  {
    question: "How do I become a Kasi QuickShop entrepreneur?",
    answer:
      "Visit our Entrepreneurs page or complete the Entrepreneur enquiry form on this page. Our team will guide you through the application and onboarding process.",
  },
  {
    question: "Can I schedule an investor meeting?",
    answer:
      "Yes. Investors can submit an enquiry through the Investor section of our contact page. Our investment team will arrange a suitable meeting to discuss opportunities.",
  },
  {
    question: "How can my company become a supplier?",
    answer:
      "We're always interested in building strong supplier partnerships. Submit a Supplier enquiry with details about your products or services and our procurement team will review your submission.",
  },
  {
    question: "Where is Kasi QuickShop headquartered?",
    answer:
      "Our national headquarters is based in Johannesburg, South Africa, with a long-term vision of establishing regional offices and distribution centres across all nine provinces.",
  },
  {
    question: "How can media request interviews or information?",
    answer:
      "Journalists and media organisations can submit a Media enquiry. Our communications team will respond as quickly as possible to interview requests and press enquiries.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">
            CONTACT FAQ
          </p>

          <h2 className="text-5xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>

          <p className="text-zinc-300 text-xl mt-6 leading-9">
            Answers to some of the most common questions about
            Kasi QuickShop and how to get in touch with our team.
          </p>

        </div>

        {/* Accordion */}

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-black border border-zinc-800 rounded-[32px] overflow-hidden hover:border-yellow-400 transition-all duration-300"
            >

              <button
                type="button"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-8 text-left"
              >

                <h3 className="text-xl font-bold text-white">

                  {faq.question}

                </h3>

                <ChevronDown
                  className={`text-yellow-400 transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="px-8 pb-8">

                  <p className="text-zinc-400 text-lg leading-8">

                    {faq.answer}

                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}