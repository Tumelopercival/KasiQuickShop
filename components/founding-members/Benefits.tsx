import {
  Landmark,
  Building2,
  Users,
  Briefcase,
  Trophy,
  Globe2,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    title: "Help Shape the Company",
    description:
      "Contribute to the systems, culture and long-term direction of KASI QUICKSHOP from its earliest stages.",
    icon: Landmark,
  },
  {
    title: "Build a National Ecosystem",
    description:
      "Work alongside professionals from multiple disciplines to create South Africa's first youth-owned retail ecosystem.",
    icon: Building2,
  },
  {
    title: "Collaborate With Exceptional People",
    description:
      "Join engineers, entrepreneurs, financial professionals, architects, logistics experts and community leaders working toward a shared vision.",
    icon: Users,
  },
  {
    title: "Create Meaningful Employment",
    description:
      "Help design an ecosystem capable of creating sustainable opportunities for entrepreneurs and thousands of South Africans.",
    icon: Briefcase,
  },
  {
    title: "Leave a Lasting Legacy",
    description:
      "Become part of a founding team whose work has the potential to influence township commerce for generations.",
    icon: Trophy,
  },
  {
    title: "Drive National Impact",
    description:
      "Help strengthen local supply chains, support communities and contribute to long-term economic development across South Africa.",
    icon: Globe2,
  },
];

export default function Benefits() {
  return (
    <section className="relative bg-[#050505] py-28">

      <div className="mx-auto max-w-[1700px] px-6 lg:px-10">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.30em] text-yellow-400">
            Why Become a Founding Member
          </span>

          <h2 className="mt-8 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Build Something Bigger Than Yourself
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Becoming a Founding Member is about more than joining a company.
            It is an opportunity to help shape an institution that aims to
            transform township retail, strengthen local economies and create
            lasting opportunities across South Africa.
          </p>

        </div>

        {/* Benefits */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {benefits.map((benefit) => {

            const Icon = benefit.icon;

            return (

              <div
                key={benefit.title}
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
                  hover:shadow-[0_25px_70px_rgba(250,204,21,0.08)]
                "
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10">

                  <Icon className="h-8 w-8 text-yellow-400" />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {benefit.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-400">
                  {benefit.description}
                </p>

              </div>

            );

          })}

        </div>

        {/* Closing Banner */}

        <div
          className="
            mt-24
            overflow-hidden
            rounded-3xl
            border
            border-yellow-400/20
            bg-gradient-to-r
            from-yellow-400/10
            via-yellow-400/5
            to-transparent
            p-12
            backdrop-blur-xl
          "
        >

          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

            <div className="max-w-4xl">

              <h3 className="text-3xl font-bold text-white md:text-4xl">
                The Opportunity to Help Build South Africa's Future
              </h3>

              <p className="mt-6 text-lg leading-9 text-zinc-300">
                Great organisations are rarely built by one person.
                They are built by teams who share a vision, embrace
                responsibility and commit themselves to creating lasting
                impact. If that inspires you, we'd love to hear from you.
              </p>

            </div>

            <a
              href="#application"
              className="
                group
                inline-flex
                items-center
                rounded-2xl
                bg-yellow-400
                px-8
                py-4
                text-lg
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_20px_50px_rgba(250,204,21,0.35)]
              "
            >
              Apply Now

              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}