import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";

export default function OfficeLocations() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.25em] text-yellow-500 font-semibold mb-4">

            OUR LOCATIONS

          </p>

          <h2 className="text-5xl font-extrabold text-black leading-tight">

            Building A National
            <br />

            Presence.

          </h2>

          <p className="text-zinc-600 text-xl leading-9 mt-8">

            Kasi QuickShop is building a national retail ecosystem.
            As we grow, regional offices and distribution centres
            will support entrepreneurs and communities across
            South Africa.

          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Headquarters */}

          <div className="bg-zinc-950 rounded-[40px] p-10">

            <div className="w-20 h-20 rounded-3xl bg-yellow-400 flex items-center justify-center mb-8">

              <Building2 className="w-10 h-10 text-black" />

            </div>

            <h3 className="text-4xl font-bold text-white mb-8">

              National Headquarters

            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">

                <MapPin className="w-6 h-6 text-yellow-400 mt-1" />

                <div>

                  <p className="text-white font-semibold">

                    Johannesburg

                  </p>

                  <p className="text-zinc-400">

                    Gauteng, South Africa

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <Phone className="w-6 h-6 text-yellow-400 mt-1" />

                <div>

                  <p className="text-white font-semibold">

                    Phone

                  </p>

                  <p className="text-zinc-400">

                    Coming Soon

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <Mail className="w-6 h-6 text-yellow-400 mt-1" />

                <div>

                  <p className="text-white font-semibold">

                    Email

                  </p>

                  <p className="text-zinc-400">

                    info@kasiquickshop.com

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <Clock3 className="w-6 h-6 text-yellow-400 mt-1" />

                <div>

                  <p className="text-white font-semibold">

                    Office Hours

                  </p>

                  <p className="text-zinc-400">

                    Monday – Friday

                    <br />

                    08:00 – 17:00

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Expansion */}

          <div className="bg-zinc-50 border border-zinc-200 rounded-[40px] p-10">

            <h3 className="text-4xl font-bold mb-8">

              Future Regional Offices

            </h3>

            <p className="text-zinc-600 leading-8 mb-10">

              As Kasi QuickShop expands, regional offices and
              distribution centres will strengthen our support
              for entrepreneurs throughout South Africa.

            </p>

            <div className="space-y-5">

              {[
                "Gauteng",
                "Western Cape",
                "KwaZulu-Natal",
                "Eastern Cape",
                "Free State",
                "Limpopo",
                "Mpumalanga",
                "North West",
                "Northern Cape",
              ].map((province) => (

                <div
                  key={province}
                  className="flex items-center gap-4 border-b border-zinc-200 pb-4"
                >

                  <MapPin className="w-5 h-5 text-yellow-500" />

                  <span className="text-lg text-zinc-700">

                    {province}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom Banner */}

        <div className="mt-24 bg-yellow-400 rounded-[40px] p-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <h3 className="text-4xl font-extrabold text-black leading-tight">

                One Headquarters.

                <br />

                Nine Provinces.

                <br />

                Endless Opportunity.

              </h3>

            </div>

            <div>

              <p className="text-black text-lg leading-9">

                Our vision extends far beyond a single office.
                We are building a connected national ecosystem
                that will support entrepreneurs, employees,
                investors and communities across every province
                in South Africa.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}