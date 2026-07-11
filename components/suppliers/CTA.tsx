import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Factory, Truck } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}

      <div className="absolute inset-0 bg-[#050505]" />

      {/* Gold Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.12),transparent_70%)]" />

      {/* Top Border */}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className="
            rounded-[36px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            overflow-hidden
          "
        >
          <div className="px-8 py-16 md:px-14 lg:px-20 lg:py-20 text-center">
            {/* Badge */}

            <div className="inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-3">
              <Factory className="w-5 h-5 text-yellow-400" />

              <span className="uppercase tracking-[0.25em] text-xs font-semibold text-yellow-400">
                Strategic Supplier Partnerships
              </span>
            </div>

            {/* Heading */}

            <h2 className="mt-8 text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="text-white">
                Help Power
              </span>

              <br />

              <span className="text-yellow-400">
                South Africa's Future Retail Ecosystem
              </span>
            </h2>

            {/* Description */}

            <p className="mt-8 max-w-3xl mx-auto text-xl leading-9 text-zinc-300">
              We're building a national ecosystem that connects manufacturers,
              suppliers, logistics partners and entrepreneurs through one
              integrated retail network. Join us in creating sustainable growth,
              expanding market access and delivering lasting value to
              communities across South Africa.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button>
                Become a Supplier

                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Link href="/contact">
                <Button variant="outline">
                  Contact Procurement Team
                </Button>
              </Link>
            </div>

            {/* Bottom Metrics */}

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <h3 className="text-3xl font-bold text-yellow-400">
                  National
                </h3>

                <p className="mt-3 text-zinc-400">
                  Retail Expansion Vision
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <Truck className="mx-auto w-8 h-8 text-yellow-400 mb-4" />

                <p className="text-lg font-semibold text-white">
                  Integrated Logistics
                </p>

                <p className="mt-2 text-zinc-400">
                  Connecting suppliers with communities.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <h3 className="text-3xl font-bold text-yellow-400">
                  Long-Term
                </h3>

                <p className="mt-3 text-zinc-400">
                  Strategic Partnerships
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}