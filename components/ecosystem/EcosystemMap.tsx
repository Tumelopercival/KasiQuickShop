import {
  Laptop,
  Truck,
  Boxes,
  Building2,
  Store,
  GraduationCap,
} from "lucide-react";

const items = [
  { icon: Laptop, title: "Technology" },
  { icon: Truck, title: "Logistics" },
  { icon: Boxes, title: "Wholesale" },
  { icon: Building2, title: "Infrastructure" },
  { icon: Store, title: "Retail" },
  { icon: GraduationCap, title: "Academy" },
];

export default function EcosystemMap() {
  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold">
            HOW EVERYTHING CONNECTS
          </p>

          <h2 className="text-5xl font-extrabold text-white mt-4">
            One Connected Ecosystem
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="bg-black border border-zinc-800 rounded-[32px] p-10 text-center hover:border-yellow-400 transition-all"
              >

                <div className="w-20 h-20 rounded-full bg-yellow-400 mx-auto flex items-center justify-center mb-6">

                  <Icon className="w-10 h-10 text-black"/>

                </div>

                <h3 className="text-2xl text-white font-bold">

                  {item.title}

                </h3>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}