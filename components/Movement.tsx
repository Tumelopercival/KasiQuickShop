import Container from "./ui/Container";
import Button from "./ui/Button";

const movement = [
  {
    icon: "🏪",
    title: "ENTREPRENEURS",
    description:
      "Open your own Kasi QuickShop store and become part of South Africa's first youth-owned retail ecosystem.",
    button: "Become a Founder",
  },
  {
    icon: "👥",
    title: "PROFESSIONALS",
    description:
      "Contribute your skills, experience and leadership to help build a scalable retail platform for South Africa.",
    button: "Join Our Team",
  },
  {
    icon: "📈",
    title: "INVESTORS",
    description:
      "Invest in a high-impact platform designed to transform township retail while creating long-term economic value.",
    button: "Investor Information",
  },
];

export default function Movement() {
  return (
    <section className="bg-zinc-100 py-24">

      <Container>

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-16">

          <h2 className="text-4xl lg:text-6xl font-black text-black">
            BE PART OF THE MOVEMENT
          </h2>

          <p className="text-zinc-600 text-lg mt-6">
            Together we can transform township retail, empower
            entrepreneurs and build a stronger South African economy.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {movement.map((card) => (

            <div
              key={card.title}
              className="
                bg-white
                rounded-3xl
                border
                border-zinc-200
                p-10
                text-center
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-4xl mx-auto mb-8">

                {card.icon}

              </div>

              <h3 className="text-2xl font-black text-black mb-5">

                {card.title}

              </h3>

              <p className="text-zinc-600 mb-8 leading-7">

                {card.description}

              </p>

              <Button>

                {card.button}

              </Button>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}