import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[580px] overflow-hidden"
    >
      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/protea-glen-hero.png')",
          backgroundPosition: "center center",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/50" />

      {/* Left Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}

      <div className="relative z-10 h-full">

        <div className="pl-14 pt-20 max-w-3xl">

          <h1 className="text-5xl font-extrabold leading-none text-white">
            BUILDING SOUTH AFRICA'S FIRST
            <br />
            <span className="text-yellow-400">YOUTH-OWNED</span>
            <br />
            RETAIL ECOSYSTEM
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-xl">
            Connecting entrepreneurs through technology,
            logistics, training and distribution.
          </p>

        </div>

        {/* Center Buttons */}

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">

          <div className="flex gap-4">

            <Button>
              BECOME A FOUNDER
            </Button>

            <Button variant="outline">
              INVESTOR INFORMATION
            </Button>

            <Button variant="outline">
              JOIN THE MOVEMENT
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}