
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Investment Opportunity
        </p>

        <h2 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
          Capital Builds
          <br />
          Companies.
        </h2>

        <h3 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-yellow-400 md:text-5xl xl:text-6xl">
          Vision Builds Nations.
        </h3>

        <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-zinc-400 md:text-xl">
          Join us in building South Africa's first youth-owned retail ecosystem.
          Together we can create long-term economic value while empowering
          entrepreneurs, strengthening communities and transforming retail at a
          national scale.
        </p>

        <div className="mt-14">
          <Link
            href="#application"
            className="group inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-10 py-5 text-lg font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-[0_20px_50px_rgba(250,204,21,0.28)]"
          >
            Start the Conversation
            <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
