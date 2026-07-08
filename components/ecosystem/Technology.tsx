import { Laptop, Smartphone, Database } from "lucide-react";

export default function Technology() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">
              TECHNOLOGY
            </p>

            <h2 className="text-5xl font-extrabold mb-8">
              Connecting Every Store Through Technology
            </h2>

            <p className="text-zinc-600 text-xl leading-9">
              Every Kasi QuickShop entrepreneur is supported by a
              modern digital platform that simplifies inventory,
              ordering, reporting and business management.
            </p>

          </div>

          <div className="grid gap-6">

            <div className="bg-zinc-50 rounded-3xl p-8 flex gap-6">
              <Laptop className="text-yellow-500 w-10 h-10"/>
              <div>
                <h3 className="font-bold text-2xl">Retail Software</h3>
                <p className="text-zinc-600 mt-2">Smart POS and business management.</p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-3xl p-8 flex gap-6">
              <Smartphone className="text-yellow-500 w-10 h-10"/>
              <div>
                <h3 className="font-bold text-2xl">Mobile Ordering</h3>
                <p className="text-zinc-600 mt-2">Order inventory from anywhere.</p>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-3xl p-8 flex gap-6">
              <Database className="text-yellow-500 w-10 h-10"/>
              <div>
                <h3 className="font-bold text-2xl">Business Analytics</h3>
                <p className="text-zinc-600 mt-2">Real-time sales and stock insights.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}