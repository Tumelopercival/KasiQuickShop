import { Boxes, Package, ShoppingCart } from "lucide-react";

export default function Wholesale() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">
          WHOLESALE
        </p>

        <h2 className="text-5xl font-extrabold mb-8">
          National Buying Power
        </h2>

        <p className="text-zinc-600 text-xl leading-9 max-w-4xl mb-16">
          Central procurement creates competitive pricing,
          reliable supply and consistent product availability.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-50 rounded-3xl p-8 text-center">
            <Boxes className="mx-auto text-yellow-500 w-12 h-12 mb-5"/>
            <h3 className="font-bold text-2xl">Procurement</h3>
          </div>

          <div className="bg-zinc-50 rounded-3xl p-8 text-center">
            <Package className="mx-auto text-yellow-500 w-12 h-12 mb-5"/>
            <h3 className="font-bold text-2xl">Inventory</h3>
          </div>

          <div className="bg-zinc-50 rounded-3xl p-8 text-center">
            <ShoppingCart className="mx-auto text-yellow-500 w-12 h-12 mb-5"/>
            <h3 className="font-bold text-2xl">Buying Power</h3>
          </div>

        </div>

      </div>

    </section>
  );
}