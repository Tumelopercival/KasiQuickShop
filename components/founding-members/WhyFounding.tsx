import {
  Rocket,
  Users,
  BarChart3,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: (
      <>
        Help Build a
        <br />
        National Ecosystem
      </>
    ),
    description:
      "Play a foundational role in building infrastructure that will transform communities across South Africa.",
  },
  {
    icon: Users,
    title: (
      <>
        Collaborate With
        <br />
        Exceptional People
      </>
    ),
    description:
      "Work alongside builders, innovators and operators who are obsessed with excellence and impact.",
  },
  {
    icon: BarChart3,
    title: (
      <>
        Create Lasting
        <br />
        Economic Impact
      </>
    ),
    description:
      "Drive job creation, empower entrepreneurs and strengthen local economies for generations to come.",
  },
  {
    icon: Star,
    title: (
      <>
        Leave a
        <br />
        National Legacy
      </>
    ),
    description:
      "Be remembered as one of the founders who helped shape South Africa's future retail landscape.",
  },
];

export default function WhyBecomeFounder() {
  return (
    <section
      id="why"
      className="relative bg-[#050505] border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">

        {/* Label */}

        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-yellow-400">
          WHY BECOME A FOUNDER
        </p>

        {/* Heading */}

        <h2 className="mt-5 text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
          Help Build Something That Outlives Us All
        </h2>

        {/* Description */}

        <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-7 text-zinc-400">
          Founders don't follow trends.
          They create legacies.
          <br />
          Here's why exceptional people are joining us.
        </p>

        {/* Features */}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`
                  relative
                  px-8
                  text-center
                  ${
                    index !== 0
                      ? "xl:border-l xl:border-white/10"
                      : ""
                  }
                `}
              >
                <div className="flex justify-center">
                  <Icon
                    strokeWidth={1.8}
                    className="h-10 w-10 text-yellow-400"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-tight text-white">
                  {feature.title}
                </h3>

                <p className="mx-auto mt-5 max-w-[240px] text-[15px] leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Gold Line */}

      <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-70" />
    </section>
  );
}