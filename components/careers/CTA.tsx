import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-32">
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-yellow-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-12">

        {/* Label */}

        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Your Journey Starts Here
        </p>

        {/* Heading */}

        <h2 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
          Today's Interest.
          <br />
          Tomorrow's Opportunity.
        </h2>

        {/* Description */}

        <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-zinc-400 md:text-xl">
          Every great journey begins with a single step.
          Register your interest today and become part of the growing
          community helping shape South Africa's first youth-owned retail
          ecosystem.
        </p>

        {/* CTA */}

        <div className="mt-14">
          <Link
            href="#career-interest"
            className="
              group
              inline-flex
              items-center
              justify-center
              rounded-2xl
              bg-yellow-400
              px-10
              py-5
              text-lg
              font-semibold
              text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-yellow-300
              hover:shadow-[0_20px_50px_rgba(250,204,21,0.28)]
            "
          >
            Register Career Interest

            <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}