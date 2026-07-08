import {
  GraduationCap,
  Smartphone,
  Building2,
  ShoppingBag,
  Truck,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";

const ecosystem = [
  {
    icon: GraduationCap,
    title: "KASI ACADEMY",
    description:
      "Training, mentorship and business development for entrepreneurs.",
  },
  {
    icon: Smartphone,
    title: "KASI TECHNOLOGY",
    description:
      "Digital ordering, inventory management and business intelligence.",
  },
  {
    icon: Building2,
    title: "KASI INFRASTRUCTURE",
    description:
      "Store construction, warehouses and future distribution centres.",
  },
  {
    icon: ShoppingBag,
    title: "KASI WHOLESALE",
    description:
      "Bulk purchasing power and supplier partnerships.",
  },
  {
    icon: Truck,
    title: "KASI LOGISTICS",
    description:
      "Reliable stock delivery and national distribution.",
  },
  {
    icon: ShoppingBag,
    title: "KASI RETAIL",
    description:
      "Modern branded stores owned and operated by entrepreneurs.",
  },
];

export default function Ecosystem() {
  return (
    <section className="bg-black py-24">

      <Container>

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-16">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">

            OUR <span className="text-yellow-400">ECOSYSTEM</span>

          </h2>

          <p className="text-zinc-400 text-lg md:text-xl mt-6">

            An integrated ecosystem built to empower entrepreneurs
            and transform township retail across South Africa.

          </p>

        </div>

        {/* Desktop */}

        <div className="hidden xl:flex items-start justify-between gap-5">

          {ecosystem.map((item, index) => {

            const Icon = item.icon;

            return (
              <>

                <div
                  key={item.title}
                  className="flex-1 text-center"
                >

                  <Icon
                    size={58}
                    className="mx-auto mb-6 text-yellow-400"
                  />

                  <h3 className="text-xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-7">
                    {item.description}
                  </p>

                </div>

                {index !== ecosystem.length - 1 && (
                  <ArrowRight
                    size={22}
                    className="text-yellow-400 mt-5 flex-shrink-0"
                  />
                )}

              </>
            );

          })}

        </div>

        {/* Tablet & Mobile */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:hidden">

          {ecosystem.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  bg-zinc-900
                  border
                  border-zinc-800
                  rounded-2xl
                  p-8
                  text-center
                  hover:border-yellow-400
                  transition-all
                  duration-300
                "
              >

                <Icon
                  size={56}
                  className="mx-auto mb-5 text-yellow-400"
                />

                <h3 className="font-bold text-xl mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-400">
                  {item.description}
                </p>

              </div>
            );

          })}

        </div>

      </Container>

    </section>
  );
}