"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Why invest in Kasi QuickShop?",
    answer:
      "Kasi QuickShop is building South Africa's first youth-owned retail ecosystem by integrating retail, logistics, wholesale, technology and entrepreneur development into one scalable national platform.",
  },
  {
    question: "How will investment capital be used?",
    answer:
      "Investment will primarily fund distribution infrastructure, technology platforms, entrepreneur development, logistics, flagship stores and national expansion across South Africa.",
  },
  {
    question: "What makes the business model different?",
    answer:
      "Unlike traditional retail businesses, Kasi QuickShop combines multiple complementary businesses into one ecosystem that strengthens every entrepreneur while creating long-term value for investors.",
  },
  {
    question: "How large is the market opportunity?",
    answer:
      "South Africa's township retail economy represents a multi-billion Rand opportunity with significant potential for organised retail, technology integration and national expansion.",
  },
  {
    question: "What is the long-term vision?",
    answer:
      "To build South Africa's largest youth-owned retail ecosystem before expanding the proven model into selected African markets.",
  },
  {
    question: "How will investors stay informed?",
    answer:
      "Investors will receive regular business updates, progress reports, strategic milestones and future expansion plans through structured investor communications.",
  },
];

export default function FAQ() {

  const [open, setOpen] = useState<number | null>(0);

  return (

    <section className="bg-white py-24">

      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">

            INVESTOR FAQ

          </p>

          <h2 className="text-5xl font-extrabold text-black">

            Frequently Asked Questions

          </h2>

          <p className="text-zinc-600 text-xl mt-6 leading-9">

            Everything investors need to know about
            Kasi QuickShop's long-term vision and
            national growth strategy.

          </p>

        </div>

        {/* Accordion */}

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="border border-zinc-200 rounded-3xl overflow-hidden hover:border-yellow-400 transition-all duration-300"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-8 text-left"
              >

                <h3 className="text-xl font-bold text-black">

                  {faq.question}

                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="px-8 pb-8">

                  <p className="text-zinc-600 leading-8 text-lg">

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