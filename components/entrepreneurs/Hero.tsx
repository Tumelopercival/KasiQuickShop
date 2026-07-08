import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[780px] lg:h-[820px]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/entrepreneurs-hero.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold mb-6">
            ENTREPRENEURS
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            <span className="text-yellow-400">
              Own A Business.
            </span>

            <br />

            <span className="text-white">
              Build A Legacy.
            </span>

          </h1>

          <p className="mt-8 text-xl text-zinc-300 leading-9 max-w-2xl">

            Become part of South Africa's first youth-owned retail ecosystem.
            Own a professionally branded Kasi QuickShop store backed by
            training, technology, logistics, marketing and a national support
            network designed to help you succeed.

          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            <Button>
              Apply Now
            </Button>

            <Link href="#journey">
              <Button variant="outline">
                How It Works
              </Button>
            </Link>

          </div>

          {/* Quick Stats */}

          <div className="grid grid-cols-3 gap-8 mt-16 border-t border-white/20 pt-8">

            <div>

              <h3 className="text-yellow-400 text-4xl font-bold">
                20,000
              </h3>

              <p className="text-zinc-300 mt-2">
                Target Stores
              </p>

            </div>

            <div>

              <h3 className="text-yellow-400 text-4xl font-bold">
                150k+
              </h3>

              <p className="text-zinc-300 mt-2">
                Potential Jobs
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