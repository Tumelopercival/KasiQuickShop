import { GraduationCap, BookOpen, BadgeCheck } from "lucide-react";

export default function Academy() {
  return (
    <section className="bg-zinc-950 py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-yellow-400 font-semibold mb-4">
            ENTREPRENEUR ACADEMY
          </p>

          <h2 className="text-5xl font-extrabold text-white mb-10">
            Empowering South Africa's Next Generation Of Business Owners
          </h2>

          <p className="text-zinc-300 text-xl leading-9 mb-20">
            Training, mentoring and continuous support ensure every entrepreneur has the tools needed to build a sustainable business.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-black border border-zinc-800 rounded-3xl p-8 text-center">
            <GraduationCap className="mx-auto text-yellow-400 w-12 h-12 mb-6"/>
            <h3 className="text-white text-2xl font-bold">Training</h3>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-8 text-center">
            <BookOpen className="mx-auto text-yellow-400 w-12 h-12 mb-6"/>
            <h3 className="text-white text-2xl font-bold">Business Skills</h3>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-8 text-center">
            <BadgeCheck className="mx-auto text-yellow-400 w-12 h-12 mb-6"/>
            <h3 className="text-white text-2xl font-bold">Ongoing Support</h3>
          </div>

        </div>

      </div>

    </section>
  );
}