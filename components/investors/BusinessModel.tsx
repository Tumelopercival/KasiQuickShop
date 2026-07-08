import {
  Landmark,
  Warehouse,
  Truck,
  Store,
  Users,
  TrendingUp,
  ArrowDown,
} from "lucide-react";

const flow = [
  {
    icon: Landmark,
    title: "Investment",
    description: "Capital accelerates infrastructure, technology and national expansion.",
  },
  {
    icon: Warehouse,
    title: "National Distribution",
    description: "Central warehouses procure, store and distribute products efficiently.",
  },
  {
    icon: Truck,
    title: "Logistics Network",
    description: "Provincial distribution ensures reliable product supply across South Africa.",
  },
  {
    icon: Store,
    title: "Kasi QuickShop Stores",
    description: "Modern branded convenience stores serve township communities.",
  },
  {
    icon: Users,
    title: "Entrepreneurs & Customers",
    description: "Entrepreneurs grow profitable businesses while serving local communities.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Expansion",
    description: "Revenue fuels expansion into new regions, entrepreneurs and markets.",
  },
];

export default function BusinessModel() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">
            BUSINESS MODEL
          </p>

          <h2 className="text-5xl font-extrabold text-black leading-tight">

            One Ecosystem.
            <br />

            Multiple Revenue Drivers.

          </h2>

          <p className="text-zinc-600 text-xl leading-9 mt-8">

            Kasi QuickShop is designed as an integrated ecosystem where
            investment strengthens infrastructure, logistics, wholesale,
            technology and entrepreneurship, creating long-term scalable
            value.

          </p>

        </div>

        {/* Flow */}

        <div className="max-w-5xl mx-auto">

          {flow.map((step, index) => {

            const Icon = step.icon;

            return (

              <div key={index}>

                <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 hover:border-yellow-400 transition-all duration-300">

                  <div className="flex flex-col lg:flex-row gap-8 items-center">

                    <div className="w-20 h-20 rounded-2xl bg-yellow-400 flex items-center justify-center">

                      <Icon className="w-10 h-10 text-black" />

                    </div>

                    <div className="flex-1">

                      <h3 className="text-3xl font-bold mb-3">

                        {step.title}

                      </h3>

                      <p className="text-zinc-600 text-lg leading-8">

                        {step.description}

                      </p>

                    </div>

                  </div>

                </div>

                {index < flow.length - 1 && (

                  <div className="flex justify-center py-5">

                    <ArrowDown className="w-8 h-8 text-yellow-500" />

                  </div>

                )}

              </div>

            );

          })}

        </div>

        {/* Bottom Summary */}

        <div className="mt-24 bg-zinc-950 rounded-[40px] p-12">

          <div className="grid lg:grid-cols-2 gap-12">

            <div>

              <h3 className="text-4xl font-bold text-white mb-6">

                Integrated Value Creation

              </h3>

              <p className="text-zinc-300 leading-9">

                Every component of the Kasi QuickShop ecosystem strengthens
                the next. Distribution supports logistics, logistics
                supports entrepreneurs, entrepreneurs serve communities,
                and business growth creates demand for further expansion.

              </p>

            </div>

            <div>

              <div className="space-y-5">

                {[
                  "Wholesale Distribution",
                  "Retail Operations",
                  "Technology Platform",
                  "National Logistics",
                  "Entrepreneur Development",
                  "Infrastructure Growth",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>

                    <p className="text-zinc-200 text-lg">

                      {item}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}