import {
  ShieldCheck,
  Rocket,
  Users,
  Store,
  Star,
  Globe,
} from "lucide-react";

const values = [
  {
    title: "Integrity",
    icon: ShieldCheck,
    description:
      "We act with honesty, transparency and accountability in everything we do.",
  },
  {
    title: "Innovation",
    icon: Rocket,
    description:
      "We embrace technology and new ideas to solve real problems.",
  },
  {
    title: "Ubuntu",
    icon: Users,
    description:
      "We believe our success grows when we grow together as communities.",
  },
  {
    title: "Ownership",
    icon: Store,
    description:
      "We empower entrepreneurs to build businesses they proudly own and lead.",
  },
  {
    title: "Excellence",
    icon: Star,
    description:
      "We pursue the highest standards in every product, service and experience.",
  },
  {
    title: "Community",
    icon: Globe,
    description:
      "We invest in stronger local economies and opportunities for future generations.",
  },
];

export default function Values() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">
            OUR VALUES
          </p>

          <h2 className="text-5xl font-extrabold text-black">
            The Principles That
            <br />
            Guide Everything We Do
          </h2>

          <p className="text-zinc-600 text-xl mt-6">
            These values shape our culture, our decisions and our commitment
            to every entrepreneur and community we serve.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="bg-zinc-50 rounded-3xl p-8 border border-zinc-200 hover:border-yellow-400 hover:shadow-xl transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6">

                  <Icon className="w-8 h-8 text-black" />

                </div>

                <h3 className="text-2xl font-bold text-black mb-4">
                  {value.title}
                </h3>

                <p className="text-zinc-600 leading-8">
                  {value.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}