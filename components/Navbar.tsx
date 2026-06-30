"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-yellow-500 bg-black">

      {/* Desktop & Tablet */}

      <div className="flex justify-between items-center px-4 sm:px-8 lg:px-12 py-6">

        {/* Logo */}

        <div className="flex items-center">

          <Image
            src="/logo.png"
            alt="Kasi QuickShop Logo"
            width={260}
            height={120}
            priority
            className="w-auto h-12 sm:h-14 lg:h-auto"
          />

        </div>

        {/* Desktop Navigation */}

        <div className="hidden lg:flex gap-8">

          <a href="#home" className="hover:text-yellow-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>

          <a href="#ecosystem" className="hover:text-yellow-400 transition">
            Ecosystem
          </a>

          <a href="#investors" className="hover:text-yellow-400 transition">
            Investors
          </a>

          <a href="#careers" className="hover:text-yellow-400 transition">
            Careers
          </a>

          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>

        </div>

        {/* Desktop Button */}

        <button className="hidden lg:block bg-yellow-400 text-black px-5 py-3 rounded-lg font-bold">

          Investor Portal

        </button>

        {/* Mobile Menu Button */}

        <button
          className="lg:hidden text-white text-4xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}

      {mobileMenuOpen && (

        <div className="lg:hidden border-t border-yellow-500 bg-black">

          <div className="flex flex-col gap-6 px-6 py-6">

            <a href="#home" onClick={() => setMobileMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>

            <a href="#ecosystem" onClick={() => setMobileMenuOpen(false)}>
              Ecosystem
            </a>

            <a href="#investors" onClick={() => setMobileMenuOpen(false)}>
              Investors
            </a>

            <a href="#careers" onClick={() => setMobileMenuOpen(false)}>
              Careers
            </a>

            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>

            <button className="bg-yellow-400 text-black px-5 py-3 rounded-lg font-bold">

              Investor Portal

            </button>

          </div>

        </div>

      )}

    </nav>
  );
}