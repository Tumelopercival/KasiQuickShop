import {
  FileText,
  Search,
  MessageSquare,
  Users,
  Award,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Application",
    description:
      "Submit your application with your background, experience and how you would like to contribute to KASI QUICKSHOP.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Review",
    description:
      "Our team carefully reviews every application to understand your skills, experience and alignment with our vision.",
    icon: Search,
  },
  {
    number: "03",
    title: "Interview",
    description:
      "Selected applicants will be invited to meet with the leadership team to discuss their experience, ideas and long-term aspirations.",
    icon: MessageSquare,
  },
  {
    number: "04",
    title: "Working Group",
    description:
      "Successful applicants join collaborative working groups where ideas, expertise and strategy begin shaping the ecosystem.",
    icon: Users,
  },
  {
    number: "05",
    title: "Founding Member",
    description:
      "Become part of the founding team helping build South Africa's first youth-owned retail ecosystem.",
    icon: Award,
  },
];

export default function Journey() {
  return (
    <section className="relative bg-[#050505] py-28">

      <div className="mx-auto max-w-[1700px] px-6 lg:px-10">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.30em] text-yellow-400">
            Application Journey
          </span>

          <h2 className="mt-8 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Your Journey Starts Here
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Every application receives careful consideration. Our goal is to
            bring together professionals who share our commitment to building a
            long-term retail ecosystem that serves communities across South
            Africa.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Desktop Connector */}

          <div className="absolute left-0 right-0 top-10 hidden h-[2px] bg-gradient-to-r from-yellow-400/10 via-yellow-400/40 to-yellow-400/10 lg:block" />

          <div className="grid gap-10 lg:grid-cols-5">

            {steps.map((step) => {

              const Icon = step.icon;

              return (

                <div
                  key={step.number}
                  className="relative"
                >

                  <div
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

                    {/* Number */}

                    <div className="text-sm font-bold tracking-[0.35em] text-yellow-400">
                      {step.number}
                    </div>

                    {/* Icon */}

                    <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10">

                      <Icon className="h-8 w-8 text-yellow-400" />

                    </div>

                    {/* Title */}

                    <h3 className="mt-8 text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-4 leading-8 text-zinc-400">
                      {step.description}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

        {/* Bottom Notice */}

        <div className="mt-24 rounded-3xl border border-yellow-400/20 bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-transparent p-12 backdrop-blur-xl">

          <div className="mx-auto max-w-5xl text-center">

            <h3 className="text-3xl font-bold text-white">
              Every Application Matters
            </h3>

            <p className="mt-6 text-lg leading-9 text-zinc-300">
              We are looking for people who believe in long-term impact,
              collaboration and building something meaningful. Whether you are an
              experienced professional or an emerging leader with valuable
              expertise, we encourage you to apply and share how you can
              contribute.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}