"use client"
import Image from "next/image";
import Link from "next/link";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 md:top-6 z-50 w-full flex justify-center px-4">
      <nav
        className="
          flex items-center justify-between
          w-full max-w-88 md:max-w-185 lg:max-w-352.25
          h-16 md:h-25.25
          px-4 sm:px-6 md:px-10
          rounded-2xl md:rounded-3xl
          bg-[#1C1D19]
          border border-[#2E2E2E]
        "
      >
        {/* Logo */}
        <Link href="/" className="border-none">
        <Image
          src="/Bildare.svg"
          alt="Logo"
          width={120}
          height={40}
          className="lg:w-33.25 lg:h-11.5 md:w-22 md:h-9"
          priority
        />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-6">
            <Link
              href="/builder"
              className="text-xs lg:text-base text-white hover:text-[#B9F500]"
            >
              Become a Builder
            </Link>
            <Link
              href="/contact"
              className="text-xs lg:text-base text-white hover:text-[#B9F500]"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs lg:text-base py-3.5 px-4.5 font-semibold text-[#B9F500] hover:text-white"
            >
              Join Waitlist
            </Link>
            <Link
              href="/builder"
              className="
                bg-[#B9F500]
                text-black
                px-4.5 py-2.5
                rounded-xl
                text-xs lg:text-base
                font-semibold
              "
            >
              Become a Builder
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden absolute top-24 w-full px-4">
          <div className="bg-[#1C1D19] border border-[#2E2E2E] rounded-2xl p-6 flex flex-col gap-6">
            <Link
              href="/builder"
              className="text-base text-white hover:text-[#B9F500]"
            >
              Become a Builder
            </Link>
            <Link
              href="/contact"
              className="text-base text-white hover:text-[#B9F500]"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="text-base font-semibold text-[#B9F500]"
            >
              Join Waitlist
            </Link>
            <Link
              href="/builder"
              className="bg-[#B9F500] text-black py-3 rounded-xl text-base font-semibold text-center"
            >
              Become a Builder
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
