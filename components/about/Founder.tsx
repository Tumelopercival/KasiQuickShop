import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Founder() {
  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center">

            <Image
              src="/founder-ceo.png"
              alt="Founder"
              width={500}
              height={650}
              className="rounded-3xl"
            />

          </div>

          <div>

            <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">
              MEET THE FOUNDER
            </p>

            <h2 className="text-5xl font-extrabold text-white mb-8">
              Tumelo Marumo
            </h2>

            <p className="text-zinc-300 text-lg leading-9">

              Kasi QuickShop began with one belief:
              South Africans already have the talent,
              determination and ambition to build thriving
              businesses. What many entrepreneurs need is
              access to opportunity, systems and support.

              <br /><br />

              Our mission is to create an ecosystem where
              entrepreneurs are empowered to succeed while
              strengthening their communities and creating
              lasting economic impact.

            </p>

            <div className="mt-10">

              <Button>
                Read Founder's Message
              </Button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}