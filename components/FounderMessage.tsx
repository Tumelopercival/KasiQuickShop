import Image from "next/image";

export default function FounderMessage() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-white">
            A MESSAGE FROM THE{" "}
            <span className="text-yellow-400">FOUNDER</span>
          </h2>

          <p className="text-zinc-400 text-lg mt-4">
            Why Kasi QuickShop exists and the future we're building together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - Founder Image */}
          <div className="flex justify-center">

            <div className="relative">

              <Image
                src="/founder-ceo.png"
                alt="Tumelo Marumo"
                width={520}
                height={720}
                className="rounded-3xl shadow-2xl"
              />

              {/* Quote */}
              <div className="absolute left-6 right-6 bottom-6 bg-zinc-900/95 backdrop-blur-md border border-yellow-500 rounded-2xl p-6">

                <p className="text-yellow-400 italic text-lg font-semibold">
                  "No one is coming to build the future we want.
                  That responsibility belongs to us."
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT - Message */}

          <div>

            <h3 className="text-4xl font-bold text-white leading-tight">
              South Africa doesn't need another idea.
              <br />
              <span className="text-yellow-400">
                It needs people willing to build.
              </span>
            </h3>

            <div className="mt-8 space-y-8 text-lg leading-9 text-zinc-300">

              <p>
                When I started Kasi QuickShop, I wasn't trying to create
                another retail business. I was trying to solve a problem
                I've seen in our communities for years. Talented entrepreneurs
                work hard every day, but too many are left without the
                systems, opportunities and support they need to grow.
              </p>

              <p>
                Kasi QuickShop is our answer to that challenge. We're building
                a platform that brings together retail, technology, logistics,
                training and investment into one ecosystem that gives
                entrepreneurs a real chance to succeed. When local businesses
                grow, communities grow with them.
              </p>

              <p>
                This isn't something I can build alone. It will take
                entrepreneurs, professionals, suppliers, investors and every
                South African who believes our future should be built by us.
                If you believe in that vision, I invite you to join us.
              </p>

            </div>

            {/* Signature */}

            <div className="mt-12 border-t border-yellow-500 pt-8">

              <h4 className="text-3xl font-bold text-yellow-400">
                Tumelo Marumo
              </h4>

              <p className="text-white text-xl mt-2">
                Founder
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