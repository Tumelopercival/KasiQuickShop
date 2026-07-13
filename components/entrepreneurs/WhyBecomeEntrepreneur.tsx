import {
  Store,
  Truck,
  TrendingUp,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Store,
    title: (
      <>
        Own Your
        <br />
        Store
      </>
    ),
    description:
      "Operate your own KASI QUICKSHOP under a trusted national brand built for long-term success.",
  },
  {
    icon: Truck,
    title: (
      <>
        National
        <br />
        Support
      </>
    ),
    description:
      "Benefit from centralized procurement, logistics, technology and operational support.",
  },
  {
    icon: TrendingUp,
    title: (
      <>
        Grow Your
        <br />
        Business
      </>
    ),
    description:
      "Scale confidently with business development, digital tools, training and continuous support.",
  },
  {
    icon: Users,
    title: (
      <>
        Create Community
        <br />
        Impact
      </>
    ),
    description:
      "Create local employment, strengthen township economies and inspire future entrepreneurs.",
  },
];

export default function WhyBecomeEntrepreneur() {
  return (
    <section
      id="why-entrepreneur"
      className="relative border-t border-white/10 bg-[#050505]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">

        {/* Section Label */}

        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-yellow-400">
          WHY BECOME AN ENTREPRENEUR
        </p>

        {/* Heading */}

        <h2 className="mx-auto mt-6 max-w-5xl text-center text-4xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
          Build A Business.
          <br />
          <span className="text-yellow-400">
            Build A Legacy.
          </span>
        </h2>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-zinc-400">
          We're creating opportunities for ambitious South Africans to own
          modern retail businesses backed by a national ecosystem of
          technology, logistics, suppliers and ongoing business support.
        </p>

        {/* Feature Grid */}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.description}
                className={`px-8 text-center ${
                  index !== 0 ? "xl:border-l xl:border-white/10" : ""
                }`}
              >
                <div className="flex justify-center">
                  <Icon
                    className="h-10 w-10 text-yellow-400"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-tight text-white">
                  {feature.title}
                </h3>

                <p className="mx-auto mt-5 max-w-[240px] text-[15px] leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>

      {/* Bottom Gold Divider */}

      <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-70" />
    </section>
  );
}