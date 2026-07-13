import Link from "next/link";
import { ArrowRight, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-[980px] lg:h-[1020px]">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:"url('/suppliers-hero.png')",backgroundPosition:"center center"}} />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-12">
        <div className="max-w-[650px]">
          <div className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 backdrop-blur-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-400">
              Strategic Supplier Partnerships
            </span>
          </div>

          <h1 className="mt-8 text-5xl md:text-6xl xl:text-[5.4rem] font-extrabold leading-[0.92] tracking-tight">
            <span className="text-white">POWER</span><br/>
            <span className="text-white">SOUTH AFRICA'S</span><br/>
            <span className="text-yellow-400">RETAIL FUTURE.</span>
          </h1>

          <p className="mt-8 max-w-[580px] text-lg md:text-xl leading-9 text-zinc-300">
            Partner with KASI QUICKSHOP and help build South Africa's first youth-owned retail ecosystem.
            Together, we can strengthen local supply chains, empower entrepreneurs and deliver quality
            products to communities nationwide.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link href="#supplier-application" className="group inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:bg-yellow-300 hover:-translate-y-0.5">
              Become a Supplier
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform"/>
            </Link>

            <Link href="#why-partner" className="group inline-flex items-center justify-center rounded-2xl border border-white/15 bg-black/30 backdrop-blur-xl px-8 py-4 text-base font-semibold text-white hover:border-yellow-400/50">
              <Truck className="mr-3 h-5 w-5 text-yellow-400"/>
              Partnership Information
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
