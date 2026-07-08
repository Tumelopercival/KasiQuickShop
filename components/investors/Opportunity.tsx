export default function Opportunity() {
  return (
    <section
      id="opportunity"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">
            MARKET OPPORTUNITY
          </p>

          <h2 className="text-5xl font-extrabold text-black leading-tight">

            A National Retail
            <br />

            Opportunity Worth
            <span className="text-yellow-500">
              {" "}R180+ Billion
            </span>

          </h2>

          <p className="text-zinc-600 text-xl leading-9 mt-8">

            South Africa's township retail economy is one of the country's
            largest consumer markets. Kasi QuickShop is creating a scalable
            ecosystem that combines technology, logistics, wholesale,
            infrastructure and entrepreneurship into one national platform.

          </p>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-24">

          <div className="bg-zinc-50 rounded-3xl p-8 text-center border border-zinc-200">

            <h3 className="text-5xl font-extrabold text-yellow-500">

              R180B+

            </h3>

            <p className="mt-4 text-zinc-700 font-medium">

              Township Retail Market

            </p>

          </div>

          <div className="bg-zinc-50 rounded-3xl p-8 text-center border border-zinc-200">

            <h3 className="text-5xl font-extrabold text-yellow-500">

              20,000

            </h3>

            <p className="mt-4 text-zinc-700 font-medium">

              Target Stores

            </p>

          </div>

          <div className="bg-zinc-50 rounded-3xl p-8 text-center border border-zinc-200">

            <h3 className="text-5xl font-extrabold text-yellow-500">

              150K+

            </h3>

            <p className="mt-4 text-zinc-700 font-medium">

              Potential Jobs

            </p>

          </div>

          <div className="bg-zinc-50 rounded-3xl p-8 text-center border border-zinc-200">

            <h3 className="text-5xl font-extrabold text-yellow-500">

              9

            </h3>

            <p className="mt-4 text-zinc-700 font-medium">

              Provinces

            </p>

          </div>

          <div className="bg-zinc-50 rounded-3xl p-8 text-center border border-zinc-200">

            <h3 className="text-5xl font-extrabold text-yellow-500">

              60M+

            </h3>

            <p className="mt-4 text-zinc-700 font-medium">

              Consumers

            </p>

          </div>

        </div>

        {/* Opportunity Grid */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h3 className="text-4xl font-bold text-black mb-8">

              Why This Market?

            </h3>

            <div className="space-y-6">

              <div className="flex gap-5">

                <div className="w-3 h-3 bg-yellow-500 rounded-full mt-3"></div>

                <p className="text-zinc-600 leading-8">

                  Township communities represent one of South Africa's largest
                  retail consumer markets.

                </p>

              </div>

              <div className="flex gap-5">

                <div className="w-3 h-3 bg-yellow-500 rounded-full mt-3"></div>

                <p className="text-zinc-600 leading-8">

                  Growing demand for organised, technology-enabled convenience
                  retail.

                </p>

              </div>

              <div className="flex gap-5">

                <div className="w-3 h-3 bg-yellow-500 rounded-full mt-3"></div>

                <p className="text-zinc-600 leading-8">

                  National logistics and wholesale integration creates
                  significant operational efficiencies.

                </p>

              </div>

              <div className="flex gap-5">

                <div className="w-3 h-3 bg-yellow-500 rounded-full mt-3"></div>

                <p className="text-zinc-600 leading-8">

                  Entrepreneur ownership drives local economic growth while
                  strengthening the national ecosystem.

                </p>

              </div>

            </div>

          </div>

          {/* Right Card */}

          <div className="bg-black rounded-[40px] p-12">

            <p className="uppercase tracking-[0.2em] text-yellow-400 mb-4">

              INVESTMENT THESIS

            </p>

            <h3 className="text-4xl font-bold text-white mb-8">

              Infrastructure.
              <br />

              Technology.
              <br />

              Entrepreneurship.

            </h3>

            <p className="text-zinc-300 leading-9 text-lg">

              Kasi QuickShop is not simply opening convenience stores.

              It is building an integrated retail ecosystem where
              distribution, wholesale, logistics, technology and
              entrepreneurship work together to create long-term,
              scalable national value.

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}