
"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const investorTypes = [
  "Angel Investor",
  "Venture Capital",
  "Private Equity",
  "Institution",
  "Corporate",
  "Government",
  "Family Office",
  "Other",
];

const investmentRanges = [
  "Below R500 000",
  "R500 000 – R2 Million",
  "R2 Million – R10 Million",
  "R10 Million – R50 Million",
  "Above R50 Million",
];

export default function InvestmentForm() {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    investorType: "",
    investmentRange: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 outline-none transition focus:border-yellow-400";

  const selectClass =
    "w-full rounded-2xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-yellow-400";

  return (
    <section id="application" className="bg-[#050505] py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
              Investment Interest
            </p>

            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
              Start the Conversation
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              Tell us about your investment interest and our team will contact you.
            </p>
          </div>

          <form className="mt-12 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" className={inputClass} />
              <input name="company" value={form.company} onChange={handleChange} placeholder="Company / Organisation" className={inputClass} />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" className={inputClass} />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className={inputClass} />
              <input name="country" value={form.country} onChange={handleChange} placeholder="Country" className={inputClass} />

              <select name="investorType" value={form.investorType} onChange={handleChange} className={selectClass}>
                <option value="" className="bg-[#111111] text-white">Investor Type</option>
                {investorTypes.map((t)=>(
                  <option key={t} value={t} className="bg-[#111111] text-white">{t}</option>
                ))}
              </select>

              <div className="md:col-span-2">
                <select name="investmentRange" value={form.investmentRange} onChange={handleChange} className={selectClass}>
                  <option value="" className="bg-[#111111] text-white">Investment Range</option>
                  {investmentRanges.map((r)=>(
                    <option key={r} value={r} className="bg-[#111111] text-white">{r}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <textarea
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your investment interest..."
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center rounded-2xl bg-yellow-400 px-10 py-4 text-lg font-semibold text-black transition hover:bg-yellow-300 hover:shadow-[0_18px_45px_rgba(250,204,21,0.25)]"
              >
                Submit Interest
                <Send className="ml-3 h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
