"use client";

import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { Input } from './ui/input';
import { Link, Mail, UserRound } from 'lucide-react';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const images = [
  "/Rectangle1.png",
  "/Rectangle2.png",
  "/Rectangle3.png",
  "/Rectangle4.png",
];

const Builder = () => {

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  portfolio: "",
  message: "",
});

const [loading, setLoading] = useState(false);


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async () => {
  if (!formData.name || !formData.email) {
    toast.error("Please fill in required fields.");
    return;
  }

  try {
    setLoading(true);

    const res = await fetch("/api/builder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Failed to submit");

    toast.success("Application submitted successfully 🚀");

    setFormData({
      name: "",
      email: "",
      portfolio: "",
      message: "",
    });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    toast.error("Something went wrong. Try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="relative w-full overflow-hidden flex justify-center px-4 md:px-8 py-20">

      {/* Carousel Background */}
{/* Static Background */}
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


      {/* Builder Content */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center md:justify-around items-start w-full z-10">
        
        {/* Left Info */}
        <div className="flex flex-col gap-10 w-full md:max-w-152 text-center md:text-left">
          <div className="bg-[#292A25] gap-2.5 rounded-[24px] px-10 py-2.5 border border-[#B9F500] text-xs md:text-sm font-medium w-fit flex flex-row items-center mx-auto md:mx-0 text-white">
            Become a Builder
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
              Build systems <br /> people actually use
            </h1>
            <p className="text-sm md:text-lg text-[#ffffff] font-light ">
              Bildare is built around creators who care about quality, structure, and longevity. We&apos;re not a high-volume marketplace — we&apos;re a curated platform for modern UI systems that scale with real products.
            </p>
          </div>

          <button className="py-2.5 cursor-pointer w-fit px-4.5 rounded-2xl bg-[#B9F500] text-black text-sm md:text-base font-semibold leading-[120%] tracking-[-0.06em]">
            See Guidelines
          </button>
        </div>

        {/* Right Form */}
        <div className="flex flex-col rounded-4xl gap-8 bg-[#21221E] p-6 sm:p-8 md:p-10 w-full max-w-full md:max-w-146.5">
          <div className="flex flex-col gap-4">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium leading-[120%] tracking-[-0.06em]">
              Become a Builder
            </h1>
            <p className="text-sm md:text-base font-normal leading-[145%] tracking-[-0.04em] max-w-full md:max-w-84.25">
              Builders can join Bildare by invitation or by applying using the form below.
            </p>
          </div>

          <form className="flex flex-col gap-5 w-full">
            {/* Name */}
            <div className="grid w-full items-center gap-4">
              <Label htmlFor="name">Name</Label>
              <div className="relative h-12 sm:h-14 md:h-14">
                <Input   name="name"
  value={formData.name}
  onChange={handleChange} placeholder="John Doe" className="pl-10 h-full placeholder:text-[#757575] text-white w-full bg-[#3B3B3B] rounded-3xl! border-none" />
                <UserRound className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            {/* Email */}
            <div className="grid w-full items-center gap-4">
              <Label>Email</Label>
              <div className="relative h-12 sm:h-14 md:h-16">
                <Input   name="email"
  value={formData.email}
  onChange={handleChange} placeholder="you@example.com" className="pl-10 h-full rounded-3xl! placeholder:text-[#757575] text-white w-full bg-[#3B3B3B] border-none" />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            {/* Subject */}
            <div className="grid w-full items-center gap-4">
              <Label>Portfolio Link or Product Sample</Label>
              <div className="relative h-12 sm:h-14 md:h-16">
                <Input   name="portfolio"
  value={formData.portfolio}
  onChange={handleChange} placeholder="Link" className="pl-10 h-full rounded-3xl! placeholder:text-[#757575] text-white w-full bg-[#3B3B3B] border-none" />
                <Link className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            {/* Message */}
            <div className="grid w-full items-center gap-4">
              <Label>Additional Information</Label>
              <Textarea   name="message"
  value={formData.message}
  onChange={handleChange} placeholder="Tell us a little bit about yourself" className="resize-none w-full rounded-2xl! h-40 sm:h-44 md:h-50.5 bg-[#3B3B3B] border border-[#292A251A] px-4 py-3" />
            </div>

            {/* Submit Button */}
            <button   type="button"
  onClick={handleSubmit}
  disabled={loading} className="w-fit md:w-38.25 cursor-pointer bg-[#B9F500] p-4 rounded-2xl font-bold text-black flex justify-center items-center gap-2">
              {loading ? "Submitting..." : "Apply"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Builder;
