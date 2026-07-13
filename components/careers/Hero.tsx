
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[980px] lg:h-[1020px]">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:"url('/future-careers-hero.png')",backgroundPosition:"center center"}}/>
      <div className="absolute inset-0 bg-black/50"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/80 to-transparent"/>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent"/>
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-12">
        <div className="max-w-[640px]">
          <div className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 backdrop-blur-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-400">Future Careers</span>
          </div>
          <h1 className="mt-8 text-5xl font-extrabold leading-[0.92] tracking-tight md:text-6xl xl:text-[5.4rem]">
            <span className="text-white">BUILD THE</span><br/>
            <span className="text-yellow-400">FUTURE</span><br/>
            <span className="text-white">WITH US.</span>
          </h1>
          <p className="mt-8 max-w-[560px] text-lg leading-9 text-zinc-300 md:text-xl">
            We're not recruiting for operational positions yet. Today we're building our Founding Team. Register your interest today and we'll contact you as career opportunities become available across South Africa.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link href="/founding-members" className="group inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-8 py-4 text-base font-semibold text-black hover:bg-yellow-300">
              Become a Founding Member <ArrowRight className="ml-3 h-5 w-5"/>
            </Link>
            <Link href="#career-interest" className="group inline-flex items-center justify-center rounded-2xl border border-white/15 bg-black/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl">
              <Briefcase className="mr-3 h-5 w-5 text-yellow-400"/>Register Career Interest
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
