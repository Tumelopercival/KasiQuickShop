export default function Statistics() {
  return (
    <section className="relative z-20 -mt-12 px-4 sm:px-8 lg:px-12">

      <div className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl p-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Market */}

          <div className="text-center">

            <h3 className="text-yellow-400 text-3xl lg:text-4xl font-bold">
              R180B+
            </h3>

            <p className="text-white mt-2 text-sm lg:text-base">
              Township Retail Market
            </p>

          </div>

          {/* Stores */}

          <div className="text-center lg:border-l border-zinc-700">

            <h3 className="text-yellow-400 text-3xl lg:text-4xl font-bold">
              20,000
            </h3>

            <p className="text-white mt-2 text-sm lg:text-base">
              Target Stores
            </p>

          </div>

          {/* Jobs */}

          <div className="text-center lg:border-l border-zinc-700">

            <h3 className="text-yellow-400 text-3xl lg:text-4xl font-bold">
              150,000+
            </h3>

            <p className="text-white mt-2 text-sm lg:text-base">
              Potential Jobs
            </p>

          </div>

          {/* Provinces */}

          <div className="text-center lg:border-l border-zinc-700">

            <h3 className="text-yellow-400 text-3xl lg:text-4xl font-bold">
              9
            </h3>

            <p className="text-white mt-2 text-sm lg:text-base">
              Provincial Networks
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}