import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[980px] lg:h-[1020px]">

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/contact-hero.png')",
          backgroundPosition: "center center",
        }}
      />

      {/* Overlays */}

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/80 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-12">

        <div className="max-w-[660px]">

          {/* Badge */}

          <div className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 backdrop-blur-xl">

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
              Get In Touch
            </span>

          </div>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-extrabold leading-[0.92] tracking-tight md:text-6xl xl:text-[5.4rem]">

            <span className="text-white">
              LET'S BUILD
            </span>

            <br />

            <span className="text-white">
              SOMETHING
            </span>

            <br />

            <span className="text-yellow-400">
              EXTRAORDINARY.
            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-[600px] text-lg leading-9 text-zinc-300 md:text-xl">
            Whether you're an entrepreneur, investor, supplier,
            future team member or strategic partner, we'd love to hear
            from you. Let's build South Africa's first youth-owned
            retail ecosystem together.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">

            <Link
              href="#contact-form"
              className="
                group
                inline-flex
                items-center
                justify-center
                rounded-2xl
                bg-yellow-400
                px-8
                py-4
                text-base
                font-semibold
                text-black
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-yellow-300
                hover:shadow-[0_15px_40px_rgba(250,204,21,0.25)]
              "
            >
              Contact Us

              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

            </Link>

            <Link
              href="/founding-members"
              className="
                group
                inline-flex
                items-center
                justify-center
                rounded-2xl
                border
                border-white/15
                bg-black/30
                px-8
                py-4
                text-base
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-yellow-400/50
                hover:bg-white/5
              "
            >

              <MessageSquare className="mr-3 h-5 w-5 text-yellow-400" />

              Explore Opportunities

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}