import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

const impactStats = [
  { value: "20K+", label: "Stores" },
  { value: "150K+", label: "Jobs" },
  { value: "9", label: "Provinces" },
  { value: "R180B+", label: "Market" },
];

const impactItems = [
  "Youth Entrepreneurship",
  "Local Job Creation",
  "Township Economic Growth",
  "Improved Food Accessibility",
  "Digital Transformation",
  "Supplier Growth",
];

const journey = [
  {
    title: "Entrepreneur",
    subtitle: "Opportunity",
  },
  {
    title: "Store",
    subtitle: "Ownership",
  },
  {
    title: "Jobs",
    subtitle: "Created",
  },
  {
    title: "Community",
    subtitle: "Growth",
  },
  {
    title: "Prosperity",
    subtitle: "For All",
  },
];

export default function Impact() {
  return (
    <section className="bg-black py-24">

      <Container>

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-16">

          <h2 className="text-4xl lg:text-6xl font-black text-white">
            OUR <span className="text-yellow-400">IMPACT</span>
          </h2>

          <p className="text-zinc-400 text-lg mt-6">
            Transforming township retail, creating jobs and building
            sustainable entrepreneurial opportunities across South Africa.
          </p>

        </div>

        {/* Main Layout */}

        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Image */}

          <div className="lg:col-span-5">

            <Image
              src="/impact-community.png"
              alt="Community Impact"
              width={1400}
              height={900}
              className="rounded-3xl object-cover w-full h-[320px] lg:h-[420px]"
            />

          </div>

          {/* Right Side */}

          <div className="lg:col-span-7">

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              {impactStats.map((stat) => (

                <div
                  key={stat.label}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-center"
                >

                  <h3 className="text-yellow-400 text-3xl font-black">
                    {stat.value}
                  </h3>

                  <p className="text-white mt-2 text-sm">
                    {stat.label}
                  </p>

                </div>

              ))}

            </div>

            {/* Bullets */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {impactItems.map((item) => (

                <div
                  key={item}
                  className="flex gap-3 items-center"
                >

                  <CheckCircle
                    size={22}
                    className="text-yellow-400"
                  />

                  <span>{item}</span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Journey */}

        <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <div className="flex flex-wrap justify-center items-center gap-6">

            {journey.map((step, index) => (

              <div
                key={step.title}
                className="flex items-center gap-6"
              >

                <div className="text-center">

                  <h3 className="text-yellow-400 text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="text-zinc-400">
                    {step.subtitle}
                  </p>

                </div>

                {index !== journey.length - 1 && (
                  <ArrowRight className="text-yellow-400" />
                )}

              </div>

            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}