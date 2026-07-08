import {
  FileText,
  Search,
  Users,
  ClipboardCheck,
  BadgeCheck,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Apply",
    description:
      "Submit your application and tell us about your experience, ambitions and why you'd like to join Kasi QuickShop.",
  },
  {
    icon: Search,
    title: "Application Review",
    description:
      "Our recruitment team carefully reviews every application to identify candidates who align with our mission and values.",
  },
  {
    icon: Users,
    title: "Interview",
    description:
      "Meet with our team to discuss your experience, skills and how you can contribute to our vision.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessment",
    description:
      "Depending on the role, you may complete a practical or technical assessment relevant to the position.",
  },
  {
    icon: BadgeCheck,
    title: "Offer",
    description:
      "Successful candidates receive an employment offer together with onboarding information.",
  },
  {
    icon: Rocket,
    title: "Welcome Aboard",
    description:
      "Begin your journey with Kasi QuickShop and help us build South Africa's first youth-owned retail ecosystem.",
  },
];

export default function HiringProcess() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">
            HIRING PROCESS
          </p>

          <h2 className="text-5xl font-extrabold text-black leading-tight">
            Your Journey Starts Here.
          </h2>

          <p className="text-zinc-600 text-xl leading-9 mt-8">
            We've designed a simple, transparent recruitment process that
            helps us find talented people who are passionate about making a
            difference.
          </p>

        </div>

        {/* Timeline */}

        <div className="space-y-8">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={index}
                className="bg-zinc-50 border border-zinc-200 rounded-[32px] p-8 hover:border-yellow-400 transition-all duration-300"
              >

                <div className="flex flex-col lg:flex-row items-center gap-8">

                  <div className="w-20 h-20 rounded-2xl bg-yellow-400 flex items-center justify-center flex-shrink-0">

                    <Icon className="w-10 h-10 text-black" />

                  </div>

                  <div className="flex-1">

                    <span className="text-yellow-500 font-bold uppercase tracking-wider">

                      Step {index + 1}

                    </span>

                    <h3 className="text-3xl font-bold mt-2 mb-4">

                      {step.title}

                    </h3>

                    <p className="text-zinc-600 text-lg leading-8">

                      {step.description}

                    </p>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

        {/* Bottom Card */}

        <div className="mt-24 bg-zinc-950 rounded-[40px] p-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">

                OUR PROMISE

              </p>

              <h3 className="text-4xl font-bold text-white leading-tight">

                Every Application
                <br />

                Matters.

              </h3>

            </div>

            <div>

              <p className="text-zinc-300 text-lg leading-9">

                We know applying for a new opportunity is an important step.
                Our recruitment process is designed to be respectful,
                transparent and focused on finding people who share our
                passion for building something extraordinary.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}