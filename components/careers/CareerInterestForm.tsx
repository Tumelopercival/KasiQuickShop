
"use client";

import { useState } from "react";
import { Upload, Send, Lock } from "lucide-react";

const careerAreas = [
  "Retail Operations",
  "Warehouse & Distribution",
  "Logistics",
  "Supply Chain",
  "Manufacturing",
  "Engineering",
  "Construction",
  "Finance & Accounting",
  "Legal",
  "Human Resources",
  "Marketing",
  "Technology",
  "Software Development",
  "Cyber Security",
  "Data & Analytics",
  "Customer Service",
  "Training & Education",
  "Procurement",
  "Administration",
  "Executive Leadership",
  "Other",
];

const employmentTypes = [
  "Full Time",
  "Part Time",
  "Internship",
  "Graduate Programme",
  "Learnership",
  "Contract",
  "Other",
];

const qualifications = [
  "Grade 12",
  "Certificate",
  "Diploma",
  "Bachelor's Degree",
  "Honours Degree",
  "Master's Degree",
  "Doctorate",
  "Other",
];

const experience = [
  "No Experience",
  "0–2 Years",
  "3–5 Years",
  "6–10 Years",
  "10+ Years",
];

const provinces = [
  "Eastern Cape","Free State","Gauteng","KwaZulu-Natal","Limpopo",
  "Mpumalanga","North West","Northern Cape","Western Cape"
];

export default function CareerInterestForm() {
  const input =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 focus:border-yellow-400 outline-none";
  const select =
    "w-full rounded-2xl border border-white/10 bg-[#111111] px-5 py-4 text-white focus:border-yellow-400 outline-none";

  const [consent, setConsent] = useState(false);

  return (
    <section id="career-interest" className="bg-[#050505] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">

          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
              Career Interest Registration
            </p>

            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
              Tell Us About Yourself.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
              We're not recruiting for operational positions yet. Register your
              interest today and we'll contact you when opportunities become available.
            </p>
          </div>

          <form className="mt-12 space-y-10">

            <div>
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Personal Information
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <input className={input} placeholder="Full Name" />
                <input className={input} placeholder="Email Address" type="email"/>
                <input className={input} placeholder="Phone Number" />
                <select className={select}>
                  <option className="bg-[#111111]">Province</option>
                  {provinces.map(p=><option key={p} className="bg-[#111111]">{p}</option>)}
                </select>
                <input className={input+" md:col-span-2"} placeholder="City / Town" />
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Career Interest
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <select className={select}>
                  <option className="bg-[#111111]">Preferred Career</option>
                  {careerAreas.map(v=><option key={v} className="bg-[#111111]">{v}</option>)}
                </select>

                <select className={select}>
                  <option className="bg-[#111111]">Employment Type</option>
                  {employmentTypes.map(v=><option key={v} className="bg-[#111111]">{v}</option>)}
                </select>

                <select className={select}>
                  <option className="bg-[#111111]">Highest Qualification</option>
                  {qualifications.map(v=><option key={v} className="bg-[#111111]">{v}</option>)}
                </select>

                <select className={select}>
                  <option className="bg-[#111111]">Years Experience</option>
                  {experience.map(v=><option key={v} className="bg-[#111111]">{v}</option>)}
                </select>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Supporting Information
              </h3>

              <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/10 p-10 text-zinc-300 hover:border-yellow-400/40">
                <Upload className="mb-4 h-8 w-8 text-yellow-400"/>
                Upload CV (Optional)
                <input type="file" className="hidden"/>
              </label>

              <textarea
                rows={6}
                className={input+" mt-6"}
                placeholder="Why would you like to work with KASI QUICKSHOP in the future?"
              />
            </div>

            <label className="flex items-start gap-3 rounded-2xl border border-white/10 p-5">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e)=>setConsent(e.target.checked)}
                className="mt-1 h-5 w-5"
              />
              <span className="text-zinc-300">
                I understand this is <strong>not a job application</strong>.
                I am registering my interest for future career opportunities.
              </span>
            </label>

            <div className="flex flex-col items-center">
              <button
                type="submit"
                disabled={!consent}
                className="inline-flex items-center rounded-2xl bg-yellow-400 px-10 py-4 text-lg font-semibold text-black disabled:opacity-50"
              >
                Register Career Interest
                <Send className="ml-3 h-5 w-5"/>
              </button>

              <p className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
                <Lock className="h-4 w-4"/>
                Your information will remain confidential and will only be used
                to contact you about future opportunities.
              </p>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
