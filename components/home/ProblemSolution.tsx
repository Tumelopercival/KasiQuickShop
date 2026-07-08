import Image from "next/image";

export default function ProblemSolution() {
  return (
    <section
      id="about"
      className="bg-zinc-100 -mt-12 pt-20 pb-16 px-4 sm:px-8 lg:px-12 text-black"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 items-center">

        {/* LEFT IMAGE */}

        <div className="order-1">
          <Image
            src="/problem-spaza.png"
            alt="Township Spaza Shop"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full h-[300px] lg:h-[350px]"
          />
        </div>

        {/* PROBLEM */}

        <div className="order-2">

          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">
            THE PROBLEM
          </h2>

          <p className="text-gray-700 mb-8">
            Township entrepreneurs face significant challenges
            that limit their growth and profitability.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">

            <div className="flex gap-3">
              <span className="text-red-500 font-bold text-xl">✕</span>
              <span>High purchase prices and low margins</span>
            </div>

            <div className="flex gap-3">
              <span className="text-red-500 font-bold text-xl">✕</span>
              <span>Unreliable supply and distribution</span>
            </div>

            <div className="flex gap-3">
              <span className="text-red-500 font-bold text-xl">✕</span>
              <span>Limited access to capital and funding</span>
            </div>

            <div className="flex gap-3">
              <span className="text-red-500 font-bold text-xl">✕</span>
              <span>Difficult to compete with big retailers</span>
            </div>

            <div className="flex gap-3">
              <span className="text-red-500 font-bold text-xl">✕</span>
              <span>No technology or system integration</span>
            </div>

            <div className="flex gap-3">
              <span className="text-red-500 font-bold text-xl">✕</span>
              <span>Limited business training and support</span>
            </div>

          </div>

        </div>

        {/* ARROW */}

        <div className="order-3 flex justify-center py-4 lg:py-0">

          <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-3xl font-bold shadow-lg">
            →
          </div>

        </div>

        {/* SOLUTION */}

        <div className="order-4">

          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">
            THE KASI SOLUTION
          </h2>

          <p className="text-gray-700 mb-8">
            We provide entrepreneurs with everything they need
            to succeed and grow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">

            <div className="flex gap-3">
              <span className="text-yellow-500 font-bold text-xl">✓</span>
              <span>Better prices through bulk purchasing</span>
            </div>

            <div className="flex gap-3">
              <span className="text-yellow-500 font-bold text-xl">✓</span>
              <span>Reliable supply chain and logistics</span>
            </div>

            <div className="flex gap-3">
              <span className="text-yellow-500 font-bold text-xl">✓</span>
              <span>Access to funding and support</span>
            </div>

            <div className="flex gap-3">
              <span className="text-yellow-500 font-bold text-xl">✓</span>
              <span>Stronger together, we compete better</span>
            </div>

            <div className="flex gap-3">
              <span className="text-yellow-500 font-bold text-xl">✓</span>
              <span>Technology and digital tools</span>
            </div>

            <div className="flex gap-3">
              <span className="text-yellow-500 font-bold text-xl">✓</span>
              <span>Training, mentoring and growth support</span>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="order-5">

          <Image
            src="/solution-entrepreneur.png"
            alt="Kasi Entrepreneur"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full h-[300px] lg:h-[350px]"
          />

        </div>

      </div>
    </section>
  );
}