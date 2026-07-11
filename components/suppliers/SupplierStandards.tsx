import {
  BadgeCheck,
  ShieldCheck,
  FileCheck,
  Leaf,
  Scale,
  Users,
} from "lucide-react";

const standards = [
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description:
      "Products and services must consistently meet agreed quality standards, specifications and performance expectations.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    description:
      "Suppliers must comply with all applicable South African legislation, industry regulations and relevant certifications.",
  },
  {
    icon: FileCheck,
    title: "Reliable Documentation",
    description:
      "Maintain accurate business registrations, tax documentation, certifications and supporting compliance records.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "We encourage responsible sourcing, environmentally conscious operations and sustainable business practices.",
  },
  {
    icon: Scale,
    title: "Ethical Business",
    description:
      "Partnerships are built on integrity, transparency, fair business practices and accountability throughout the supply chain.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description:
      "We value suppliers who are committed to innovation, continuous improvement and long-term collaboration.",
  },
];

export default function SupplierStandards() {
  return (
    <section className="py-28 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}

        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-5">
            Supplier Standards
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Building Partnerships Based on
            <span className="text-yellow-400">
              {" "}Trust, Quality & Integrity
            </span>
          </h2>

          <p className="mt-8 text-xl text-zinc-400 leading-9">
            Every supplier joining the Kasi QuickShop ecosystem is expected to
            uphold high standards of quality, compliance and professionalism.
            These principles help us build a reliable national retail network
            that delivers lasting value to entrepreneurs and communities.
          </p>
        </div>

        {/* Standards Grid */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-20">
          {standards.map((standard) => {
            const Icon = standard.icon;

            return (
              <div
                key={standard.title}
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
                  {standard.title}
                </h3>

                <p className="mt-5 text-zinc-400 leading-8">
                  {standard.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}

        <div className="mt-20 rounded-3xl border border-yellow-400/20 bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-transparent p-10 backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-white">
            Our Commitment to Every Supplier
          </h3>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-300">
            Kasi QuickShop is committed to building transparent, fair and
            mutually beneficial supplier relationships. We believe that strong
            partnerships, clear communication and shared values are the
            foundation of a resilient national retail ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}