import Button from "@/components/ui/Button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-28">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.12),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center">

        <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold mb-6">
          INVEST WITH PURPOSE
        </p>

        <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">

          Help Build

          <br />

          <span className="text-yellow-400">
            South Africa's Future.
          </span>

        </h2>

        <p className="max-w-3xl mx-auto text-xl text-zinc-300 leading-9 mt-10">

          Kasi QuickShop is building South Africa's first youth-owned
          national retail ecosystem by connecting entrepreneurs,
          logistics, technology, wholesale and infrastructure into one
          scalable business platform.

          <br /><br />

          We invite visionary investors to join us in creating
          businesses, employment and long-term economic growth.

        </p>

        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-5">

          <Button>

            Become An Investor

          </Button>

          <Link href="/contact">

            <Button variant="outline">

              Contact Our Team

            </Button>

          </Link>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

          <div>

            <h3 className="text-yellow-400 text-5xl font-extrabold">
              20K
            </h3>

            <p className="text-zinc-400 mt-3">
              Target Stores
            </p>

          </div>

          <div>

            <h3 className="text-yellow-400 text-5xl font-extrabold">
              9
            </h3>

            <p className="text-zinc-400 mt-3">
              Provinces
            </p>

          </div>

          <div>

            <h3 className="text-yellow-400 text-5xl font-extrabold">
              150K+
            </h3>

            <p className="text-zinc-400 mt-3">
              Potential Jobs
            </p>

          </div>

          <div>

            <h3 className="text-yellow-400 text-5xl font-extrabold">
              Africa
            </h3>

            <p className="text-zinc-400 mt-3">
              Long-Term Vision
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}