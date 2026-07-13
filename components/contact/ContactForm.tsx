"use client";

import { Send, Lock } from "lucide-react";

const subjects = [
  "General Enquiry",
  "Investment",
  "Supplier Partnership",
  "Entrepreneur Opportunity",
  "Founding Member",
  "Careers",
  "Media",
  "Other",
];

export default function ContactForm() {
  const input =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-yellow-400";

  const select =
    "w-full rounded-2xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400";

  return (
    <section
      id="contact-form"
      className="bg-[#050505] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">

          {/* Heading */}

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
              Contact Us
            </p>

            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
              Let's Start The Conversation.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
              Tell us how we can help. Whether you're interested in
              investment, partnerships, entrepreneurship, careers or
              general enquiries, our team will get back to you.
            </p>

          </div>

          {/* Form */}

          <form className="mt-12 grid gap-6 md:grid-cols-2">

            <input
              className={input}
              placeholder="Full Name"
            />

            <input
              className={input}
              placeholder="Company (Optional)"
            />

            <input
              type="email"
              className={input}
              placeholder="Email Address"
            />

            <input
              className={input}
              placeholder="Phone Number"
            />

            <div className="md:col-span-2">

              <select className={select}>
                <option className="bg-[#111111]">
                  Select Subject
                </option>

                {subjects.map((subject) => (
                  <option
                    key={subject}
                    className="bg-[#111111]"
                  >
                    {subject}
                  </option>
                ))}

              </select>

            </div>

            <div className="md:col-span-2">

              <textarea
                rows={8}
                className={input}
                placeholder="Tell us how we can help..."
              />

            </div>

            <div className="md:col-span-2 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <p className="flex items-center gap-2 text-sm text-zinc-500">

                <Lock className="h-4 w-4" />

                Your information is kept confidential and used only to
                respond to your enquiry.

              </p>

              <button
                type="submit"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-yellow-400
                  px-8
                  py-4
                  text-lg
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-yellow-300
                "
              >
                Send Message

                <Send className="ml-3 h-5 w-5" />

              </button>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}