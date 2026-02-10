"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { Input } from './ui/input';
import { Mail } from 'lucide-react';
import { Label } from './ui/label';


const images = [
  "/Rectangle1.png",
  "/Rectangle2.png",
  "/Rectangle3.png",
  "/Rectangle4.png",
];

const Waitlist1 = () => {

    const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);
const handleSubmit = async () => {
  if (!email) {
    toast("Please enter your email.");
    return;
  }

  try {
    setLoading(true);

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) throw new Error();

    toast("You're officially on the waitlist 🎉");
    setEmail("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    toast("Something went wrong. Try again.");
  } finally {
    setLoading(false);
  }
};



  return (
<div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 md:px-8">

  {/* Static Background stays the same */}
  <div className="hidden lg:flex">
  <div className="absolute inset-0 -z-10 pointer-events-none rotate-[-18.65deg] opacity-[0.07]">

    {/* Top Row */}
    <div className="flex gap-6 mb-5">
      {images.map((src, i) => (
        <div
          key={`top-${i}`}
          className="shrink-0 w-136 h-111.25 rounded-3xl overflow-hidden"
        >
          <Image
            src={src}
            alt={`Top image ${i}`}
            width={544}
            height={445}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>

    {/* Bottom Row */}
    <div className="flex gap-6">
      {[...images].reverse().map((src, i) => (
        <div
          key={`bottom-${i}`}
          className="shrink-0 w-136 h-111.25 rounded-3xl overflow-hidden"
        >
          <Image
            src={src}
            alt={`Bottom image ${i}`}
            width={544}
            height={445}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>

  </div>
</div>

  {/* Main Content */}
  <div className="flex flex-col gap-10 items-center justify-center text-center w-full max-w-2xl z-10">
    
    <div className="bg-[#292A25] gap-2.5 rounded-[24px] px-8 py-2.5 border border-[#B9F500] text-xs md:text-sm font-medium w-fit flex items-center text-white">
      Join Waitlist
    </div>

    <div className="flex flex-col gap-6">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
        Get Early Access
      </h1>

      <p className="text-sm md:text-lg text-white font-light">
        Be among the first to experience Bildare. Sign up to be notified when we launch.
      </p>
    </div>

    {/* Email Input Section */}
    <div className="grid w-full items-center gap-4">
      <Label className="text-left w-full">Email</Label>

      <div className="relative w-full h-14 md:h-16">
<Input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="you@example.com"
  className="pl-10 pr-36 h-full w-full rounded-3xl! bg-[#3B3B3B] text-white placeholder:text-[#757575] border-none"
/>


        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />

<button
  type="button"
  onClick={handleSubmit}
  disabled={loading}
  className="absolute right-2 top-1/2 -translate-y-1/2 md:px-5 md:py-2.5 px-3 py-2 rounded-2xl bg-[#B9F500] text-black text-xs md:text-base font-semibold whitespace-nowrap cursor-pointer"
>
  {loading ? "Sending..." : "Join Waitlist"}
</button>

      </div>
    </div>

  </div>
</div>

  );
};

export default Waitlist1;
