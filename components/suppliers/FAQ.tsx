"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can apply to become a Kasi QuickShop supplier?",
    answer:
      "We welcome applications from manufacturers, wholesalers, distributors, producers, logistics providers, technology companies, professional service providers and other businesses that can contribute to the Kasi QuickShop ecosystem.",
  },
  {
    question: "Do you only work with South African suppliers?",
    answer:
      "Our primary focus is building strong partnerships with South African businesses. However, international suppliers offering strategic products or services may also be considered where appropriate.",
  },
  {
    question: "Is there a fee to apply?",
    answer:
      "No. There is no fee to submit a supplier application. Applications are reviewed based on capability, quality, compliance and alignment with our procurement requirements.",
  },
  {
    question: "Does submitting an application guarantee approval?",
    answer:
      "No. Every application undergoes a structured review process. Approval depends on business capability, product quality, commercial suitability and operational alignment with Kasi QuickShop.",
  },
  {
    question: "How long does the review process take?",
    answer:
      "Review timelines vary depending on the complexity of the application and supporting documentation. Our procurement team will keep applicants informed throughout the process.",
  },
  {
    question: "Can I supply products in more than one category?",
    answer:
      "Yes. Suppliers may apply across multiple product or service categories where they have the appropriate experience and operational capacity.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 bg-gradient-to-b from-black to-[#050505]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-5">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Supplier
            <span className="text-yellow-400"> FAQ</span>
          </h2>

          <p className="mt-8 text-xl text-zinc-400 leading-9">
            Find answers to some of the most common questions about becoming a
            supplier within the Kasi QuickShop ecosystem.
          </p>
        </div>

        {/* FAQ List */}

        <div className="mt-20 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-7 text-left"
                >
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-6 w-6 text-yellow-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-7 pb-7 text-zinc-400 leading-8">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}