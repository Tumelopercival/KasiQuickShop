import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-[780px] lg:h-[820px]"
    >
      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/about-hero.png')",
        }}
      />

      {/* Dark overlay */}

      <div className="absolute inset-0 bg-black/55" />

      {/* Left gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-5">
            Our Story
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            <span className="text-yellow-400">
              Building Opportunity.
            </span>

            <br />

            <span className="text-white">
              Building South Africa's Future Together.
            </span>

          </h1>

          <p className="mt-8 text-xl text-zinc-300 max-w-2xl leading-9">

            Kasi QuickShop exists to empower entrepreneurs by connecting
            retail, technology, logistics, education and investment into
            one national ecosystem where local businesses can grow and
            communities can thrive.

          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5">

            <Button>
              Explore Our Ecosystem
            </Button>

            <Button variant="outline">
              Join The Movement
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}