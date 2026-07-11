import {
  FileText,
  SearchCheck,
  ClipboardCheck,
  Handshake,
  Rocket,
  ArrowRight,
} from "lucide-react";

const journey = [
  {
    icon: FileText,
    title: "Application",
    description:
      "Complete the supplier application and provide your company information, product categories and supporting documentation.",
  },
  {
    icon: SearchCheck,
    title: "Review",
    description:
      "Our procurement team reviews your application to ensure it aligns with our operational and strategic requirements.",
  },
  {
    icon: ClipboardCheck,
    title: "Capability Assessment",
    description:
      "We evaluate production capacity, quality standards, certifications, logistics capability and commercial readiness.",
  },
  {
    icon: Handshake,
    title: "Commercial Discussion",
    description:
      "Successful applicants engage with our team to discuss commercial terms, operational alignment and partnership opportunities.",
  },
  {
    icon: Rocket,
    title: "Supplier Onboarding",
    description:
      "Approved suppliers complete onboarding and become integrated into the Kasi QuickShop supplier ecosystem.",
  },
  {
    icon: ClipboardCheck,
    title: "Approved Supplier",
    description:
      "Your business is now ready to support our growing national retail network through long-term collaboration.",
  },
];

export default function SupplierJourney() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#050505] to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}

        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-5">
            Supplier Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Your Journey to Becoming an
            <span className="text-yellow-400">
              {" "}Approved Supplier
            </span>
          </h2>

          <p className="mt-8 text-xl text-zinc-400 leading-9">
            Our supplier onboarding process is designed to be transparent,
            structured and collaborative, ensuring every partnership is built
            on quality, trust and long-term success.
          </p>
        </div>

        {/* Desktop */}

        <div className="hidden xl:flex items-start justify-between mt-24">
          {journey.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="flex items-start"
              >
                <div className="w-64">
                  <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-yellow-400" />
                  </div>

                  <div className="mt-6 text-yellow-400 font-bold text-sm tracking-widest">
                    STEP {index + 1}
                  </div>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-zinc-400 leading-7">
                    {step.description}
                  </p>
                </div>

                {index !== journey.length - 1 && (
                  <div className="flex items-center px-5 pt-7">
                    <ArrowRight className="w-8 h-8 text-yellow-400/60" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile */}

        <div className="xl:hidden mt-20 space-y-8">
          {journey.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title}>
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
                  <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-yellow-400" />
                  </div>

                  <div className="mt-6 text-yellow-400 text-sm font-bold tracking-widest">
                    STEP {index + 1}
                  </div>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-zinc-400 leading-8">
                    {step.description}
                  </p>
                </div>

                {index !== journey.length - 1 && (
                  <div className="flex justify-center py-5">
                    <ArrowRight className="rotate-90 w-8 h-8 text-yellow-400/60" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}