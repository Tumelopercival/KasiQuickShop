import {
  Laptop,
  Truck,
  Store,
  Building2,
  Boxes,
  Megaphone,
  Briefcase,
  Users,
  Headset,
} from "lucide-react";

const departments = [
  {
    icon: Laptop,
    title: "Technology",
    description:
      "Build software, digital platforms and technology that powers the Kasi QuickShop ecosystem.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Coordinate nationwide product movement, fleet operations and distribution efficiency.",
  },
  {
    icon: Store,
    title: "Retail Operations",
    description:
      "Support entrepreneurs and ensure every Kasi QuickShop delivers exceptional customer experiences.",
  },
  {
    icon: Building2,
    title: "Infrastructure",
    description:
      "Develop modern stores, distribution centres and facilities that support national expansion.",
  },
  {
    icon: Boxes,
    title: "Wholesale",
    description:
      "Manage supplier relationships, procurement and inventory for a reliable national supply chain.",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description:
      "Strengthen the Kasi QuickShop brand through campaigns, digital media and community engagement.",
  },
  {
    icon: Briefcase,
    title: "Finance",
    description:
      "Support sustainable growth through financial planning, reporting and investment management.",
  },
  {
    icon: Users,
    title: "Human Resources",
    description:
      "Recruit, develop and support talented people who will build the future of Kasi QuickShop.",
  },
  {
    icon: Headset,
    title: "Customer Success",
    description:
      "Deliver world-class support to entrepreneurs, partners and customers across the ecosystem.",
  },
];

export default function Departments() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">

            DEPARTMENTS

          </p>

          <h2 className="text-5xl font-extrabold text-black leading-tight">

            Opportunities
            <br />

            Across The Business.

          </h2>

          <p className="text-zinc-600 text-xl leading-9 mt-8">

            Kasi QuickShop is more than a retail company.
            We're building a complete ecosystem where talented
            professionals from different disciplines work together
            to create lasting national impact.

          </p>

        </div>

        {/* Department Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {departments.map((department, index) => {

            const Icon = department.icon;

            return (

              <div
                key={index}
                className="bg-zinc-50 border border-zinc-200 rounded-[32px] p-8 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6">

                  <Icon className="w-8 h-8 text-black" />

                </div>

                <h3 className="text-2xl font-bold mb-4">

                  {department.title}

                </h3>

                <p className="text-zinc-600 leading-8">

                  {department.description}

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

                GROW WITH US

              </p>

              <h3 className="text-4xl font-bold text-white leading-tight">

                Every Career
                <br />

                Helps Build
                <br />

                The Bigger Vision.

              </h3>

            </div>

            <div>

              <p className="text-zinc-300 text-lg leading-9">

                Whether you're designing software, managing logistics,
                supporting entrepreneurs or leading strategy, every role
                contributes to building South Africa's first youth-owned
                national retail ecosystem.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}