import {
  TrendingUp,
  Boxes,
  Truck,
  Cpu,
  Users,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "High Growth Market",
    description:
      "South Africa's township retail economy represents one of the country's largest and fastest-growing consumer markets.",
  },
  {
    icon: Boxes,
    title: "Scalable Business Model",
    description:
      "Our ecosystem is designed to expand from community level to a national retail network with consistent operational standards.",
  },
  {
    icon: Truck,
    title: "Integrated Supply Chain",
    description:
      "Distribution, logistics and wholesale operate together to improve efficiency and strengthen long-term profitability.",
  },
  {
    icon: Cpu,
    title: "Technology Platform",
    description:
      "Modern retail technology enables inventory management, reporting, ordering and operational visibility across the ecosystem.",
  },
  {
    icon: Users,
    title: "Entrepreneur Network",
    description:
      "Local entrepreneurs own and operate stores while benefiting from the support of a national ecosystem and trusted brand.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Vision",
    description:
      "Our strategy focuses on sustainable growth, national expansion and long-term value creation for investors and communities.",
  },
];

export default function WhyInvest() {
  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">
            WHY INVEST
          </p>

          <h2 className="text-5xl font-extrabold text-white leading-tight">

            Investing In More Than
            <br />

            <span className="text-yellow-400">
              Convenience Stores
            </span>

          </h2>

          <p className="text-zinc-300 text-xl leading-9 mt-8">

            Kasi QuickShop combines retail, logistics, technology,
            infrastructure and entrepreneurship into one integrated
            ecosystem designed for national growth and long-term value
            creation.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reasons.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6">

                  <Icon className="w-8 h-8 text-black" />

                </div>

                <h3 className="text-2xl font-bold text-white mb-4">

                  {item.title}

                </h3>

                <p className="text-zinc-400 leading-8">

                  {item.description}

                </p>

              </div>

            );

          })}

        </div>

        {/* Bottom Statement */}

        <div className="mt-24 bg-black border border-yellow-500/30 rounded-[40px] p-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">
                OUR VISION
              </p>

              <h3 className="text-4xl font-bold text-white leading-tight">

                Building South Africa's
                <br />

                First Youth-Owned
                <br />

                Retail Ecosystem.

              </h3>

            </div>

            <div>

              <p className="text-zinc-300 text-lg leading-9">

                We believe the future of township retail lies in
                combining entrepreneurship, technology, logistics,
                wholesale distribution and infrastructure into one
                scalable national platform. By investing in Kasi
                QuickShop, you are investing in a model designed to
                create businesses, jobs and long-term economic growth
                across South Africa.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}