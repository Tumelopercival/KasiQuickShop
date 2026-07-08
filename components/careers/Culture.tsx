import {
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Rocket,
  Users,
  Trophy,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Ubuntu",
    description:
      "We believe success is achieved together. Every employee, entrepreneur and community forms part of one ecosystem.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace new ideas, modern technology and continuous improvement to transform township retail.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We operate with honesty, accountability and transparency in every decision we make.",
  },
  {
    icon: Rocket,
    title: "Ambition",
    description:
      "We think big, move with purpose and continuously challenge ourselves to achieve national impact.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Our greatest achievements come from talented people working together toward one shared vision.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description:
      "We strive to deliver exceptional experiences for entrepreneurs, customers, investors and our communities.",
  },
];

export default function Culture() {
  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">

            OUR CULTURE

          </p>

          <h2 className="text-5xl font-extrabold text-white leading-tight">

            The Values That
            <br />

            Guide Everything We Do.

          </h2>

          <p className="text-zinc-300 text-xl leading-9 mt-8">

            Culture is more than words on a wall.
            It shapes how we work, how we lead,
            how we innovate and how we serve
            South Africa every single day.

          </p>

        </div>

        {/* Values */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((value, index) => {

            const Icon = value.icon;

            return (

              <div
                key={index}
                className="bg-black rounded-[32px] border border-zinc-800 p-8 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6">

                  <Icon className="w-8 h-8 text-black" />

                </div>

                <h3 className="text-2xl font-bold text-white mb-4">

                  {value.title}

                </h3>

                <p className="text-zinc-400 leading-8">

                  {value.description}

                </p>

              </div>

            );

          })}

        </div>

        {/* Bottom Statement */}

        <div className="mt-24 bg-yellow-400 rounded-[40px] p-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <h3 className="text-4xl font-extrabold text-black leading-tight">

                Together,
                <br />

                We Build More
                <br />

                Than A Company.

              </h3>

            </div>

            <div>

              <p className="text-black text-lg leading-9">

                We're building a workplace where talented South Africans
                can grow professionally while contributing to a mission
                that creates businesses, jobs and opportunities across
                the country. Every team member plays an important role
                in shaping the future of Kasi QuickShop.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}