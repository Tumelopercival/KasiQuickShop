import Link from "next/link";
import { ArrowRight, Play, Flag, Users, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Flag,
    title: "Proudly South African",
  },
  {
    icon: Users,
    title: "Cross-Disciplinary Founding Team",
  },
  {
    icon: Rocket,
    title: "Building for Long-Term Impact",
  },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden h-[900px]"
      id="hero"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/founding-members-hero.jpg')",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1700px] items-center px-6 lg:px-12">
        <div className="max-w-3xl">

          {/* Badge */}

          <div className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 backdrop-blur-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-400">
              Building South Africa Together
            </span>
          </div>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-extrabold leading-[0.95] tracking-tight text-white md:text-6xl xl:text-[5.5rem]">
            BECOME A
            <br />
            <span className="text-yellow-400">
              FOUNDING
            </span>
            <br />
            MEMBER
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
            Help build South Africa's first youth-owned retail ecosystem.
            Join a community of professionals, entrepreneurs, engineers and
            innovators working together to reshape township commerce for
            generations to come.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              href="#application"
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
                hover:scale-[1.03]
                hover:shadow-[0_15px_40px_rgba(250,204,21,0.35)]
              "
            >
              Become a Founding Member

              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#why"
              className="
                group
                inline-flex
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                px-8
                py-4
                text-base
                font-semibold
                text-white
                transition-all
                duration-300
                hover:border-yellow-400
                hover:bg-white/10
              "
            >
              <Play className="mr-3 h-5 w-5 text-yellow-400" />
              Learn More
            </Link>

          </div>

          {/* Highlights */}

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">

            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/35
                    px-5
                    py-5
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-yellow-400/40
                    hover:bg-black/50
                  "
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/30 bg-yellow-400/10">
                    <Icon className="h-6 w-6 text-yellow-400" />
                  </div>

                  <p className="text-sm font-medium leading-6 text-white">
                    {item.title}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}