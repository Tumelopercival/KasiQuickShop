import {
  Store,
  Truck,
  Laptop,
  Building2,
  Warehouse,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    title: "Kasi Retail",
    description:
      "Modern neighbourhood convenience stores designed to deliver trusted products, excellent customer experiences and sustainable local entrepreneurship.",
    icon: Store,
  },
  {
    title: "Kasi Logistics",
    description:
      "A national distribution and delivery network connecting warehouses, suppliers and retail stores across South Africa.",
    icon: Truck,
  },
  {
    title: "Kasi Technology",
    description:
      "Digital platforms powering ordering, inventory, payments, analytics and operational excellence throughout the ecosystem.",
    icon: Laptop,
  },
  {
    title: "Kasi Infrastructure",
    description:
      "Scalable retail buildings, distribution facilities and supporting infrastructure designed for long-term growth.",
    icon: Building2,
  },
  {
    title: "Kasi Wholesale",
    description:
      "Strategic procurement and wholesale operations providing reliable access to quality products at competitive prices.",
    icon: Warehouse,
  },
  {
    title: "Kasi Academy",
    description:
      "Training, leadership development and entrepreneurial education that prepare the next generation of township business leaders.",
    icon: GraduationCap,
  },
];

export default function Ecosystem() {
  return (
    <section className="relative bg-[#050505] py-28">

      <div className="mx-auto max-w-[1700px] px-6 lg:px-10">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.30em] text-yellow-400">
            What We'll Build Together
          </span>

          <h2 className="mt-8 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Six Pillars. One National Ecosystem.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Every founding member contributes to an integrated ecosystem that
            combines retail, technology, logistics, infrastructure, wholesale
            and education into one connected platform for long-term national
            growth.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {pillars.map((pillar) => {

            const Icon = pillar.icon;

            return (

              <div
                key={pillar.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-10
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-yellow-400/40
                  hover:bg-white/[0.07]
                  hover:shadow-[0_25px_80px_rgba(250,204,21,0.10)]
                "
              >

                {/* Gold Glow */}

                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-yellow-400/5 blur-3xl transition-all duration-500 group-hover:bg-yellow-400/10" />

                <div className="relative z-10">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10">

                    <Icon className="h-8 w-8 text-yellow-400" />

                  </div>

                  <h3 className="mt-8 text-3xl font-bold text-white">

                    {pillar.title}

                  </h3>

                  <p className="mt-5 text-lg leading-8 text-zinc-400">

                    {pillar.description}

                  </p>

                  <div className="mt-10 inline-flex items-center text-yellow-400 font-semibold">

                    Building the Future

                    <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />

                  </div>

                </div>

              </div>

            );

          })}

        </div>

        {/* Vision Banner */}

        <div
          className="
            mt-24
            rounded-3xl
            border
            border-yellow-400/20
            bg-gradient-to-r
            from-yellow-400/10
            via-yellow-400/5
            to-transparent
            p-12
            backdrop-blur-xl
          "
        >

          <div className="mx-auto max-w-5xl text-center">

            <h3 className="text-3xl font-bold text-white md:text-4xl">
              Building an Ecosystem, Not Just a Business
            </h3>

            <p className="mt-6 text-lg leading-9 text-zinc-300">
              KASI QUICKSHOP is designed as an interconnected national platform.
              Each pillar strengthens the others, creating opportunities for
              entrepreneurs, professionals, suppliers and communities while
              laying the foundation for long-term economic growth across South
              Africa.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}