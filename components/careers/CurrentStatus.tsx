import {
  Users,
  TrendingUp,
  ClipboardList,
  Landmark,
} from "lucide-react";

const items = [
  {
    icon: Users,
    title: (
      <>
        Founding
        <br />
        Focus
      </>
    ),
    description:
      "We're currently recruiting Founding Members who will help shape South Africa's first youth-owned retail ecosystem.",
  },
  {
    icon: TrendingUp,
    title: (
      <>
        Future
        <br />
        Expansion
      </>
    ),
    description:
      "National recruitment will begin as KASI QUICKSHOP expands across South Africa.",
  },
  {
    icon: ClipboardList,
    title: (
      <>
        Register
        <br />
        Early
      </>
    ),
    description:
      "Registering your interest today helps us understand future workforce demand and skills requirements.",
  },
  {
    icon: Landmark,
    title: (
      <>
        National
        <br />
        Impact
      </>
    ),
    description:
      "Every registration strengthens our ability to demonstrate employment demand to government and strategic partners.",
  },
];

export default function CurrentStatus() {
  return (
    <section
      id="current-status"
      className="relative border-t border-white/10 bg-[#050505]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        {/* Section Label */}

        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-yellow-400">
          CURRENT STATUS
        </p>

        {/* Heading */}

        <h2 className="mx-auto mt-6 max-w-5xl text-center text-4xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
          Building The Team
          <br />
          That Will Build
          <br />
          The Future.
        </h2>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-zinc-400">
          We're currently assembling our Founding Members and strategic
          leadership team. While operational recruitment has not yet begun,
          we're inviting South Africans to register their interest so we can
          better understand future workforce demand and connect with talented
          people as we grow.
        </p>

        {/* Features */}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`relative px-8 text-center ${
                  index !== 0 ? "xl:border-l xl:border-white/10" : ""
                }`}
              >
                <div className="flex justify-center">
                  <Icon
                    className="h-10 w-10 text-yellow-400"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-tight text-white">
                  {item.title}
                </h3>

                <p className="mx-auto mt-5 max-w-[240px] text-[15px] leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Gold Divider */}

      <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-70" />
    </section>
  );
}