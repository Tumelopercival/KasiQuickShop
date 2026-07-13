import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-32">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-400/5 blur-3xl" />
      </div>

      {/* Content */}

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-12">

        {/* Label */}

        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          LET'S BUILD TOGETHER
        </p>

        {/* Heading */}

        <h2
          className="
            mt-8
            text-5xl
            md:text-6xl
            xl:text-7xl
            font-extrabold
            leading-tight
            tracking-tight
            text-white
          "
        >
          Every Great
          <br />
          Partnership
          <br />
          <span className="text-yellow-400">
            Starts With
            <br />
            A Conversation.
          </span>
        </h2>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-10
            max-w-3xl
            text-lg
            md:text-xl
            leading-9
            text-zinc-400
          "
        >
          Whether you're looking to invest, become an entrepreneur,
          supply our growing network, join our founding team or simply
          learn more about our vision, we'd love to hear from you.
          Together we're building South Africa's first youth-owned
          retail ecosystem.
        </p>

        {/* CTA Buttons */}

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="#contact-form"
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
            Get In Touch

            <ArrowRight
              className="
                ml-3
                h-5
                w-5
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          <Link
            href="/founding-members"
            className="
              inline-flex
              items-center
              justify-center
              rounded-2xl
              border
              border-white/15
              bg-white/5
              px-10
              py-5
              text-lg
              font-semibold
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-yellow-400/40
              hover:bg-white/10
            "
          >
            Become a Founding Member
          </Link>

        </div>

      </div>

    </section>
  );
}