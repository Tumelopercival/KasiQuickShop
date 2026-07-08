import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">
            OUR PURPOSE
          </p>

          <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Building A Better Future,
            <br />
            Together.
          </h2>

          <p className="text-zinc-400 text-xl mt-6">
            Every decision we make is guided by one purpose:
            empowering entrepreneurs and strengthening communities.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Vision */}

          <div className="bg-zinc-900 border border-yellow-500/30 rounded-3xl p-10 hover:border-yellow-400 transition duration-300 shadow-xl">

            <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-8">

              <Eye className="w-8 h-8 text-black" />

            </div>

            <h3 className="text-4xl font-bold text-white mb-6">
              Our Vision
            </h3>

            <p className="text-zinc-300 leading-9 text-lg">

              To build South Africa's largest youth-owned retail ecosystem
              that empowers entrepreneurs, creates sustainable employment,
              strengthens communities and demonstrates what is possible when
              opportunity is shared.

            </p>

          </div>

          {/* Mission */}

          <div className="bg-zinc-900 border border-yellow-500/30 rounded-3xl p-10 hover:border-yellow-400 transition duration-300 shadow-xl">

            <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-8">

              <Target className="w-8 h-8 text-black" />

            </div>

            <h3 className="text-4xl font-bold text-white mb-6">
              Our Mission
            </h3>

            <p className="text-zinc-300 leading-9 text-lg">

              To provide entrepreneurs with retail infrastructure,
              technology, logistics, education and investment support,
              enabling them to build successful businesses that create jobs
              and contribute to South Africa's long-term economic growth.

            </p>

          </div>

        </div>

        {/* Bottom Statement */}

        <div className="mt-20 text-center max-w-5xl mx-auto">

          <p className="text-3xl font-bold text-white leading-relaxed">

            We believe sustainable growth happens when
            <span className="text-yellow-400">
              {" "}entrepreneurs, communities, suppliers and investors{" "}
            </span>
            grow together within one connected ecosystem.

          </p>

        </div>

      </div>

    </section>
  );
}