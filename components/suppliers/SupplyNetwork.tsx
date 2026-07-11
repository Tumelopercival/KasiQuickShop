import {
  Factory,
  Warehouse,
  Boxes,
  Store,
  Users,
  ArrowRight,
} from "lucide-react";

const network = [
  {
    title: "Manufacturer",
    description:
      "South African manufacturers produce quality products for the Kasi QuickShop ecosystem.",
    icon: Factory,
  },
  {
    title: "Distribution Centre",
    description:
      "Products are consolidated and prepared for nationwide distribution.",
    icon: Warehouse,
  },
  {
    title: "Regional Warehouse",
    description:
      "Inventory is positioned closer to communities for efficient replenishment.",
    icon: Boxes,
  },
  {
    title: "Kasi QuickShop",
    description:
      "Stores receive products through a reliable and scalable supply network.",
    icon: Store,
  },
  {
    title: "Communities",
    description:
      "Families gain access to quality products while local entrepreneurs grow sustainable businesses.",
    icon: Users,
  },
];

export default function SupplyNetwork() {
  return (
    <section className="py-28 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}

        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-5">
            National Supply Network
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            From Manufacturing
            <span className="text-yellow-400">
              {" "}To Communities
            </span>
          </h2>

          <p className="mt-8 text-xl text-zinc-400 leading-9">
            Every supplier becomes part of an integrated ecosystem that connects
            manufacturing, logistics, warehousing and retail into one efficient
            national supply chain.
          </p>
        </div>

        {/* Desktop Flow */}

        <div className="hidden xl:flex items-center justify-between mt-24">
          {network.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="flex items-center"
              >
                <div
                  className="
                    w-64
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-8
                    transition-all
                    duration-300
                    hover:border-yellow-400/40
                    hover:bg-white/10
                    hover:-translate-y-2
                  "
                >
                  <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-yellow-400" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-zinc-400 leading-7">
                    {step.description}
                  </p>
                </div>

                {index !== network.length - 1 && (
                  <ArrowRight className="mx-6 h-8 w-8 text-yellow-400/70 shrink-0" />
                )}
              </div>
            );
          })}
        </div>

        {/* Tablet & Mobile */}

        <div className="xl:hidden mt-20 space-y-8">
          {network.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title}>
                <div
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-8
                  "
                >
                  <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-yellow-400" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-zinc-400 leading-8">
                    {step.description}
                  </p>
                </div>

                {index !== network.length - 1 && (
                  <div className="flex justify-center py-5">
                    <ArrowRight className="h-7 w-7 rotate-90 text-yellow-400/70" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}