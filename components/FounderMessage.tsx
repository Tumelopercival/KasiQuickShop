import Image from "next/image";

export default function FounderMessage() {
  return (
    <section
      id="founder"
      className="bg-black py-20 px-8 border-t border-zinc-800"
    >
      <div className="max-w-[1700px] mx-auto">

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">

          {/* LEFT - CEO PHOTO */}

          <div className="flex justify-center">

            <div className="relative">

              <Image
                src="/founder-ceo.png"
                alt="Tumelo Marumo"
                width={460}
                height={620}
                priority
                className="rounded-3xl shadow-2xl object-cover"
              />

              {/* Quote */}

              <div className="absolute -bottom-8 left-6 right-6 bg-zinc-900 border border-yellow-500 rounded-2xl p-5 shadow-xl">

                <p className="text-yellow-400 italic text-lg leading-relaxed">
                  “If no one is coming to build the future we want,
                  then we must become the people who do.”
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT - MESSAGE */}

          <div>

            <p className="uppercase tracking-[0.35em] text-yellow-400 font-bold mb-4">
              A Message From Our Founder & CEO
            </p>

            <h2 className="text-5xl font-extrabold text-white leading-tight mb-5">
              Building South Africa's Future,
              <br />
              Together.
            </h2>

            <h3 className="text-3xl font-bold text-yellow-400 mb-8">
              The responsibility belongs to all of us.
            </h3>

            <div className="space-y-5 text-zinc-300 text-xl leading-8">

              <p>
                Kasi QuickShop was founded on a simple belief: South Africa
                already has talented entrepreneurs, resilient communities and
                ambitious young people. What we have lacked is an ecosystem
                that connects opportunity, technology, infrastructure and
                investment into a single platform that enables people to build
                sustainable businesses and create lasting economic value.
              </p>

              <p>
                We are building far more than a network of convenience stores.
                We are creating a national retail ecosystem that empowers
                entrepreneurs through modern infrastructure, reliable supply
                chains, digital technology, education and strategic
                partnerships. Our goal is to restore economic participation,
                create meaningful employment and strengthen township economies
                across South Africa.
              </p>

              <p>
                I believe the future of our communities will not be built by
                waiting for someone else to act—it will be built by those
                willing to lead. I invite entrepreneurs, professionals,
                suppliers and investors to join us in building a business that
                creates opportunity today and leaves a legacy for generations
                to come.
              </p>

            </div>

            {/* Signature */}

            <div className="mt-10 pt-6 border-t border-yellow-500">

              <h4 className="text-4xl font-bold text-yellow-400">
                Tumelo Marumo
              </h4>

              <p className="text-xl text-white mt-2">
                Founder & Chief Executive Officer
              </p>

              <p className="text-zinc-500 mt-1">
                Kasi QuickShop Cooperation
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}