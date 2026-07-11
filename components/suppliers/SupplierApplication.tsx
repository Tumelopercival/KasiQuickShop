"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import {
  Building2,
  User,
  Mail,
  Phone,
  Package,
  FileText,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const categories = [
  "Food & Beverages",
  "Fresh Produce",
  "Household Products",
  "Cleaning Products",
  "Personal Care",
  "Frozen Foods",
  "Bakery",
  "Dairy",
  "Technology",
  "Packaging",
  "Hardware",
  "Office Supplies",
  "Building Materials",
  "Professional Services",
  "Logistics",
  "Equipment",
];

const steps = [
  "Company",
  "Contact",
  "Supply",
  "Review",
];

export default function SupplierApplication() {
  const [step, setStep] = useState(0);

  const next = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const previous = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <section
      id="supplier-application"
      className="py-28 bg-[#050505]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-5">
            Supplier Application
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Begin Your Partnership Journey
          </h2>

          <p className="mt-8 text-xl text-zinc-400 leading-9">
            Complete the information below and our procurement team will
            review your application.
          </p>

        </div>

        {/* Progress */}

        <div className="mt-20 grid grid-cols-4 gap-4">

          {steps.map((item, index) => (
            <div key={item}>

              <div
                className={`h-2 rounded-full ${
                  index <= step
                    ? "bg-yellow-400"
                    : "bg-zinc-800"
                }`}
              />

              <p
                className={`mt-3 text-center text-sm ${
                  index <= step
                    ? "text-yellow-400"
                    : "text-zinc-500"
                }`}
              >
                {item}
              </p>

            </div>
          ))}

        </div>

        {/* Form */}

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">

          {/* Step 1 */}

          {step === 0 && (

            <div className="space-y-6">

              <div>

                <label className="text-white mb-2 block">
                  Company Name
                </label>

                <div className="relative">

                  <Building2 className="absolute left-4 top-4 w-5 h-5 text-zinc-500"/>

                  <input
                    className="w-full rounded-xl bg-black/30 border border-white/10 pl-12 pr-4 py-4 text-white focus:border-yellow-400 outline-none"
                  />

                </div>

              </div>

              <div>

                <label className="text-white mb-2 block">
                  Registration Number
                </label>

                <input
                  className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-4 text-white focus:border-yellow-400 outline-none"
                />

              </div>

            </div>

          )}

          {/* Step 2 */}

          {step === 1 && (

            <div className="space-y-6">

              <div>

                <label className="text-white mb-2 block">
                  Contact Person
                </label>

                <div className="relative">

                  <User className="absolute left-4 top-4 w-5 h-5 text-zinc-500"/>

                  <input className="w-full rounded-xl bg-black/30 border border-white/10 pl-12 py-4 text-white focus:border-yellow-400 outline-none"/>

                </div>

              </div>

              <div>

                <label className="text-white mb-2 block">
                  Email
                </label>

                <div className="relative">

                  <Mail className="absolute left-4 top-4 w-5 h-5 text-zinc-500"/>

                  <input className="w-full rounded-xl bg-black/30 border border-white/10 pl-12 py-4 text-white focus:border-yellow-400 outline-none"/>

                </div>

              </div>

              <div>

                <label className="text-white mb-2 block">
                  Phone
                </label>

                <div className="relative">

                  <Phone className="absolute left-4 top-4 w-5 h-5 text-zinc-500"/>

                  <input className="w-full rounded-xl bg-black/30 border border-white/10 pl-12 py-4 text-white focus:border-yellow-400 outline-none"/>

                </div>

              </div>

            </div>

          )}

          {/* Step 3 */}

          {step === 2 && (

            <div className="space-y-6">

              <div>

                <label className="text-white mb-2 block">
                  Supply Category
                </label>

                <div className="relative">

                  <Package className="absolute left-4 top-4 w-5 h-5 text-zinc-500"/>

                  <select
                    className="w-full rounded-xl bg-black/30 border border-white/10 pl-12 py-4 text-white outline-none focus:border-yellow-400"
                  >
                    {categories.map((item) => (
                      <option
                        key={item}
                      >
                        {item}
                      </option>
                    ))}
                  </select>

                </div>

              </div>

              <div>

                <label className="text-white mb-2 block">
                  Products / Services
                </label>

                <textarea
                  rows={5}
                  className="w-full rounded-xl bg-black/30 border border-white/10 p-4 text-white focus:border-yellow-400 outline-none"
                />

              </div>

            </div>

          )}

          {/* Step 4 */}

          {step === 3 && (

            <div className="text-center py-10">

              <CheckCircle2 className="w-16 h-16 text-yellow-400 mx-auto"/>

              <h3 className="mt-6 text-3xl font-bold text-white">
                Ready to Submit
              </h3>

              <p className="mt-5 text-zinc-400 leading-8 max-w-2xl mx-auto">
                Please review your information before submitting your
                supplier application. Our procurement team will contact
                qualified applicants regarding the next stage of the
                onboarding process.
              </p>

            </div>

          )}

          {/* Buttons */}

          <div className="flex justify-between mt-12">

            <Button
              variant="outline"
              onClick={previous}
              disabled={step === 0}
            >
              <ChevronLeft className="mr-2 w-5 h-5"/>

              Previous
            </Button>

            {step < 3 ? (

              <Button onClick={next}>

                Next

                <ChevronRight className="ml-2 w-5 h-5"/>

              </Button>

            ) : (

              <Button>

                Submit Application

              </Button>

            )}

          </div>

        </div>

      </div>
    </section>
  );
}