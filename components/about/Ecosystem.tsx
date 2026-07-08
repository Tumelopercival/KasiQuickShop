import {
  GraduationCap,
  Cpu,
  Warehouse,
  Package,
  Truck,
  Store,
} from "lucide-react";

const ecosystem = [
  {
    title: "Kasi Academy",
    description:
      "Training entrepreneurs with practical business skills, retail knowledge and leadership development.",
    icon: GraduationCap,
  },
  {
    title: "Kasi Technology",
    description:
      "Providing modern software, inventory management and digital tools to simplify business operations.",
    icon: Cpu,
  },
  {
    title: "Kasi Infrastructure",
    description:
      "Developing modern retail stores and supporting infrastructure designed for long-term success.",
    icon: Warehouse,
  },
  {
    title: "Kasi Wholesale",
    description:
      "Supplying quality products at competitive prices through national purchasing power.",
    icon: Package,
  },
  {
    title: "Kasi Logistics",
    description:
      "Reliable warehousing and distribution ensuring stores remain stocked and operational.",
    icon: Truck,
  },
  {
    title: "Kasi Retail",
    description:
      "Empowering entrepreneurs to own professionally branded stores that serve their communities.",
    icon: Store,
  },
];

export default function Ecosystem() {
  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">
            OUR ECOSYSTEM
          </p>

          <h2 className="text-5xl lg:text-6xl font-extrabold text-white">
            Six Pillars.
            <br />
            One Connected Ecosystem.
          </h2>

          <p className="text-zinc-400 text-xl mt-6">
            Every part of Kasi QuickShop works together to give entrepreneurs
            everything they need to build, grow and succeed.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {ecosystem.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 transition duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6">

                  <Icon className="text-black w-8 h-8" />

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

      </div>

    </section>
  );
}