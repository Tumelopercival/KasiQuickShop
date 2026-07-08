"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need retail experience?",
    answer:
      "No. We provide practical training and ongoing support to help you succeed.",
  },
  {
    question: "Will Kasi QuickShop help me operate the store?",
    answer:
      "Yes. You'll receive operational guidance, technology and logistics support.",
  },
  {
    question: "How long does the process take?",
    answer:
      "The timeline depends on location and approvals, but we'll guide you through every step.",
  },
  {
    question: "Can I own more than one store?",
    answer:
      "Yes. High-performing entrepreneurs may have opportunities to expand in future.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">
            FAQ
          </p>

          <h2 className="text-5xl font-extrabold">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="border border-zinc-200 rounded-2xl overflow-hidden"
            >

              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
              >

                <span className="font-bold text-xl">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="px-6 pb-6 text-zinc-600 leading-8">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}