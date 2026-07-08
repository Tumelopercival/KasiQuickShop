"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this employment?",
    answer:
      "No. Becoming a Founding Member is not the same as applying for employment. We are assembling a multidisciplinary founding team to help shape and build KASI QUICKSHOP from its earliest stages. Future employment opportunities may arise as the organisation grows, but this application is focused on joining the founding community.",
  },
 {
  question: "Is there capital investment needed?",
  answer:
    "Yes. Building a long-term national retail ecosystem requires capital investment. Financial investment is one form of contribution, but it is not the only one. We also value professional expertise, technical skills, leadership, industry knowledge and strategic guidance. We recognise that every founding member may contribute in different ways, and applications are considered based on the overall value an individual or organisation can bring to the growth and success of KASI QUICKSHOP.",
},
  {
    question: "Can students or recent graduates apply?",
    answer:
      "Yes. While professional experience is valuable, we also welcome applications from motivated students and recent graduates who demonstrate exceptional potential, initiative and a commitment to our mission.",
  },
  {
    question: "Can South Africans living abroad apply?",
    answer:
      "Absolutely. South Africans around the world can contribute valuable international experience, knowledge and professional networks that strengthen the long-term vision of KASI QUICKSHOP.",
  },
  {
    question: "Can companies or organisations participate?",
    answer:
      "Yes. We welcome interest from businesses, industry experts, academic institutions and strategic partners who share our vision of strengthening township retail and entrepreneurship.",
  },
  {
    question: "What happens after I submit my application?",
    answer:
      "Applications are reviewed carefully by the KASI QUICKSHOP team. Suitable candidates may be invited to interviews, working groups or future collaboration opportunities depending on the needs of the organisation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#050505] py-28">
      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}

        <div className="text-center">

          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.30em] text-yellow-400">
            Frequently Asked Questions
          </span>

          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-5xl">
            Questions You May Have
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            We understand that joining a founding team is a significant
            commitment. Here are answers to some of the most common questions.
          </p>

        </div>

        {/* FAQ */}

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {

            const expanded = open === index;

            return (

              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >

                <button
                  onClick={() =>
                    setOpen(expanded ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >

                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-6 w-6 text-yellow-400 transition-transform duration-300 ${
                      expanded ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    expanded
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-8 leading-8 text-zinc-400">
                      {faq.answer}
                    </p>
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