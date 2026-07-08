import {
  Briefcase,
  TrendingUp,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Briefcase,
    title: "Meaningful Work",
    description:
      "Every project contributes to building South Africa's first youth-owned national retail ecosystem and creating lasting economic opportunity.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Grow with a company designed for national expansion where your skills, leadership and ambition can develop alongside the business.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Access ongoing learning, mentorship and professional development opportunities across multiple business disciplines.",
  },
  {
    icon: HeartHandshake,
    title: "Purpose-Driven Culture",
    description:
      "Become part of a mission focused on entrepreneurship, community impact and creating sustainable businesses across South Africa.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Work with technology, logistics and modern retail solutions that challenge conventional thinking and encourage new ideas.",
  },
  {
    icon: Users,
    title: "One Team",
    description:
      "Collaborate with passionate professionals who believe that great businesses are built by people working toward one shared vision.",
  },
];

export default function WhyWorkHere() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">
            WHY WORK HERE
          </p>

          <h2 className="text-5xl font-extrabold text-black leading-tight">

            Build More Than
            <br />

            A Career.

          </h2>

          <p className="text-zinc-600 text-xl leading-9 mt-8">

            At Kasi QuickShop, you're not simply joining a company.
            You're joining a mission to transform township retail,
            empower entrepreneurs and help shape South Africa's future.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reasons.map((reason, index) => {

            const Icon = reason.icon;

            return (

              <div
                key={index}
                className="bg-zinc-50 border border-zinc-200 rounded-[32px] p-8 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6">

                  <Icon className="w-8 h-8 text-black" />

                </div>

                <h3 className="text-2xl font-bold mb-4">

                  {reason.title}

                </h3>

                <p className="text-zinc-600 leading-8">

                  {reason.description}

                </p>

              </div>

            );

          })}

        </div>

        {/* Bottom Banner */}

        <div className="mt-24 bg-zinc-950 rounded-[40px] p-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">

                OUR PEOPLE

              </p>

              <h3 className="text-4xl font-bold text-white leading-tight">

                Great Companies
                <br />

                Are Built By
                <br />

                Great People.

              </h3>

            </div>

            <div>

              <p className="text-zinc-300 text-lg leading-9">

                We believe our greatest investment is in people.
                By creating an environment where talented individuals
                can learn, innovate and grow, we build a stronger
                company capable of creating lasting value for
                entrepreneurs, communities and South Africa.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}