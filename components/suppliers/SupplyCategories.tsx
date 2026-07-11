import {
  Apple,
  Beef,
  Home,
  Sparkles,
  HeartPulse,
  Snowflake,
  Croissant,
  Milk,
  Laptop,
  Package,
  Hammer,
  Briefcase,
  Wrench,
  Truck,
  Boxes,
  Building2,
} from "lucide-react";

const categories = [
  {
    title: "Food & Beverages",
    description:
      "Packaged foods, beverages, snacks and everyday grocery products.",
    icon: Apple,
  },
  {
    title: "Fresh Produce",
    description:
      "Fruit, vegetables and fresh agricultural products sourced locally.",
    icon: Beef,
  },
  {
    title: "Household Products",
    description:
      "Daily household essentials for homes across South Africa.",
    icon: Home,
  },
  {
    title: "Cleaning Products",
    description:
      "Commercial and consumer cleaning solutions and hygiene products.",
    icon: Sparkles,
  },
  {
    title: "Personal Care",
    description:
      "Health, beauty, toiletries and personal wellness products.",
    icon: HeartPulse,
  },
  {
    title: "Frozen Foods",
    description:
      "Frozen meals, meat, vegetables and temperature-controlled goods.",
    icon: Snowflake,
  },
  {
    title: "Bakery",
    description:
      "Bread, baked goods, confectionery and artisan bakery products.",
    icon: Croissant,
  },
  {
    title: "Dairy",
    description:
      "Milk, cheese, yoghurt and refrigerated dairy products.",
    icon: Milk,
  },
  {
    title: "Technology",
    description:
      "Retail technology, POS systems, software and digital solutions.",
    icon: Laptop,
  },
  {
    title: "Packaging",
    description:
      "Retail packaging, cartons, labels and sustainable packaging solutions.",
    icon: Package,
  },
  {
    title: "Hardware",
    description:
      "Tools, maintenance products and operational equipment.",
    icon: Hammer,
  },
  {
    title: "Office Supplies",
    description:
      "Stationery, office consumables and workplace essentials.",
    icon: Briefcase,
  },
  {
    title: "Building Materials",
    description:
      "Construction products supporting new retail infrastructure.",
    icon: Building2,
  },
  {
    title: "Professional Services",
    description:
      "Legal, finance, consulting, compliance and business support services.",
    icon: Briefcase,
  },
  {
    title: "Logistics",
    description:
      "Transportation, warehousing, distribution and fulfilment services.",
    icon: Truck,
  },
  {
    title: "Equipment",
    description:
      "Commercial refrigeration, shelving, store fixtures and machinery.",
    icon: Boxes,
  },
];

export default function SupplyCategories() {
  return (
    <section
      id="categories"
      className="py-28 bg-gradient-to-b from-[#050505] to-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}

        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-5">
            Supply Categories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Opportunities Across
            <span className="text-yellow-400">
              {" "}Every Major Supply Category
            </span>
          </h2>

          <p className="mt-8 text-xl text-zinc-400 leading-9">
            Kasi QuickShop is building a diverse supplier ecosystem that
            connects manufacturers, wholesalers, distributors and service
            providers with a growing national retail network.
          </p>
        </div>

        {/* Grid */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-yellow-400/40
                  hover:bg-white/10
                  hover:shadow-[0_20px_60px_rgba(250,204,21,0.08)]
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-400/20">
                  <Icon className="w-7 h-7 text-yellow-400" />
                </div>

                <h3 className="mt-7 text-xl font-semibold text-white">
                  {category.title}
                </h3>

                <p className="mt-4 text-zinc-400 leading-7">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}