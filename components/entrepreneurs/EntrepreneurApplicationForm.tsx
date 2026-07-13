"use client";

import { Upload, Send, Lock } from "lucide-react";

const entrepreneurTypes = [
  "First-Time Entrepreneur",
  "Existing Spaza Shop Owner",
  "Retail Business Owner",
  "Small Business Owner",
  "Franchise Owner",
  "Investor-Operator",
  "Other",
];

const provinces = [
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "North West",
  "Northern Cape",
  "Western Cape",
];

const experience = [
  "No Experience",
  "1–2 Years",
  "3–5 Years",
  "6–10 Years",
  "10+ Years",
];

const readiness = [
  "Ready Now",
  "Within 3 Months",
  "Within 6 Months",
  "Within 12 Months",
  "Exploring Opportunities",
];

export default function EntrepreneurApplicationForm() {
  const input =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-yellow-400";

  const select =
    "w-full rounded-2xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-yellow-400";

  return (
    <section
      id="entrepreneur-application"
      className="bg-[#050505] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">

          {/* Heading */}

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
              Entrepreneur Application
            </p>

            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
              Start Your Journey.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
              Complete the application below and register your interest in
              becoming a KASI QUICKSHOP entrepreneur. We're looking for
              ambitious South Africans who want to build businesses that
              transform communities.
            </p>

          </div>

          {/* Form */}

          <form className="mt-12 grid gap-8 xl:grid-cols-4">

            {/* Personal Information */}

            <div className="space-y-4">

              <h3 className="text-xl font-semibold text-white">
                Personal Information
              </h3>

              <input className={input} placeholder="Full Name" />

              <input className={input} placeholder="Email Address" />

              <input className={input} placeholder="Phone Number" />

              <select className={select}>
                <option className="bg-[#111111]">
                  Province
                </option>

                {provinces.map((province) => (
                  <option
                    key={province}
                    className="bg-[#111111]"
                  >
                    {province}
                  </option>
                ))}
              </select>

              <input
                className={input}
                placeholder="City / Township"
              />

            </div>

            {/* Entrepreneur Profile */}

            <div className="space-y-4">

              <h3 className="text-xl font-semibold text-white">
                Entrepreneur Profile
              </h3>

              <select className={select}>
                <option className="bg-[#111111]">
                  Entrepreneur Type
                </option>

                {entrepreneurTypes.map((type) => (
                  <option
                    key={type}
                    className="bg-[#111111]"
                  >
                    {type}
                  </option>
                ))}
              </select>

              <select className={select}>
                <option className="bg-[#111111]">
                  Business Experience
                </option>

                {experience.map((item) => (
                  <option
                    key={item}
                    className="bg-[#111111]"
                  >
                    {item}
                  </option>
                ))}
              </select>

              <select className={select}>
                <option className="bg-[#111111]">
                  Investment Readiness
                </option>

                {readiness.map((item) => (
                  <option
                    key={item}
                    className="bg-[#111111]"
                  >
                    {item}
                  </option>
                ))}
              </select>

              <select className={select}>
                <option className="bg-[#111111]">
                  Preferred Province
                </option>

                {provinces.map((province) => (
                  <option
                    key={province}
                    className="bg-[#111111]"
                  >
                    {province}
                  </option>
                ))}
              </select>

              <input
                className={input}
                placeholder="Preferred Township / City"
              />

            </div>

            {/* Upload Documents */}

            <div className="space-y-4">

              <h3 className="text-xl font-semibold text-white">
                Supporting Documents
              </h3>

              <label className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/10 transition-all duration-300 hover:border-yellow-400/40">

                <Upload className="mb-3 h-8 w-8 text-yellow-400" />

                <span className="text-white">
                  Upload CV (Optional)
                </span>

                <span className="text-sm text-zinc-500">
                  PDF, DOC or DOCX
                </span>

                <input
                  type="file"
                  className="hidden"
                />

              </label>

              <label className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/10 transition-all duration-300 hover:border-yellow-400/40">

                <Upload className="mb-3 h-8 w-8 text-yellow-400" />

                <span className="text-white">
                  Business Plan (Optional)
                </span>

                <span className="text-sm text-zinc-500">
                  PDF, DOC or DOCX
                </span>

                <input
                  type="file"
                  className="hidden"
                />

              </label>

            </div>

            {/* About You */}

            <div className="space-y-4">

              <h3 className="text-xl font-semibold text-white">
                About You
              </h3>

              <textarea
                rows={12}
                className={input}
                placeholder="Tell us why you'd like to become a KASI QUICKSHOP entrepreneur, your business goals and the impact you'd like to create in your community."
              />

              <p className="flex items-center gap-2 text-sm text-zinc-500">

                <Lock className="h-4 w-4" />

                Your information will remain confidential and used only for
                evaluating entrepreneur opportunities.

              </p>

              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:bg-yellow-300"
              >
                Submit Entrepreneur Application

                <Send className="ml-3 h-5 w-5" />

              </button>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}