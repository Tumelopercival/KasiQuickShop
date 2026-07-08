import {
  MapPinned,
  Building2,
  Warehouse,
  Store,
  Globe2,
} from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    icon: Building2,
    title: "Pilot Launch",
    description:
      "Establish the first flagship stores, technology platform and national distribution foundation.",
  },
  {
    phase: "Phase 2",
    icon: Warehouse,
    title: "Gauteng Expansion",
    description:
      "Expand throughout Gauteng while strengthening logistics, wholesale operations and entrepreneur support.",
  },
  {
    phase: "Phase 3",
    icon: MapPinned,
    title: "National Rollout",
    description:
      "Expand into all nine provinces through regional distribution centres and entrepreneur partnerships.",
  },
  {
    phase: "Phase 4",
    icon: Store,
    title: "20,000 Stores",
    description:
      "Build South Africa's largest youth-owned convenience retail ecosystem supported by technology and logistics.",
  },
  {
    phase: "Phase 5",
    icon: Globe2,
    title: "African Expansion",
    description:
      "Replicate the Kasi QuickShop ecosystem in strategic African markets using the proven South African model.",
  },
];

export default function RolloutPlan() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">
            NATIONAL ROLLOUT
          </p>

          <h2 className="text-5xl font-extrabold text-black leading-tight">

            A Roadmap For
            <br />

            National Growth

          </h2>

          <p className="text-zinc-600 text-xl leading-9 mt-8">

            Kasi QuickShop has been designed as a scalable ecosystem.
            Each phase strengthens infrastructure, logistics, technology
            and entrepreneur development before expanding into new regions.

          </p>

        </div>

        {/* Timeline */}

        <div className="space-y-10">

          {phases.map((phase, index) => {

            const Icon = phase.icon;

            return (

              <div
                key={index}
                className="bg-zinc-50 border border-zinc-200 rounded-[32px] p-8 hover:border-yellow-400 transition duration-300"
              >

                <div className="flex flex-col lg:flex-row items-center gap-8">

                  <div className="w-24 h-24 rounded-3xl bg-yellow-400 flex items-center justify-center">

                    <Icon className="w-12 h-12 text-black" />

                  </div>

                  <div className="flex-1">

                    <span className="text-yellow-500 font-bold uppercase tracking-wider">

                      {phase.phase}

                    </span>

                    <h3 className="text-3xl font-bold mt-2 mb-4">

                      {phase.title}

                    </h3>

                    <p className="text-zinc-600 text-lg leading-8">

                      {phase.description}

                    </p>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

        {/* Bottom Vision */}

        <div className="mt-24 bg-zinc-950 rounded-[40px] p-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">

                LONG-TERM VISION

              </p>

              <h3 className="text-4xl font-bold text-white leading-tight">

                Building South Africa's Largest
                Youth-Owned Retail Ecosystem.

              </h3>

            </div>

            <div>

              <p className="text-zinc-300 leading-9 text-lg">

                Every new entrepreneur strengthens the ecosystem.
                Every new distribution centre improves efficiency.
                Every new province expands opportunity.
                Our long-term objective is to build a nationally recognised
                retail network that creates sustainable businesses, employment
                and economic growth.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}