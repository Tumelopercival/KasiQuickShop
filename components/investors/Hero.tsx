import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[780px] lg:h-[850px]">

      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/investors-hero.png')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold mb-6">

            INVESTORS

          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            <span className="text-white">
              Invest In
            </span>

            <br />

            <span className="text-yellow-400">
              South Africa's
            </span>

            <br />

            <span className="text-white">
              Retail Future.
            </span>

          </h1>

          <p className="mt-8 text-xl text-zinc-300 leading-9 max-w-2xl">

            Kasi QuickShop is building South Africa's first
            youth-owned retail ecosystem by combining
            technology, logistics, wholesale, infrastructure
            and entrepreneurship into one scalable national model.

          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            <Button>

              Become An Investor

            </Button>

            <Link href="#opportunity">

              <Button variant="outline">

                View Opportunity

              </Button>

            </Link>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-white/20 pt-8">

            <div>

              <h3 className="text-yellow-400 text-4xl font-bold">

                R180B+

              </h3>

              <p className="text-zinc-300 mt-2">

                Market

              </p>

            </div>

            <div>

              <h3 className="text-yellow-400 text-4xl font-bold">

                20K

              </h3>

              <p className="text-zinc-300 mt-2">

                Target Stores

              </p>

            </div>

            <div>

              <h3 className="text-yellow-400 text-4xl font-bold">

                150K+

              </h3>

              <p className="text-zinc-300 mt-2">

                Jobs

              </p>

            </div>

            <div>

              <h3 className="text-yellow-400 text-4xl font-bold">

                9

              </h3>

              <p className="text-zinc-300 mt-2">

                Provinces

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}