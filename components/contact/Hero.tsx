import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[780px] lg:h-[850px]">

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/contact-hero.png')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold mb-6">

            CONTACT US

          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            <span className="text-white">

              Let's Build

            </span>

            <br />

            <span className="text-yellow-400">

              Something Great

            </span>

            <br />

            <span className="text-white">

              Together.

            </span>

          </h1>

          <p className="mt-8 text-xl text-zinc-300 leading-9 max-w-2xl">

            Whether you're an entrepreneur, investor, supplier,
            potential employee or simply want to learn more about
            Kasi QuickShop, we'd love to hear from you.
            Our team is ready to help you become part of South
            Africa's first youth-owned retail ecosystem.

          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            <Button>

              Contact Us

            </Button>

            <Link href="/about">

              <Button variant="outline">

                Learn More

              </Button>

            </Link>

          </div>

          {/* Bottom Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-white/20 pt-8">

            <div>

              <h3 className="text-yellow-400 text-4xl font-bold">

                6

              </h3>

              <p className="text-zinc-300 mt-2">

                Contact Channels

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

            <div>

              <h3 className="text-yellow-400 text-4xl font-bold">

                20K

              </h3>

              <p className="text-zinc-300 mt-2">

                Future Stores

              </p>

            </div>

            <div>

              <h3 className="text-yellow-400 text-4xl font-bold">

                One

              </h3>

              <p className="text-zinc-300 mt-2">

                Shared Vision

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