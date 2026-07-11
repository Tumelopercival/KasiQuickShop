import {
  Globe2,
  TrendingUp,
  Handshake,
  Truck,
  Store,
  Lightbulb,
} from "lucide-react";

const reasons = [
  {
    icon: Globe2,
    title: "National Retail Expansion",
    description:
      "Join a growing retail ecosystem designed to reach communities across South Africa through a scalable distribution network.",
  },
  {
    icon: TrendingUp,
    title: "Growing Market Demand",
    description:
      "Support a rapidly expanding network of entrepreneurs serving township communities with consistent demand for quality products.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "We value long-term supplier relationships built on transparency, collaboration and mutual growth.",
  },
  {
    icon: Truck,
    title: "Integrated Supply Chain",
    description:
      "Benefit from an ecosystem that connects manufacturers, logistics partners, warehouses and retail stores through one coordinated network.",
  },
  {
    icon: Store,
    title: "Scalable Retail Network",
    description:
      "Supply a future nationwide network of Kasi QuickShop stores through a structured and efficient procurement model.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Collaboration",
    description:
      "Work alongside a forward-thinking organisation committed to modern retail technology, operational excellence and continuous improvement.",
  },
];

export default function WhyPartner() {
  return (
    <section className="bg-[#050505] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}

        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-5">
            Why Partner With Kasi QuickShop
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Building Long-Term Value Through
            <span className="text-yellow-400"> Strategic Supplier Partnerships</span>
          </h2>

          <p className="mt-8 text-lg text-zinc-400 leading-8">
            Kasi QuickShop is creating a modern retail ecosystem where trusted
            suppliers play a critical role in delivering quality products,
            reliable services and sustainable growth for entrepreneurs and
            communities across South Africa.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-yellow-400/40
                  hover:bg-white/10
                  hover:shadow-2xl
                  hover:shadow-yellow-400/10
                "
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 transition-colors duration-300 group-hover:bg-yellow-400/20">
                  <Icon className="h-7 w-7 text-yellow-400" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {reason.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}