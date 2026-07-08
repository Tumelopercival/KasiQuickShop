export default function NationalVision() {
  const journey = [
    "One Entrepreneur",
    "One Store",
    "One Community",
    "One Township",
    "One City",
    "One Province",
    "South Africa",
    "Africa",
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">
            NATIONAL VISION
          </p>

          <h2 className="text-5xl font-extrabold text-black">
            Building One Community
            <br />
            At A Time
          </h2>

          <p className="text-zinc-600 text-xl mt-6 max-w-3xl mx-auto">
            Every successful entrepreneur strengthens a family, every store
            strengthens a community and every community strengthens South Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <div className="space-y-4">

              {journey.map((step, index) => (
                <div key={index} className="flex items-center gap-5">

                  <div className="w-5 h-5 rounded-full bg-yellow-400" />

                  <h3 className="text-2xl font-bold text-black">
                    {step}
                  </h3>

                </div>
              ))}

            </div>

          </div>

          <div>

            <p className="text-lg leading-9 text-zinc-700">

              Kasi QuickShop begins with one entrepreneur who chooses
              to build something meaningful. That entrepreneur creates
              a successful store. The store serves its community,
              creates employment and inspires others to do the same.

              <br /><br />

              As more entrepreneurs join, communities become stronger,
              local economies grow and a national retail ecosystem
              begins to emerge.

              <br /><br />

              Our ambition is simple:
              to build a proudly South African retail network that
              reaches every province before expanding across Africa.

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}