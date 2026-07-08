import Link from "next/link";
import {
  Users,
  Briefcase,
  Factory,
  Store,
  ArrowRight,
} from "lucide-react";

const opportunities = [
  {
    title: "Founding Member",
    href: "/founding-members",
    icon: Users,
  },
  {
    title: "Investor",
    href: "/investors",
    icon: Briefcase,
  },
  {
    title: "Supplier",
    href: "/suppliers",
    icon: Factory,
  },
  {
    title: "Entrepreneur",
    href: "/entrepreneurs",
    icon: Store,
  },
];

const statistics = [
  {
    value: "R180B+",
    label: "Township Retail Economy",
  },
  {
    value: "20,000",
    label: "Target QuickShops",
  },
  {
    value: "150,000+",
    label: "Potential Jobs",
  },
  {
    value: "9",
    label: "Provincial Rollout",
  },
];

export default function Hero() {
  return (
   <section
  id="home"
  className="relative overflow-hidden h-[1180px]"
>
      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/protea-glen-hero.png')",
          backgroundPosition: "75% center",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      {/* Left Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />

      <div className="relative z-10">

        {/* Hero Text */}

        <div className="mx-auto max-w-[1700px] px-4 lg:px-4 pt-40">

          <div className="max-w-4xl">

            <h1
              className="
              text-4xl
              sm:text-5xl
              md:text-5xl
              lg:text-6xl
              xl:text-[5.4rem]
              font-extrabold
              leading-[0.95]
              tracking-tight
              text-white
                        "
            >
              BUILDING SOUTH AFRICA'S FIRST

              <br />

              <span className="text-yellow-400">
                YOUTH-OWNED
              </span>

              <br />

              RETAIL ECOSYSTEM

            </h1>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-zinc-300
              "
            >
              Connecting entrepreneurs through technology,
              logistics, wholesale, infrastructure,
              training and distribution to build a stronger
              South Africa.
            </p>

          </div>

        </div>

        {/* Full Width Action Area */}

        <div className="mt-14 px-8 lg:px-12">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.30em] text-yellow-400">

            Choose How You'd Like To Participate

          </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {opportunities.map((item) => {

              const Icon = item.icon;

              return (

                <Link
                  key={item.title}
                  href={item.href}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/40
                    backdrop-blur-xl
                    px-6
                    py-4
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-yellow-400
                    hover:bg-black/60
                    hover:shadow-[0_15px_40px_rgba(250,204,21,0.15)]
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-yellow-400/40
                        bg-yellow-400/10
                        transition-all
                        duration-300
                        group-hover:bg-yellow-400
                      "
                    >

                      <Icon
                        className="
                          h-5
                          w-5
                          text-yellow-400
                          transition-colors
                          duration-300
                          group-hover:text-black
                        "
                      />

                    </div>

                    <div>

                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.25em]
                          text-zinc-500
                        "
                      >
                        Become a
                      </p>

                      <h3
                        className="
                          mt-1
                          text-base
                          font-semibold
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-yellow-400
                        "
                      >
                        {item.title}
                      </h3>

                    </div>

                  </div>

                  <ArrowRight
                    className="
                      h-5
                      w-5
                      text-zinc-500
                      transition-all
                      duration-300
                      group-hover:translate-x-2
                      group-hover:text-yellow-400
                    "
                  />

                </Link>

              );

            })}

          </div>

          {/* Statistics */}

          <div className="mt-2">

            <div
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-zinc-900/90
                backdrop-blur-xl
                shadow-[0_30px_80px_rgba(0,0,0,0.45)]
                px-10
                py-8
              "
            >

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                {statistics.map((stat) => (

                  <div
                    key={stat.label}
                    className="
                      text-center
                      lg:border-l
                      first:lg:border-l-0
                      border-white/10
                    "
                  >

                    <h3
                      className="
                        text-4xl
                        lg:text-5xl
                        font-extrabold
                        tracking-tight
                        text-yellow-400
                      "
                    >
                      {stat.value}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        uppercase
                        tracking-[0.18em]
                        text-zinc-400
                      "
                    >
                      {stat.label}
                    </p>
                                                        </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Fade */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-t
          from-[#050505]
          to-transparent
        "
      />

    </section>
  );
}