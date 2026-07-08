import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-black py-28">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-6xl font-extrabold text-white leading-tight">

          Ready To Build
          <br />

          <span className="text-yellow-400">
            South Africa's Future?
          </span>

        </h2>

        <p className="text-zinc-400 text-xl mt-8">

          Join entrepreneurs, professionals and investors
          building South Africa's first youth-owned retail ecosystem.

        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          <Button>
            Become An Entrepreneur
          </Button>

          <Button variant="outline">
            Partner With Us
          </Button>

          <Button variant="outline">
            Contact Us
          </Button>

        </div>

      </div>

    </section>
  );
}