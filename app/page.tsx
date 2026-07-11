"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import ProblemSolution from "@/components/home/ProblemSolution";
import Ecosystem from "@/components/home/Ecosystem";
import Rollout from "@/components/home/Rollout";
import Impact from "@/components/home/Impact";
import FounderMessage from "@/components/home/FounderMessage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />

      <ProblemSolution />

      <Ecosystem />

      <Rollout />

      <Impact />

      <FounderMessage />

      <Footer />
    </main>
  );
}