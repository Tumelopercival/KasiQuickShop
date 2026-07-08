import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Leadership() {
  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">
            LEADERSHIP
          </p>

          <h2 className="text-5xl font-extrabold text-white leading-tight">

            Leadership With
            <br />

            Purpose.

          </h2>

          <p className="text-zinc-300 text-xl leading-9 mt-8">

            Kasi QuickShop is driven by a long-term vision to build
            South Africa's first youth-owned retail ecosystem through
            innovation, entrepreneurship and national collaboration.

          </p>

        </div>

        {/* Founder */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}

          <div>

            <div className="relative overflow-hidden rounded-[40px]">

              <Image
                src="/founder.jpg"
                alt="Founder"
                width={700}
                height={850}
                className="w-full h-auto object-cover"
              />

            </div>

          </div>

          {/* Content */}

          <div>

            <p className="uppercase tracking-[0.2em] text-yellow-400 font-semibold mb-4">

              FOUNDER & CEO

            </p>

            <h3 className="text-5xl font-extrabold text-white leading-tight mb-8">

              Building More Than
              <br />

              A Retail Business.

            </h3>

            <p className="text-zinc-300 leading-9 text-lg mb-8">

              Kasi QuickShop was founded on a simple belief:

              South Africa already has the talent,
              ambition and entrepreneurial spirit needed to build
              world-class businesses.

            </p>

            <p className="text-zinc-300 leading-9 text-lg mb-8">

              Our mission is to provide the infrastructure,
              technology, logistics and opportunities that enable
              entrepreneurs to build sustainable businesses while
              strengthening local communities and creating lasting
              economic growth.

            </p>

            <p className="text-zinc-300 leading-9 text-lg mb-10">

              We are building an ecosystem designed to create value
              for entrepreneurs, investors, employees and South Africa
              for generations to come.

            </p>

            <Button>

              Meet The Founder

            </Button>

          </div>

        </div>

        {/* Vision Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-24">

          <div className="bg-black rounded-[32px] p-8 text-center border border-zinc-800">

            <h3 className="text-yellow-400 text-4xl font-bold mb-4">

              Vision

            </h3>

            <p className="text-zinc-300 leading-8">

              Build South Africa's first youth-owned national retail ecosystem.

            </p>

          </div>

          <div className="bg-black rounded-[32px] p-8 text-center border border-zinc-800">

            <h3 className="text-yellow-400 text-4xl font-bold mb-4">

              Mission

            </h3>

            <p className="text-zinc-300 leading-8">

              Empower entrepreneurs through technology, logistics, wholesale and infrastructure.

            </p>

          </div>

          <div className="bg-black rounded-[32px] p-8 text-center border border-zinc-800">

            <h3 className="text-yellow-400 text-4xl font-bold mb-4">

              Legacy

            </h3>

            <p className="text-zinc-300 leading-8">

              Create businesses, jobs and long-term economic opportunity across South Africa.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}