import {
  MessageCircle,
  Handshake,
  Store,
  Briefcase,
} from "lucide-react";

const options = [
  {
    icon: MessageCircle,
    title: (
      <>
        General
        <br />
        Enquiries
      </>
    ),
    description:
      "Questions about KASI QUICKSHOP, our ecosystem, products, services or general information.",
  },
  {
    icon: Handshake,
    title: (
      <>
        Partnerships
        <br />
        & Investment
      </>
    ),
    description:
      "Connect with us regarding strategic partnerships, suppliers, manufacturers and investment opportunities.",
  },
  {
    icon: Store,
    title: (
      <>
        Entrepreneur
        <br />
        Opportunities
      </>
    ),
    description:
      "Interested in owning and operating a KASI QUICKSHOP store? We'd love to hear from you.",
  },
  {
    icon: Briefcase,
    title: (
      <>
        Careers
        <br />
        & Founders
      </>
    ),
    description:
      "Register your interest in joining our founding team or future career opportunities.",
  },
];

export default function ContactOptions() {
  return (
    <section
      id="contact-options"
      className="relative border-t border-white/10 bg-[#050505]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">

        {/* Label */}

        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-yellow-400">
          HOW CAN WE HELP?
        </p>

        {/* Heading */}

        <h2 className="mx-auto mt-6 max-w-5xl text-center text-4xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
          Every Conversation
          <br />
          Starts With
          <span className="text-yellow-400">
            {" "}A Connection.
          </span>
        </h2>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-zinc-400">
          Whether you're looking to invest, partner, build a business or
          simply learn more about our mission, our team is ready to help.
        </p>

        {/* Options */}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

          {options.map((option, index) => {
            const Icon = option.icon;

            return (
              <div
                key={option.description}
                className={`px-8 text-center ${
                  index !== 0 ? "xl:border-l xl:border-white/10" : ""
                }`}
              >
                <div className="flex justify-center">
                  <Icon
                    className="h-10 w-10 text-yellow-400"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-tight text-white">
                  {option.title}
                </h3>

                <p className="mx-auto mt-5 max-w-[240px] text-[15px] leading-7 text-zinc-400">
                  {option.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

      {/* Gold Divider */}

      <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-70" />
    </section>
  );
}