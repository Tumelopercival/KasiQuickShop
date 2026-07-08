import { Building2, Hammer, Warehouse } from "lucide-react";

export default function Infrastructure() {
  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">
          INFRASTRUCTURE
        </p>

        <h2 className="text-5xl font-extrabold text-white mb-8">
          Building Modern Retail Infrastructure
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {[

            {icon:Building2,title:"Store Development"},
            {icon:Warehouse,title:"Distribution Centres"},
            {icon:Hammer,title:"Maintenance"}

          ].map((item)=>{

            const Icon=item.icon;

            return(

              <div key={item.title} className="bg-black border border-zinc-800 rounded-3xl p-8 text-center">

                <Icon className="mx-auto text-yellow-400 w-12 h-12 mb-6"/>

                <h3 className="text-white text-2xl font-bold">
                  {item.title}
                </h3>

              </div>

            )

          })}

        </div>

      </div>

    </section>
  );
}