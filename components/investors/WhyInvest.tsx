
import {
  TrendingUp,
  Network,
  Landmark,
  LineChart,
} from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "High-Growth Market",
    description:
      "Tap into one of South Africa's largest and fastest-growing retail sectors.",
  },
  {
    icon: Network,
    title: "National Ecosystem",
    description:
      "Invest in an integrated platform connecting retail, logistics, technology and manufacturing.",
  },
  {
    icon: Landmark,
    title: "Scalable Model",
    description:
      "Built for disciplined national expansion with long-term strategic partnerships.",
  },
  {
    icon: LineChart,
    title: "Long-Term Impact",
    description:
      "Help create sustainable businesses, jobs and economic growth across communities.",
  },
];

export default function WhyInvest() {
  return (
    <section
      id="why-invest"
      className="relative border-t border-white/10 bg-[#050505] py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Why Invest
          </p>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Invest In More Than
            <br />
            Retail.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Invest in the infrastructure powering South Africa's first
            youth-owned retail ecosystem.
          </p>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
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

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {reason.title}
                </h3>

                <p className="mx-auto mt-5 max-w-[240px] text-[15px] leading-7 text-zinc-400">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-24 h-px max-w-7xl bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
    </section>
  );
}
