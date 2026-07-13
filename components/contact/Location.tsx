import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Building2,
} from "lucide-react";

export default function Location() {
  return (
    <section className="bg-[#050505] py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Our Office
          </p>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
            Building South Africa's
            <br />
            <span className="text-yellow-400">
              Future Retail Ecosystem.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            While our ecosystem continues expanding across South Africa,
            our team is based in Johannesburg and is available to discuss
            partnerships, investment opportunities and entrepreneurial
            opportunities.
          </p>

        </div>

        {/* Information */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {/* Location */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">

            <MapPin className="mx-auto h-10 w-10 text-yellow-400" />

            <h3 className="mt-6 text-xl font-semibold text-white">
              Location
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Johannesburg
              <br />
              Gauteng
              <br />
              South Africa
            </p>

          </div>

          {/* Email */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">

            <Mail className="mx-auto h-10 w-10 text-yellow-400" />

            <h3 className="mt-6 text-xl font-semibold text-white">
              Email
            </h3>

            <p className="mt-4 break-all leading-7 text-zinc-400">
              info@kasiquickshop.com
            </p>

          </div>

          {/* Phone */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">

            <Phone className="mx-auto h-10 w-10 text-yellow-400" />

            <h3 className="mt-6 text-xl font-semibold text-white">
              Phone
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              +27 XX XXX XXXX
            </p>

          </div>

          {/* Business Hours */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">

            <Clock className="mx-auto h-10 w-10 text-yellow-400" />

            <h3 className="mt-6 text-xl font-semibold text-white">
              Business Hours
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Monday – Friday
              <br />
              08:00 – 17:00
            </p>

          </div>

          {/* Headquarters */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">

            <Building2 className="mx-auto h-10 w-10 text-yellow-400" />

            <h3 className="mt-6 text-xl font-semibold text-white">
              Headquarters
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              KASI QUICKSHOP
              <br />
              National Support Office
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}