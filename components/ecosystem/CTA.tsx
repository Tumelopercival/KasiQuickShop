import Button from "@/components/ui/Button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-28">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.12),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center">

        <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold mb-6">

          JOIN THE ECOSYSTEM

        </p>

        <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">

          Together,

          <br />

          <span className="text-yellow-400">

            We Build More

          </span>

          <br />

          Than Businesses.

        </h2>

        <p className="max-w-3xl mx-auto text-xl text-zinc-300 leading-9 mt-10">

          Kasi QuickShop is creating an ecosystem where entrepreneurs,
          investors, suppliers, employees and communities grow together.

          <br /><br />

          Every store opened, every entrepreneur supported and every
          partnership formed contributes to a stronger South Africa.

        </p>

        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-5">

          <Link href="/entrepreneurs">

            <Button>

              Become An Entrepreneur

            </Button>

          </Link>

          <Link href="/investors">

            <Button variant="outline">

              Invest In The Vision

            </Button>

          </Link>

        </div>

        {/* Bottom Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

          <div>

            <h3 className="text-yellow-400 text-5xl font-extrabold">

              20K+

            </h3>

            <p className="text-zinc-400 mt-3">

              Target Stores

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

              9

            </h3>

            <p className="text-zinc-400 mt-3">

              Provinces

            </p>

          </div>

          <div>

            <h3 className="text-yellow-400 text-5xl font-extrabold">

              One

            </h3>

            <p className="text-zinc-400 mt-3">

              Shared Vision

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}