import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[980px] lg:h-[1020px]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/founding-members-hero.png')",
          backgroundPosition: "center center",
        }}
      />

      {/* Overall Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/70 to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-12">
        <div className="max-w-[680px]">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-2 backdrop-blur-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-400">
              Founding Member Opportunity
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              mt-8
              text-5xl
              font-extrabold
              leading-[0.92]
              tracking-tight
              text-white
              md:text-6xl
              xl:text-[5.5rem]
            "
          >
            Help Build
            <br />
            South Africa's
            <br />
            <span className="text-yellow-400">Retail Future.</span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-8
              max-w-[600px]
              text-lg
              leading-9
              text-zinc-300
              md:text-xl
            "
          >
            Join a select group of visionary leaders building South Africa's
            first youth-owned retail ecosystem. This is more than membership.
            <span className="text-yellow-400">
              {" "}
              It's nation building.
            </span>
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
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
                hover:-translate-y-1
                hover:bg-yellow-300
                hover:shadow-[0_18px_45px_rgba(250,204,21,0.28)]
              "
            >
              Apply to Become a Founder

              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/Founding-Member-Prospectus.pdf"
              target="_blank"
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
              <Download className="mr-3 h-5 w-5 text-yellow-400" />

              Download Prospectus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}