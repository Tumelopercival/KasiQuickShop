import { Store, Users, ShoppingBag } from "lucide-react";

export default function Retail() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">
          RETAIL
        </p>

        <h2 className="text-5xl font-extrabold mb-8">
          Modern Township Retail
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-50 rounded-3xl p-8 text-center">
            <Store className="mx-auto text-yellow-500 w-12 h-12 mb-5"/>
            <h3 className="text-2xl font-bold">Premium Stores</h3>
          </div>

          <div className="bg-zinc-50 rounded-3xl p-8 text-center">
            <Users className="mx-auto text-yellow-500 w-12 h-12 mb-5"/>
            <h3 className="text-2xl font-bold">Entrepreneurs</h3>
          </div>

          <div className="bg-zinc-50 rounded-3xl p-8 text-center">
            <ShoppingBag className="mx-auto text-yellow-500 w-12 h-12 mb-5"/>
            <h3 className="text-2xl font-bold">Customers</h3>
          </div>

        </div>

      </div>

    </section>
  );
}