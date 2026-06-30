"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import ProblemSolution from "@/components/ProblemSolution";
import Ecosystem from "@/components/Ecosystem";
import Rollout from "@/components/Rollout";
import Impact from "@/components/Impact";
import FounderMessage from "@/components/FounderMessage";
import Movement from "@/components/Movement";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <Hero />

      <Statistics />

      <ProblemSolution />

      <Ecosystem />

      <Rollout />

      <Impact />

      <FounderMessage />

      <Movement />

      <Footer />

    </main>
  );
}