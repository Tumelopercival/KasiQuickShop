import { Truck, Warehouse, Route } from "lucide-react";

export default function Logistics() {
  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1">

            <div className="grid gap-6">

              <div className="bg-black rounded-3xl border border-zinc-800 p-8 flex gap-6">
                <Truck className="text-yellow-400 w-10 h-10"/>
                <div>
                  <h3 className="text-white text-2xl font-bold">Fleet</h3>
                  <p className="text-zinc-400 mt-2">Reliable national delivery.</p>
                </div>
              </div>

              <div className="bg-black rounded-3xl border border-zinc-800 p-8 flex gap-6">
                <Warehouse className="text-yellow-400 w-10 h-10"/>
                <div>
                  <h3 className="text-white text-2xl font-bold">Warehousing</h3>
                  <p className="text-zinc-400 mt-2">Efficient stock distribution.</p>
                </div>
              </div>

              <div className="bg-black rounded-3xl border border-zinc-800 p-8 flex gap-6">
                <Route className="text-yellow-400 w-10 h-10"/>
                <div>
                  <h3 className="text-white text-2xl font-bold">Route Planning</h3>
                  <p className="text-zinc-400 mt-2">Optimised delivery routes.</p>
                </div>
              </div>

            </div>

          </div>

          <div className="order-1 lg:order-2">

            <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">
              LOGISTICS
            </p>

            <h2 className="text-5xl font-extrabold text-white mb-8">
              A National Supply Network
            </h2>

            <p className="text-zinc-300 text-xl leading-9">
              Our logistics network ensures every entrepreneur
              receives products quickly, efficiently and reliably.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}