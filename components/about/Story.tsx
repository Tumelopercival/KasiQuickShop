export default function Story() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Heading */}

        <div className="max-w-3xl mb-16">

          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">
            WHY WE EXIST
          </p>

          <h2 className="text-5xl font-extrabold text-black leading-tight">
            Every Great Movement
            <br />
            Starts With A Purpose.
          </h2>

        </div>

        {/* Two Columns */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <img
              src="/story-image.png"
              alt="Young South African Entrepreneurs"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

          </div>

          {/* Right */}

          <div>

            <div className="space-y-8 text-lg leading-9 text-zinc-700">

              <p>
                South Africa is filled with talented entrepreneurs who work
                tirelessly every day to build better lives for themselves and
                their families. What many lack is not ambition or determination,
                but access to the systems, opportunities and support that help
                businesses grow sustainably.
              </p>

              <p>
                Kasi QuickShop was founded to change that reality. We believe
                entrepreneurs should never have to build alone. By bringing
                together retail, technology, logistics, education and investment,
                we are creating an ecosystem that gives local businesses the
                foundation they need to succeed.
              </p>

              <p>
                Our vision extends far beyond opening stores. We are building a
                platform where entrepreneurs create jobs, strengthen communities
                and contribute to a stronger South African economy. Every new
                store represents another opportunity, another family empowered
                and another step toward a more inclusive future.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}