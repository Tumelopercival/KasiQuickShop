import { CheckCircle2, XCircle } from "lucide-react";

const comparison = [
  {
    traditional: "Independent stores operate in isolation.",
    kasi: "National ecosystem connecting entrepreneurs, logistics and technology.",
  },
  {
    traditional: "Limited buying power and inconsistent pricing.",
    kasi: "National wholesale purchasing power improving competitiveness.",
  },
  {
    traditional: "Manual business operations.",
    kasi: "Integrated retail technology for inventory, reporting and ordering.",
  },
  {
    traditional: "No structured entrepreneur development.",
    kasi: "Training, mentorship and continuous business support.",
  },
  {
    traditional: "Limited scalability.",
    kasi: "Designed for rapid national expansion through a repeatable model.",
  },
  {
    traditional: "Stores compete independently.",
    kasi: "Entrepreneurs collaborate within one national retail ecosystem.",
  },
];

export default function CompetitiveAdvantage() {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">
            COMPETITIVE ADVANTAGE
          </p>

          <h2 className="text-5xl font-extrabold text-white leading-tight">
            Built To Be Different.
            <br />
            Built To Scale.
          </h2>

          <p className="text-zinc-300 text-xl leading-9 mt-8">
            Kasi QuickShop is not simply another convenience store network.
            It is an integrated retail ecosystem designed for sustainable
            growth, operational excellence and long-term value creation.
          </p>

        </div>

        {/* Comparison */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Traditional */}

          <div className="bg-zinc-900 rounded-[40px] border border-zinc-800 p-10">

            <h3 className="text-3xl font-bold text-white mb-10">
              Traditional Retail
            </h3>

            <div className="space-y-8">

              {comparison.map((item, index) => (

                <div
                  key={index}
                  className="flex gap-5"
                >

                  <XCircle className="w-7 h-7 text-red-500 flex-shrink-0 mt-1" />

                  <p className="text-zinc-400 leading-8">
                    {item.traditional}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Kasi QuickShop */}

          <div className="bg-yellow-400 rounded-[40px] p-10">

            <h3 className="text-3xl font-bold text-black mb-10">
              Kasi QuickShop
            </h3>

            <div className="space-y-8">

              {comparison.map((item, index) => (

                <div
                  key={index}
                  className="flex gap-5"
                >

                  <CheckCircle2 className="w-7 h-7 text-black flex-shrink-0 mt-1" />

                  <p className="text-black leading-8 font-medium">
                    {item.kasi}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 bg-black rounded-[40px] p-12">

          <div className="grid lg:grid-cols-3 gap-12 text-center">

            <div>

              <h3 className="text-yellow-400 text-5xl font-extrabold">
                Technology
              </h3>

              <p className="text-zinc-300 mt-4 leading-8">
                Modern retail systems connecting every entrepreneur across the ecosystem.
              </p>

            </div>

            <div>

              <h3 className="text-yellow-400 text-5xl font-extrabold">
                Logistics
              </h3>

              <p className="text-zinc-300 mt-4 leading-8">
                National logistics infrastructure delivering products efficiently across South Africa.
              </p>

            </div>

            <div>

              <h3 className="text-yellow-400 text-5xl font-extrabold">
                Entrepreneurship
              </h3>

              <p className="text-zinc-300 mt-4 leading-8">
                Local ownership creating sustainable businesses, jobs and economic opportunity.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}