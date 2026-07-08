import {
  Store,
  Briefcase,
  Handshake,
  Truck,
  Newspaper,
  MessageCircle,
} from "lucide-react";

const contacts = [
  {
    icon: Store,
    title: "Entrepreneurs",
    description:
      "Interested in owning a Kasi QuickShop store? Speak with our entrepreneur development team.",
  },
  {
    icon: Briefcase,
    title: "Investors",
    description:
      "Learn about investment opportunities and our long-term national growth strategy.",
  },
  {
    icon: Handshake,
    title: "Careers",
    description:
      "Explore career opportunities and become part of our growing team.",
  },
  {
    icon: Truck,
    title: "Suppliers",
    description:
      "Partner with Kasi QuickShop by supplying products, logistics or business services.",
  },
  {
    icon: Newspaper,
    title: "Media",
    description:
      "Press enquiries, interviews, announcements and media partnerships.",
  },
  {
    icon: MessageCircle,
    title: "General Enquiries",
    description:
      "Questions about Kasi QuickShop? Our team is ready to assist you.",
  },
];

export default function ContactOptions() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">
            CONTACT OPTIONS
          </p>

          <h2 className="text-5xl font-extrabold text-black leading-tight">

            How Can
            <br />

            We Help You?

          </h2>

          <p className="text-zinc-600 text-xl leading-9 mt-8">

            Choose the option that best matches your enquiry and we'll
            connect you with the right team.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {contacts.map((contact, index) => {

            const Icon = contact.icon;

            return (

              <div
                key={index}
                className="bg-zinc-50 border border-zinc-200 rounded-[32px] p-8 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >

                <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6">

                  <Icon className="w-8 h-8 text-black" />

                </div>

                <h3 className="text-2xl font-bold mb-4">

                  {contact.title}

                </h3>

                <p className="text-zinc-600 leading-8">

                  {contact.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}