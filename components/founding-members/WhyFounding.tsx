import {
  Users,
  Network,
  Landmark,
  Lightbulb,
} from "lucide-react";

const pillars = [
  {
    title: "A National Vision",
    description:
      "KASI QUICKSHOP is building South Africa's first youth-owned retail ecosystem by integrating technology, wholesale, logistics, infrastructure, entrepreneurship and education into one connected national platform.",
    icon: Landmark,
  },
  {
    title: "Built by Professionals",
    description:
      "We are bringing together engineers, technologists, financial experts, legal professionals, retail specialists and entrepreneurs who believe in building lasting institutions that serve communities across South Africa.",
    icon: Users,
  },
  {
    title: "One Connected Ecosystem",
    description:
      "Every discipline contributes to a shared vision. From software platforms and distribution networks to modern retail stores and training programmes, every part strengthens the whole ecosystem.",
    icon: Network,
  },
  {
    title: "Building for Generations",
    description:
      "Founding Members are helping establish the systems, standards and culture that will guide KASI QUICKSHOP for years to come, creating opportunities that extend far beyond a single business.",
    icon: Lightbulb,
  },
];

export default function WhyFounding() {
  return (
    <section
      id="why"
      className="relative bg-[#050505] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400 backdrop-blur-xl">
            Why Founding Members Matter
          </span>

          <h2 className="mt-8 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            We're Building More Than A Company.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400 md:text-xl">
            KASI QUICKSHOP is assembling professionals from across South Africa
            who share a long-term vision of transforming township retail.
            Becoming a Founding Member means helping design, build and strengthen
            a national ecosystem that empowers entrepreneurs, creates jobs and
            delivers lasting community impact.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {pillars.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-yellow-400/40
                  hover:bg-white/[0.07]
                  hover:shadow-[0_20px_50px_rgba(250,204,21,0.08)]
                "
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10">
                  <Icon className="h-8 w-8 text-yellow-400" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Bottom Statement */}

        <div
          className="
            mt-20
            rounded-3xl
            border
            border-yellow-400/20
            bg-gradient-to-r
            from-yellow-400/10
            via-yellow-400/5
            to-transparent
            p-10
            backdrop-blur-xl
          "
        >
          <p className="text-center text-xl font-medium leading-9 text-white md:text-2xl">
            <span className="text-yellow-400 font-bold">
              Founding Members
            </span>{" "}
            are not simply joining an organisation. They are helping create the
            foundation upon which South Africa's first youth-owned retail
            ecosystem will be built.
          </p>
        </div>

      </div>
    </section>
  );
}