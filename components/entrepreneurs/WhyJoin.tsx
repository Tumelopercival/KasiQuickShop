import {
  GraduationCap,
  Truck,
  Cpu,
  Store,
  BadgeDollarSign,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Store,
    title: "Own Your Business",
    description:
      "Build a business you can proudly call your own while serving your community with a trusted national brand.",
  },
  {
    icon: GraduationCap,
    title: "Training & Support",
    description:
      "Receive practical business training, ongoing mentorship and operational support from day one.",
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    description:
      "Access quality products through a national logistics network that keeps your store stocked and competitive.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description:
      "Run your store using smart inventory, sales and reporting systems designed for modern retail.",
  },
  {
    icon: BadgeDollarSign,
    title: "Better Buying Power",
    description:
      "Benefit from national purchasing power that helps reduce costs and improve profitability.",
  },
  {
    icon: Users,
    title: "Join A Movement",
    description:
      "Become part of a growing network of entrepreneurs building South Africa's first youth-owned retail ecosystem.",
  },
];

export default function WhyJoin() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">
            WHY JOIN KASI QUICKSHOP
          </p>

          <h2 className="text-5xl font-extrabold text-black">

            Everything You Need
            <br />
            To Build Your Future

          </h2>

          <p className="text-zinc-600 text-xl mt-6">

            You're not starting from scratch.
            You're joining an ecosystem designed to help entrepreneurs
            build sustainable businesses and create lasting impact.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-zinc-50 rounded-3xl p-8 border border-zinc-200 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6">

                  <Icon className="w-8 h-8 text-black" />

                </div>

                <h3 className="text-2xl font-bold mb-4">

                  {item.title}

                </h3>

                <p className="text-zinc-600 leading-8">

                  {item.description}

                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}