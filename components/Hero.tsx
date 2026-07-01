import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[640px] md:min-h-[680px] lg:h-[580px] overflow-hidden"
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
      <div className="absolute inset-0 bg-black/55" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full max-w-7xl mx-auto px-6 md:px-10 lg:px-14">

        {/* Hero Text */}
        <div className="pt-20 md:pt-24 max-w-4xl">

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              leading-[0.95]
              text-white
            "
          >
            BUILDING SOUTH AFRICA'S FIRST
            <br />
            <span className="text-yellow-400">
              YOUTH-OWNED
            </span>
            <br />
            RETAIL ECOSYSTEM
          </h1>

          <p
            className="
              mt-6
              text-base
              sm:text-lg
              md:text-xl
              text-gray-300
              max-w-xl
            "
          >
            Connecting entrepreneurs through technology,
            logistics, training and distribution.
          </p>

        </div>

        {/* CTA Buttons */}
        <div className="pb-4 md:pb-14">

          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              w-full
              sm:w-auto
            "
          >
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