import Link from "next/link";
import { ArrowRight, Flag, Users, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-32">

      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div
          className="
            overflow-hidden
            rounded-[36px]
            border
            border-yellow-400/20
            bg-gradient-to-br
            from-white/5
            via-white/[0.03]
            to-yellow-400/5
            p-10
            backdrop-blur-xl
            md:p-16
          "
        >

          {/* Badge */}

          <div className="flex justify-center">

            <span className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.30em] text-yellow-400">
              The Journey Starts Here
            </span>

          </div>

          {/* Heading */}

          <h2 className="mx-auto mt-8 max-w-4xl text-center text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">

            South Africa Wasn't Built
            <br />

            <span className="text-yellow-400">
              By Spectators.
            </span>

          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-9 text-zinc-300">

            It has always been shaped by people willing to step forward,
            solve problems and build for future generations.

            <br />
            <br />

            If you believe your experience, leadership and expertise can
            help create South Africa's first youth-owned retail ecosystem,
            we invite you to become part of the founding team.

          </p>

          {/* Icons */}

          <div className="mt-14 flex flex-wrap justify-center gap-8">

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">

              <Flag className="h-6 w-6 text-yellow-400" />

              <span className="font-medium text-white">
                Proudly South African
              </span>

            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">

              <Users className="h-6 w-6 text-yellow-400" />

              <span className="font-medium text-white">
                Built by Professionals
              </span>

            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">

              <Sparkles className="h-6 w-6 text-yellow-400" />

              <span className="font-medium text-white">
                Focused on Long-Term Impact
              </span>

            </div>

          </div>

          {/* CTA */}

          <div className="mt-16 flex justify-center">

            <Link
              href="#application"
              className="
                group
                inline-flex
                items-center
                rounded-2xl
                bg-yellow-400
                px-10
                py-5
                text-lg
                font-bold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_20px_60px_rgba(250,204,21,0.35)]
              "
            >
              Become a Founding Member

              <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}