import Button from "@/components/ui/Button";
import {
  Factory,
  Truck,
  PackageCheck,
  Building2,
} from "lucide-react";

const trustItems = [
  {
    icon: Factory,
    title: "Manufacturer Partnerships",
  },
  {
    icon: Truck,
    title: "National Distribution",
  },
  {
    icon: PackageCheck,
    title: "Scalable Supply Chain",
  },
  {
    icon: Building2,
    title: "Long-Term Growth",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[900px] lg:h-[920px]">
      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/suppliers-hero.png')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/50" />

      {/* Left Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-5">
            Strategic Supplier Partnerships
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-yellow-400">
              Become a Strategic
            </span>

            <br />

            <span className="text-white">
              Supply Partner
            </span>
          </h1>

          <p className="mt-8 text-xl text-zinc-300 max-w-2xl leading-9">
            Help power South Africa's first youth-owned retail ecosystem by
            supplying quality products, services and innovative solutions to a
            growing national retail network.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            <Button>
              Become a Supplier
            </Button>

            <Button variant="outline">
              Supply Categories
            </Button>
          </div>

          {/* Trust Cards */}

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-5
                    transition-all
                    duration-300
                    hover:border-yellow-400/40
                    hover:bg-white/10
                  "
                >
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-yellow-400" />
                  </div>

                  <h3 className="text-white text-sm font-semibold leading-6">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}