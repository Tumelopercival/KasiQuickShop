import {
  GraduationCap,
  TrendingUp,
  Heart,
  Award,
  Laptop,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Develop your skills through ongoing training, mentoring and professional development programmes.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Grow with a company expanding nationally, creating new leadership and career opportunities.",
  },
  {
    icon: Heart,
    title: "Wellbeing",
    description:
      "We believe great people perform at their best when their wellbeing is valued and supported.",
  },
  {
    icon: Award,
    title: "Recognition",
    description:
      "Outstanding performance, innovation and leadership are recognised and celebrated.",
  },
  {
    icon: Laptop,
    title: "Modern Workplace",
    description:
      "Work with modern technology, innovative systems and collaborative teams solving meaningful challenges.",
  },
  {
    icon: Users,
    title: "Purpose-Driven Team",
    description:
      "Join professionals who share one mission: creating businesses, jobs and opportunity across South Africa.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">
            EMPLOYEE BENEFITS
          </p>

          <h2 className="text-5xl font-extrabold text-white leading-tight">

            A Career That
            <br />

            Invests In You.

          </h2>

          <p className="text-zinc-300 text-xl leading-9 mt-8">

            We believe exceptional companies are built by investing in exceptional people.
            Our commitment is to help every employee learn, grow and succeed.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {benefits.map((benefit, index) => {

            const Icon = benefit.icon;

            return (

              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-[32px] p-8 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6">

                  <Icon className="w-8 h-8 text-black" />

                </div>

                <h3 className="text-2xl font-bold text-white mb-4">

                  {benefit.title}

                </h3>

                <p className="text-zinc-400 leading-8">

                  {benefit.description}

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

                We Grow
                <br />

                Together.

              </h3>

            </div>

            <div>

              <p className="text-black text-lg leading-9">

                Every employee contributes to our mission, and every success
                strengthens the future of Kasi QuickShop. We are committed to
                creating an environment where talented people can do meaningful
                work while building rewarding careers.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}