"use client"
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="fixed top-4 md:top-6 z-50 w-full flex justify-center px-4">
      
      {/* NAV */}
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
        {/* Left - Desktop */}
        <div className="hidden md:flex">
          <Link
            href="/builder"
            className="text-xs lg:text-base text-white hover:text-[#B9F500]"
          >
            Become a Builder
          </Link>
        </div>

        {/* Logo */}
        <Link href="/" className="flex">
          <Image
            src="/Bildare.svg"
            alt="Logo"
            width={120}
            height={40}
            className="lg:w-33.25 lg:h-11.5 md:w-22 md:h-9"
            priority
          />
        </Link>

        {/* Right - Desktop */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="text-xs lg:text-base text-white hover:text-[#B9F500]"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Button */}
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
          <div
            ref={dropdownRef}
            className="bg-[#1C1D19] border border-[#2E2E2E] rounded-2xl p-6 flex flex-col gap-6"
          >
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-base text-white hover:text-[#B9F500]"
            >
              Contact Us
            </Link>

            <Link
              href="/builder"
              onClick={() => setOpen(false)}
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
