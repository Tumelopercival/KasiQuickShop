"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need retail experience to apply?",
    answer:
      "Not necessarily. While some roles require industry experience, many positions focus on your skills, potential and willingness to learn.",
  },
  {
    question: "Do you offer internships or graduate programmes?",
    answer:
      "As Kasi QuickShop grows nationally, internship, graduate and learnership opportunities will become an important part of developing South Africa's future professionals.",
  },
  {
    question: "Where are Kasi QuickShop offices located?",
    answer:
      "Our long-term vision includes a national headquarters supported by regional offices and distribution centres across South Africa.",
  },
  {
    question: "Can I apply for more than one position?",
    answer:
      "Yes. If your skills are suited to multiple opportunities, you're welcome to apply for any position that matches your experience and interests.",
  },
  {
    question: "How long does the recruitment process take?",
    answer:
      "The recruitment timeline depends on the position, but we aim to keep applicants informed throughout every stage of the process.",
  },
  {
    question: "What qualities do you look for?",
    answer:
      "We value integrity, innovation, teamwork, accountability, leadership potential and people who are passionate about building South Africa's future.",
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
            CAREERS FAQ
          </p>

          <h2 className="text-5xl font-extrabold text-black">
            Frequently Asked Questions
          </h2>

          <p className="text-zinc-600 text-xl mt-6 leading-9">
            Everything you need to know before joining the
            Kasi QuickShop team.
          </p>

        </div>

        {/* Accordion */}

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="border border-zinc-200 rounded-[32px] overflow-hidden hover:border-yellow-400 transition-all duration-300"
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

                  <p className="text-zinc-600 text-lg leading-8">

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