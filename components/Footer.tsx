import Container from "./ui/Container";

const aboutLinks = [
  "About Us",
  "Our Ecosystem",
  "National Rollout",
  "Impact",
];

const contact = [
  "info@kasiquickshop.com",
  "Johannesburg",
  "South Africa",
];

const socials = [
  "Facebook",
  "Instagram",
  "LinkedIn",
  "TikTok",
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">

      <Container>

        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h3 className="text-3xl font-black text-yellow-400">
              KASI QUICKSHOP
            </h3>

            <p className="text-zinc-400 mt-4 leading-7">
              Convenient.
              <br />
              Affordable.
              <br />
              Yours.
            </p>

          </div>

          {/* About */}

          <div>

            <h4 className="font-bold text-white mb-5">
              About
            </h4>

            <ul className="space-y-3">

              {aboutLinks.map((item) => (

                <li
                  key={item}
                  className="text-zinc-400 hover:text-yellow-400 cursor-pointer transition"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="font-bold text-white mb-5">
              Contact
            </h4>

            <ul className="space-y-3">

              {contact.map((item) => (

                <li
                  key={item}
                  className="text-zinc-400"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Social */}

          <div>

            <h4 className="font-bold text-white mb-5">
              Follow Us
            </h4>

            <ul className="space-y-3">

              {socials.map((item) => (

                <li
                  key={item}
                  className="text-zinc-400 hover:text-yellow-400 cursor-pointer transition"
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

        </div>

        <div className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm">

          © 2026 Kasi QuickShop Corporation. All Rights Reserved.

        </div>

      </Container>

    </footer>
  );
}