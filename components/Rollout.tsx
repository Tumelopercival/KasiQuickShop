import Image from "next/image";
import {
  MapPin,
  Building2,
  Truck,
  Flag,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function Rollout() {
  return (
    <section id="rollout" className="bg-zinc-100 py-10">

      <div className="max-w-[1650px] mx-auto px-8">

        {/* HEADING */}

        <div className="text-center mb-8">

          <h2 className="text-5xl font-extrabold text-black">
            NATIONAL ROLLOUT PLAN
          </h2>

          <p className="text-zinc-600 text-xl mt-3">
            Living in every home in South Africa and beyond
          </p>

        </div>

        {/* DESKTOP */}

        <div className="hidden xl:flex items-center gap-5">

          {/* MAP */}

          <div className="w-[28%] flex justify-start">

            <Image
              src="/south-africa-map.png"
              alt="South Africa Rollout"
              width={460}
              height={460}
              className="object-contain"
            />

          </div>

          {/* TIMELINE */}

          <div className="w-[72%]">

            <div className="flex items-center justify-between">

              {/* PHASE 1 */}

              <div className="bg-white rounded-xl shadow-md p-5 w-40 text-center">

                <MapPin
                  size={28}
                  className="text-yellow-500 mx-auto mb-2"
                />

                <p className="text-yellow-500 font-bold text-[10px]">
                  PHASE 1
                </p>

                <h3 className="text-2xl font-bold text-black mt-2">
                  PILOT
                </h3>

                <p className="font-semibold text-black">
                  Soweto
                </p>

                <p className="text-xs text-zinc-600 mt-4">
                  Establish and perfect the model.
                </p>

              </div>

              <ArrowRight
                size={24}
                className="text-yellow-500 flex-shrink-0"
              />

              {/* PHASE 2 */}

              <div className="bg-white rounded-xl shadow-md p-5 w-40 text-center">

                <Building2
                  size={28}
                  className="text-yellow-500 mx-auto mb-2"
                />

                <p className="text-yellow-500 font-bold text-[10px]">
                  PHASE 2
                </p>

                <h3 className="text-2xl font-bold text-black mt-2">
                  EXPAND
                </h3>

                <p className="font-semibold text-black">
                  Johannesburg
                </p>

                <p className="text-xs text-zinc-600 mt-4">
                  Expand entrepreneur hubs.
                </p>

              </div>

              <ArrowRight
                size={24}
                className="text-yellow-500 flex-shrink-0"
              />

              {/* PHASE 3 */}

              <div className="bg-white rounded-xl shadow-md p-5 w-40 text-center">

                <Truck
                  size={28}
                  className="text-yellow-500 mx-auto mb-2"
                />

                <p className="text-yellow-500 font-bold text-[10px]">
                  PHASE 3
                </p>

                <h3 className="text-2xl font-bold text-black mt-2">
                  GROW
                </h3>

                <p className="font-semibold text-black">
                  Gauteng
                </p>

                <p className="text-xs text-zinc-600 mt-4">
                  Province-wide rollout.
                </p>

              </div>

              <ArrowRight
                size={24}
                className="text-yellow-500 flex-shrink-0"
              />

              {/* PHASE 4 */}

              <div className="bg-white rounded-xl shadow-md p-5 w-40 text-center">

                <Flag
                  size={28}
                  className="text-yellow-500 mx-auto mb-2"
                />

                <p className="text-yellow-500 font-bold text-[10px]">
                  PHASE 4
                </p>

                <h3 className="text-2xl font-bold text-black mt-2">
                  NATIONAL
                </h3>

                <p className="font-semibold text-black">
                  South Africa
                </p>

                <p className="text-xs text-zinc-600 mt-4">
                  Expand into all provinces.
                </p>

              </div>

              <ArrowRight
                size={24}
                className="text-yellow-500 flex-shrink-0"
              />

              {/* PHASE 5 */}

              <div className="bg-white rounded-xl shadow-md p-5 w-40 text-center">

                <Globe
                  size={28}
                  className="text-yellow-500 mx-auto mb-2"
                />

                <p className="text-yellow-500 font-bold text-[10px]">
                  PHASE 5
                </p>

                <h3 className="text-2xl font-bold text-black mt-2">
                  AFRICA
                </h3>

                <p className="font-semibold text-black">
                  The Continent
                </p>

                <p className="text-xs text-zinc-600 mt-4">
                  Replicate the model.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* MOBILE & TABLET */}

        <div className="xl:hidden">

          <div className="flex justify-center mb-10">

            <Image
              src="/south-africa-map.png"
              alt="South Africa Rollout"
              width={360}
              height={360}
              className="object-contain"
            />

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              ["PHASE 1", "PILOT", "Soweto", "Establish and perfect the model."],
              ["PHASE 2", "EXPAND", "Johannesburg", "Expand entrepreneur hubs."],
              ["PHASE 3", "GROW", "Gauteng", "Province-wide rollout."],
              ["PHASE 4", "NATIONAL", "South Africa", "Expand into all provinces."],
              ["PHASE 5", "AFRICA", "The Continent", "Replicate the model."],
            ].map(([phase, title, place, text]) => (

              <div
                key={phase}
                className="bg-white rounded-xl shadow-md p-6 text-center"
              >

                <p className="text-yellow-500 font-bold text-xs">
                  {phase}
                </p>

                <h3 className="text-2xl font-bold text-black mt-2">
                  {title}
                </h3>

                <p className="font-semibold text-black">
                  {place}
                </p>

                <p className="text-sm text-zinc-600 mt-4">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}