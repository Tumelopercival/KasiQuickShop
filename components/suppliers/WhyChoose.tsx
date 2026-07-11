import {
  TrendingUp,
  Globe2,
  Handshake,
  ShieldCheck,
  Network,
  BarChart3,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    description:
      "Grow alongside a retail ecosystem designed for long-term expansion across South Africa.",
  },
  {
    icon: Globe2,
    title: "National Market Access",
    description:
      "Reach entrepreneurs and communities through a structured national distribution network.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "We prioritise strategic relationships built on trust, collaboration and shared success.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Procurement",
    description:
      "Clear procurement standards and transparent processes create confidence for suppliers.",
  },
  {
    icon: Network,
    title: "Integrated Ecosystem",
    description:
      "Connect with logistics, wholesale, technology and retail through one coordinated platform.",
  },
  {
    icon: BarChart3,
    title: "Future-Focused Innovation",
    description:
      "Collaborate on modern retail solutions that improve efficiency and customer experience.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#050505] to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}

        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-5">
            Why Suppliers Choose Kasi QuickShop
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Built for
            <span className="text-yellow-400">
              {" "}Long-Term Strategic Partnerships
            </span>
          </h2>

          <p className="mt-8 text-xl text-zinc-400 leading-9">
            We are creating more than a supplier database. Kasi QuickShop is
            building an ecosystem where manufacturers, distributors, service
            providers and entrepreneurs succeed together through collaboration,
            innovation and sustainable growth.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-20">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
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
                  hover:shadow-[0_20px_60px_rgba(250,204,21,0.08)]
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-400/20">
                  <Icon className="w-7 h-7 text-yellow-400" />
                </div>

                <h3 className="mt-7 text-2xl font-semibold text-white">
                  {benefit.title}
                </h3>

                <p className="mt-5 text-zinc-400 leading-8">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}