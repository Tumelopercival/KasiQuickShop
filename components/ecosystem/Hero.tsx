import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[780px] lg:h-[850px]">

      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/ecosystem-hero.png')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold mb-6">

            THE KASI QUICKSHOP ECOSYSTEM

          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            <span className="text-white">

              One Vision.

            </span>

            <br />

            <span className="text-yellow-400">

              One Ecosystem.

            </span>

            <br />

            <span className="text-white">

              Built For South Africa.

            </span>

          </h1>

          <p className="mt-8 text-xl text-zinc-300 leading-9 max-w-2xl">

            Kasi QuickShop connects technology, wholesale,
            logistics, infrastructure, entrepreneur development
            and modern retail into one integrated national
            ecosystem designed to create businesses, jobs and
            long-term economic growth.

          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            <Button>

              Explore The Ecosystem

            </Button>

            <Link href="/entrepreneurs">

              <Button variant="outline">

                Become Part Of It

              </Button>

            </Link>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-white/20 pt-8">

            <div>

              <h3 className="text-yellow-400 text-4xl font-bold">

                6

              </h3>

              <p className="text-zinc-300 mt-2">

                Business Pillars

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

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />

    </section>
  );
}