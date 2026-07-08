import {
  FileText,
  Users,
  GraduationCap,
  Hammer,
  Store,
  TrendingUp,
} from "lucide-react";

const journey = [
  {
    icon: FileText,
    title: "Apply",
    description:
      "Complete your application and tell us about yourself, your ambitions and your community.",
  },
  {
    icon: Users,
    title: "Interview",
    description:
      "Meet our team to discuss your goals, commitment and suitability for the Kasi QuickShop ecosystem.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description:
      "Receive practical training covering retail operations, leadership, customer service and business management.",
  },
  {
    icon: Hammer,
    title: "Store Development",
    description:
      "We work with you to prepare your modern Kasi QuickShop store and install the systems needed to operate successfully.",
  },
  {
    icon: Store,
    title: "Grand Opening",
    description:
      "Launch your business with marketing support, product supply and operational guidance from day one.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description:
      "Continue growing your business with ongoing mentorship, technology, logistics and a national support network.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">
            YOUR JOURNEY
          </p>

          <h2 className="text-5xl font-extrabold text-black">

            From Application
            <br />
            To Business Owner

          </h2>

          <p className="text-zinc-600 text-xl mt-6">

            Every successful entrepreneur starts with a single decision.
            Here's what your journey with Kasi QuickShop looks like.

          </p>

        </div>

        <div className="space-y-8">

          {journey.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={index}
                className="flex flex-col lg:flex-row items-start gap-8 bg-zinc-50 rounded-3xl p-8 border border-zinc-200 hover:border-yellow-400 transition duration-300"
              >

                <div className="w-20 h-20 rounded-2xl bg-yellow-400 flex items-center justify-center flex-shrink-0">

                  <Icon className="w-10 h-10 text-black" />

                </div>

                <div className="flex-1">

                  <div className="flex items-center gap-4 mb-3">

                    <span className="text-yellow-500 text-lg font-bold">
                      STEP {index + 1}
                    </span>

                    <h3 className="text-3xl font-bold text-black">
                      {step.title}
                    </h3>

                  </div>

                  <p className="text-zinc-600 text-lg leading-8">

                    {step.description}

                  </p>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}