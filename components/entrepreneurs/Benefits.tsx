import {
  CheckCircle2,
  Store,
  Truck,
  Cpu,
  GraduationCap,
  Users,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: Store,
    title: "Professionally Branded Store",
    description:
      "Launch with a modern Kasi QuickShop store designed to inspire confidence and attract customers.",
  },
  {
    icon: Truck,
    title: "National Supply Chain",
    description:
      "Access quality products through a reliable logistics network that keeps your shelves stocked.",
  },
  {
    icon: Cpu,
    title: "Retail Technology",
    description:
      "Manage inventory, sales and reporting with modern retail systems built for growth.",
  },
  {
    icon: GraduationCap,
    title: "Training Academy",
    description:
      "Receive practical business, retail and leadership training before and after opening.",
  },
  {
    icon: Users,
    title: "Ongoing Business Support",
    description:
      "You're never alone. Receive mentorship, operational support and continuous guidance.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted National Brand",
    description:
      "Operate under a growing South African brand focused on quality, professionalism and community.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">
              WHAT YOU RECEIVE
            </p>

            <h2 className="text-5xl font-extrabold text-white leading-tight">

              You're Not Starting
              <br />

              <span className="text-yellow-400">
                Alone.
              </span>

            </h2>

            <p className="text-zinc-300 text-xl leading-9 mt-8">

              Building a business can be challenging.
              Kasi QuickShop provides the systems,
              technology and support network that allow
              entrepreneurs to focus on serving customers
              and growing successful businesses.

            </p>

            <div className="space-y-5 mt-10">

              {[
                "Store design and branding",
                "Technology platform",
                "Training and mentorship",
                "National purchasing power",
                "Marketing support",
                "Reliable product supply",
                "Operational guidance",
                "Long-term business growth",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2 className="text-yellow-400 w-6 h-6" />

                  <p className="text-zinc-200 text-lg">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid sm:grid-cols-2 gap-6">

            {benefits.map((item, index) => {

              const Icon = item.icon;

              return (

                <div
                  key={index}
                  className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 hover:border-yellow-400 transition duration-300"
                >

                  <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center mb-5">

                    <Icon className="w-7 h-7 text-black" />

                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">

                    {item.title}

                  </h3>

                  <p className="text-zinc-400 leading-7">

                    {item.description}

                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}