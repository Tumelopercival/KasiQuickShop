const pillars = [
  {
    title: "Technology",
    text: "Smart retail software connecting every store."
  },
  {
    title: "Wholesale",
    text: "National buying power and supplier partnerships."
  },
  {
    title: "Logistics",
    text: "Reliable distribution connecting every entrepreneur."
  },
  {
    title: "Infrastructure",
    text: "Modern stores and distribution centres."
  },
  {
    title: "Retail",
    text: "Premium township convenience stores."
  },
  {
    title: "Academy",
    text: "Training entrepreneurs for long-term success."
  }
];

export default function Pillars() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold">
            SIX PILLARS
          </p>

          <h2 className="text-5xl font-extrabold mt-4">

            Building Blocks Of
            <br />

            The Ecosystem

          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {pillars.map((pillar) => (

            <div
              key={pillar.title}
              className="bg-zinc-50 rounded-[32px] border border-zinc-200 p-8 hover:border-yellow-400 transition-all"
            >

              <h3 className="text-3xl font-bold mb-5">

                {pillar.title}

              </h3>

              <p className="text-zinc-600 leading-8">

                {pillar.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}