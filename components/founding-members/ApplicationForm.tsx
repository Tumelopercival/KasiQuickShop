"use client";

import { useState } from "react";
import {
  User,
  Briefcase,
  FileText,
  Upload,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Personal Information",
    icon: User,
  },
  {
    number: 2,
    title: "Professional Background",
    icon: Briefcase,
  },
  {
    number: 3,
    title: "Your Contribution",
    icon: FileText,
  },
  {
    number: 4,
    title: "Documents",
    icon: Upload,
  },
  {
    number: 5,
    title: "Review",
    icon: CheckCircle2,
  },
];

export default function ApplicationForm() {
  const [currentStep] = useState(1);

  return (
    <section
      id="application"
      className="bg-[#050505] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.30em] text-yellow-400">
            Founding Member Application
          </span>

          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-5xl">
            Start Your Application
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Complete the application in five simple steps.
            You can review all information before submitting.
          </p>

        </div>

        {/* Progress */}

        <div className="mt-20">

          <div className="grid gap-6 md:grid-cols-5">

            {steps.map((step) => {

              const Icon = step.icon;

              const active = step.number === currentStep;

              return (

                <div
                  key={step.number}
                  className={`
                    rounded-2xl
                    border
                    p-5
                    transition-all
                    ${
                      active
                        ? "border-yellow-400 bg-yellow-400/10"
                        : "border-white/10 bg-white/5"
                    }
                  `}
                >

                  <div
                    className={`
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      ${
                        active
                          ? "bg-yellow-400 text-black"
                          : "bg-zinc-900 text-yellow-400"
                      }
                    `}
                  >

                    <Icon className="h-6 w-6" />

                  </div>

                  <p className="mt-5 text-sm uppercase tracking-[0.25em] text-zinc-500">
                    Step {step.number}
                  </p>

                  <h3 className="mt-2 font-semibold text-white">
                    {step.title}
                  </h3>

                </div>

              );

            })}

          </div>

        </div>

        {/* Form Card */}

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

          <h3 className="text-2xl font-bold text-white">
            Personal Information
          </h3>

          <p className="mt-3 text-zinc-400">
            Tell us a little about yourself.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-3 block text-sm font-medium text-zinc-300">
                First Name
              </label>

              <input
                type="text"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/40
                  px-5
                  py-4
                  text-white
                  outline-none
                  transition
                  focus:border-yellow-400
                "
              />

            </div>

            <div>

              <label className="mb-3 block text-sm font-medium text-zinc-300">
                Surname
              </label>

              <input
                type="text"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/40
                  px-5
                  py-4
                  text-white
                  outline-none
                  transition
                  focus:border-yellow-400
                "
              />

            </div>

            <div>

              <label className="mb-3 block text-sm font-medium text-zinc-300">
                Email Address
              </label>

              <input
                type="email"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/40
                  px-5
                  py-4
                  text-white
                  outline-none
                  transition
                  focus:border-yellow-400
                "
              />

            </div>

            <div>

              <label className="mb-3 block text-sm font-medium text-zinc-300">
                Phone Number
              </label>

              <input
                type="tel"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/40
                  px-5
                  py-4
                  text-white
                  outline-none
                  transition
                  focus:border-yellow-400
                "
              />

            </div>

            <div>

              <label className="mb-3 block text-sm font-medium text-zinc-300">
                Province
              </label>

              <select
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/40
                  px-5
                  py-4
                  text-white
                  outline-none
                  focus:border-yellow-400
                "
              >
                <option>Choose Province</option>
                <option>Eastern Cape</option>
                <option>Free State</option>
                <option>Gauteng</option>
                <option>KwaZulu-Natal</option>
                <option>Limpopo</option>
                <option>Mpumalanga</option>
                <option>North West</option>
                <option>Northern Cape</option>
                <option>Western Cape</option>
              </select>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex justify-end">

            <button
              className="
                rounded-2xl
                bg-yellow-400
                px-8
                py-4
                font-semibold
                text-black
                transition
                hover:scale-105
              "
            >
              Continue →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}