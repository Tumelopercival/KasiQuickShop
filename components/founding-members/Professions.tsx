import {
  Code2,
  Building2,
  Wrench,
  Zap,
  Compass,
  Calculator,
  Store,
  Truck,
  Landmark,
  Scale,
  Megaphone,
  Users,
  ShieldCheck,
  Factory,
  BarChart3,
  Briefcase,
  UserRound,
  GraduationCap,
  HardHat,
  Boxes,
} from "lucide-react";

const professions = [
  {
    title: "Software Engineers",
    description: "Build the digital platform powering the ecosystem.",
    icon: Code2,
  },
  {
    title: "Civil Engineers",
    description: "Design and deliver modern retail infrastructure.",
    icon: Building2,
  },
  {
    title: "Mechanical Engineers",
    description: "Develop efficient operational systems and facilities.",
    icon: Wrench,
  },
  {
    title: "Electrical Engineers",
    description: "Power stores, warehouses and future smart infrastructure.",
    icon: Zap,
  },
  {
    title: "Architects",
    description: "Shape the next generation of township retail spaces.",
    icon: Compass,
  },
  {
    title: "Quantity Surveyors",
    description: "Ensure sustainable and efficient project delivery.",
    icon: Calculator,
  },
  {
    title: "Retail Specialists",
    description: "Create exceptional customer experiences.",
    icon: Store,
  },
  {
    title: "Supply Chain Professionals",
    description: "Build reliable national distribution networks.",
    icon: Boxes,
  },
  {
    title: "Logistics Experts",
    description: "Move products efficiently across South Africa.",
    icon: Truck,
  },
  {
    title: "Finance Professionals",
    description: "Support sustainable financial growth.",
    icon: Landmark,
  },
  {
    title: "Chartered Accountants",
    description: "Strengthen governance and financial excellence.",
    icon: Briefcase,
  },
  {
    title: "Lawyers",
    description: "Guide legal strategy and corporate governance.",
    icon: Scale,
  },
  {
    title: "Marketing Specialists",
    description: "Build a trusted national brand.",
    icon: Megaphone,
  },
  {
    title: "HR Professionals",
    description: "Develop a high-performance organisational culture.",
    icon: Users,
  },
  {
    title: "Food Safety Specialists",
    description: "Maintain world-class food safety standards.",
    icon: ShieldCheck,
  },
  {
    title: "Quality Assurance",
    description: "Protect consistency and operational excellence.",
    icon: HardHat,
  },
  {
    title: "Manufacturing Engineers",
    description: "Support scalable production and innovation.",
    icon: Factory,
  },
  {
    title: "Data Analysts",
    description: "Transform data into strategic decisions.",
    icon: BarChart3,
  },
  {
    title: "Entrepreneurs",
    description: "Drive innovation and local economic growth.",
    icon: UserRound,
  },
  {
    title: "Community Leaders",
    description: "Help connect communities with opportunity.",
    icon: GraduationCap,
  },
];

export default function Professions() {
  return (
    <section className="bg-[#050505] py-28">
      <div className="mx-auto max-w-[1700px] px-6 lg:px-10">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.30em] text-yellow-400">
            Who We're Looking For
          </span>

          <h2 className="mt-8 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Great Companies Are Built By Great People
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Building a national retail ecosystem requires expertise from many
            disciplines. We are bringing together talented professionals,
            entrepreneurs and leaders who share a long-term vision for South
            Africa.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {professions.map((profession) => {
            const Icon = profession.icon;

            return (
              <div
                key={profession.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-7
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-yellow-400/40
                  hover:bg-white/[0.07]
                  hover:shadow-[0_25px_60px_rgba(250,204,21,0.08)]
                "
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10">
                  <Icon className="h-7 w-7 text-yellow-400" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {profession.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {profession.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-3xl border border-yellow-400/20 bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-transparent p-10">

          <h3 className="text-3xl font-bold text-white">
            Every Profession Matters.
          </h3>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-zinc-300">
            Building South Africa's first youth-owned retail ecosystem will
            require collaboration across engineering, technology, finance,
            logistics, retail, infrastructure and community leadership. Every
            profession contributes to a stronger foundation and a greater
            national impact.
          </p>

        </div>

      </div>
    </section>
  );
}