
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[980px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/investors-hero.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[980px] max-w-7xl items-center px-6 lg:px-12">
        <div className="max-w-[620px]">

          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-400 backdrop-blur-xl">
            Investment Opportunity
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-[0.92] tracking-tight md:text-7xl xl:text-[5.5rem]">
            <span className="text-white">INVEST IN</span>
            <br />
            <span className="text-yellow-400">SOUTH AFRICA'S</span>
            <br />
            <span className="text-white">RETAIL FUTURE.</span>
          </h1>

          <p className="mt-8 max-w-[560px] text-lg leading-9 text-zinc-300 md:text-xl">
            Invest in the infrastructure powering South Africa's first youth-owned
            retail ecosystem—connecting entrepreneurs, suppliers,
            manufacturers, logistics and technology into one national platform.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#application"
              className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300 hover:shadow-[0_15px_40px_rgba(250,204,21,0.25)]"
            >
              Become an Investor
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>

            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-black/30 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:border-yellow-400/50 hover:bg-white/5"
            >
              <Download className="mr-3 h-5 w-5 text-yellow-400" />
              Investment Prospectus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
