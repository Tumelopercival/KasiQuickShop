"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import {
  Store,
  Briefcase,
  Users,
  Truck,
  Newspaper,
  MessageCircle,
} from "lucide-react";

const contactTypes = [
  {
    id: "general",
    title: "General",
    icon: MessageCircle,
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur",
    icon: Store,
  },
  {
    id: "investor",
    title: "Investor",
    icon: Briefcase,
  },
  {
    id: "career",
    title: "Careers",
    icon: Users,
  },
  {
    id: "supplier",
    title: "Supplier",
    icon: Truck,
  },
  {
    id: "media",
    title: "Media",
    icon: Newspaper,
  },
];

export default function ContactForm() {
  const [selected, setSelected] = useState("general");

  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">
            CONTACT PORTAL
          </p>

          <h2 className="text-5xl font-extrabold text-white">
            How Can We Help You?
          </h2>

          <p className="text-zinc-300 text-xl mt-6 max-w-3xl mx-auto leading-9">
            Choose the option below and the contact form will
            automatically adapt to your enquiry.
          </p>

        </div>

        {/* Selection Cards */}

        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {contactTypes.map((type) => {

            const Icon = type.icon;

            return (

              <button
                key={type.id}
                type="button"
                onClick={() => setSelected(type.id)}
                className={`rounded-[32px] border p-8 text-left transition-all duration-300

                ${
                  selected === type.id
                    ? "bg-yellow-400 border-yellow-400 scale-105"
                    : "bg-black border-zinc-800 hover:border-yellow-400"
                }`}
              >

                <Icon
                  className={`w-10 h-10 mb-6

                  ${
                    selected === type.id
                      ? "text-black"
                      : "text-yellow-400"
                  }`}
                />

                <h3
                  className={`text-2xl font-bold

                  ${
                    selected === type.id
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  {type.title}
                </h3>

              </button>

            );

          })}

        </div>

        {/* Dynamic Form */}

        <div className="bg-black rounded-[40px] border border-zinc-800 p-10">

          <h3 className="text-4xl font-bold text-white mb-8">

            Dynamic Form Coming Next...

          </h3>

          <Button>

            Continue

          </Button>

        </div>

      </div>

    </section>
  );
}