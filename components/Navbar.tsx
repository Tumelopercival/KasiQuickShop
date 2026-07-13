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
            alt="KASI QUICKSHOP Logo"
            width={260}
            height={120}
            priority
            className="h-12 w-auto lg:h-16"
          />
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden lg:flex items-center gap-8 text-white font-medium">

          <Link href="/" className="transition hover:text-yellow-400">
            Home
          </Link>

          <Link href="/about" className="transition hover:text-yellow-400">
            About
          </Link>

          <Link href="/founding-members" className="transition hover:text-yellow-400">
            Founders
          </Link>

          <Link href="/entrepreneurs" className="transition hover:text-yellow-400">
            Entrepreneurs
          </Link>

          <Link href="/suppliers" className="transition hover:text-yellow-400">
            Suppliers
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

        {/* Primary CTA */}

        <Link
          href="/founding-members"
          className="hidden lg:block rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition-all duration-300 hover:bg-yellow-300 hover:shadow-[0_12px_30px_rgba(250,204,21,0.25)]"
        >
          Become a Founding Member
        </Link>

        {/* Mobile Button */}

        <button
          className="text-4xl text-white lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}

      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">

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
              href="/founding-members"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Founding Members
            </Link>

            <Link
              href="/entrepreneurs"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Entrepreneurs
            </Link>

            <Link
              href="/suppliers"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Suppliers
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
              href="/founding-members"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl bg-yellow-400 px-6 py-3 text-center font-bold text-black transition hover:bg-yellow-300"
            >
              Become a Founding Member
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
}