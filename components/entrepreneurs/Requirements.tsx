import { CheckCircle2 } from "lucide-react";

const requirements = [
  "Be a South African citizen or permanent resident.",
  "Be at least 18 years old.",
  "Have an entrepreneurial mindset.",
  "Be committed to serving your community.",
  "Be willing to complete Kasi QuickShop training.",
  "Be passionate about building a long-term business.",
];

export default function Requirements() {
  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">
            REQUIREMENTS
          </p>

          <h2 className="text-5xl font-extrabold text-white">
            Who Can Apply?
          </h2>

          <p className="text-zinc-400 text-xl mt-6">
            We're looking for builders, leaders and entrepreneurs who want to create opportunities in their communities.
          </p>

        </div>

        <div className="space-y-6">

          {requirements.map((item) => (

            <div
              key={item}
              className="flex items-center gap-5 bg-zinc-900 rounded-2xl p-6 border border-zinc-800"
            >

              <CheckCircle2 className="text-yellow-400 w-7 h-7" />

              <p className="text-white text-lg">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}