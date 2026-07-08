import {
  ShieldCheck,
  Compass,
  Award,
  Lightbulb,
  Handshake,
  BadgeCheck,
  Flag,
  HeartHandshake,
} from "lucide-react";

const principles = [
  {
    title: "Integrity",
    description:
      "We act with honesty, transparency and professionalism in every decision we make.",
    icon: ShieldCheck,
  },
  {
    title: "Long-term Thinking",
    description:
      "We build institutions that create value for future generations, not short-term gains.",
    icon: Compass,
  },
  {
    title: "Excellence",
    description:
      "We pursue the highest standards in leadership, operations, service and execution.",
    icon: Award,
  },
  {
    title: "Innovation",
    description:
      "We embrace technology, creativity and continuous improvement to solve real problems.",
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    description:
      "Our greatest achievements come from diverse professionals working together with a shared purpose.",
    icon: Handshake,
  },
  {
    title: "Accountability",
    description:
      "We take ownership of our commitments and remain responsible for the impact of our work.",
    icon: BadgeCheck,
  },
  {
    title: "South Africa First",
    description:
      "Every decision should strengthen local communities, entrepreneurs and the national economy.",
    icon: Flag,
  },
  {
    title: "Community Impact",
    description:
      "Success is measured not only by business growth, but by the opportunities we create for others.",
    icon: HeartHandshake,
  },
];

export default function Principles() {
  return (
    <section className="relative bg-[#050505] py-28">

      <div className="mx-auto max-w-[1700px] px-6 lg:px-10">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.30em] text-yellow-400">
            Founding Principles
          </span>

          <h2 className="mt-8 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            The Values That Will Guide Everything We Build
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Great organisations are built on strong principles. These values
            define how Founding Members collaborate, make decisions and build a
            lasting retail ecosystem for South Africa.
          </p>

        </div>

        {/* Values Grid */}

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <div
                key={principle.title}
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
                  hover:shadow-[0_20px_60px_rgba(250,204,21,0.08)]
                "
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10">
                  <Icon className="h-8 w-8 text-yellow-400" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {principle.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {principle.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Closing Statement */}

        <div className="mt-24 rounded-3xl border border-yellow-400/20 bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-transparent p-12 backdrop-blur-xl">

          <div className="mx-auto max-w-5xl text-center">

            <h3 className="text-3xl font-bold text-white md:text-4xl">
              Culture Is Our Competitive Advantage
            </h3>

            <p className="mt-6 text-lg leading-9 text-zinc-300">
              Skills build businesses, but values build institutions. Our
              Founding Members will establish the culture, standards and
              leadership that shape KASI QUICKSHOP for generations to come.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}