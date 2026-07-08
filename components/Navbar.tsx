"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        {/* Logo */}

        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Kasi QuickShop Logo"
            width={260}
            height={120}
            priority
            className="h-12 w-auto lg:h-16"
          />
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden lg:flex items-center gap-10 text-white font-medium">
          <Link href="/" className="transition hover:text-yellow-400">
            Home
          </Link>

          <Link href="/about" className="transition hover:text-yellow-400">
            About
          </Link>

          <Link href="/ecosystem" className="transition hover:text-yellow-400">
            Ecosystem
          </Link>

          <Link href="/investors" className="transition hover:text-yellow-400">
            Investors
          </Link>

          <Link href="/careers" className="transition hover:text-yellow-400">
            Careers
          </Link>

          <Link href="/contact" className="transition hover:text-yellow-400">
            Contact
          </Link>
        </div>

        {/* Investor Portal Button */}

        <Link
          href="/investors"
          className="hidden lg:block rounded-lg bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
        >
          Investor Portal
        </Link>

        {/* Mobile Menu Button */}

        <button
          className="text-4xl text-white lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}

      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md">
          <div className="flex flex-col gap-6 px-8 py-8 text-white">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              About
            </Link>

            <Link
              href="/ecosystem"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Ecosystem
            </Link>

            <Link
              href="/investors"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Investors
            </Link>

            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Careers
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Contact
            </Link>

            <Link
              href="/investors"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg bg-yellow-400 px-6 py-3 text-center font-bold text-black transition hover:bg-yellow-300"
            >
              Investor Portal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}