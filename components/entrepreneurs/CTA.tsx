import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-black py-28">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-6xl font-extrabold text-white leading-tight">

          Your Business.
          <br />

          <span className="text-yellow-400">
            Your Community.
          </span>

        </h2>

        <p className="text-zinc-400 text-xl mt-8 max-w-3xl mx-auto">

          Join South Africa's first youth-owned retail ecosystem and
          build a business that creates opportunity for your family and
          your community.

        </p>

        <div className="mt-12">

          <Button>

            Apply To Become A Kasi QuickShop Entrepreneur

          </Button>

        </div>

      </div>

    </section>
  );
}