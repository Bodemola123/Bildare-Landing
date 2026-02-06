import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'
import { Mail } from 'lucide-react'

const CTA = () => {
  return (
    <div className="flex flex-col w-full gap-10 md:gap-14 items-center justify-center px-4 sm:px-10 lg:px-30">

      {/* CTA Section */}
      <div className="bg-linear-to-r from-lime-300 to-lime-800 flex flex-col md:flex-row justify-between items-center rounded-2xl gap-6 py-8 sm:py-10 px-4 sm:px-6 w-full">
        <div className="flex flex-col gap-2 text-black text-center md:text-left md:items-start items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Start Building on the GO!
          </h1>
          <p className="text-sm sm:text-base md:text-base font-normal">
            Need some help?
          </p>
          <button
            className="bg-[#1C1D19] rounded-2xl px-4.5 py-2.5 sm:py-2.75 text-[#B9F500] font-semibold text-sm sm:text-base mt-2 w-fit"
          >
            Get Started
          </button>
        </div>
        <Image
          src="/Capa.svg"
          alt="Cap"
          width={183}
          height={137}
          className="w-32 sm:w-40 md:w-48 lg:w-52 h-auto"
        />
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 w-full">
        <div className="flex flex-col gap-1 text-center md:text-left md:items-start">
          <p className="font-semibold text-sm sm:text-base">Join our newsletter</p>
          <p className="text-sm sm:text-base text-[#B0B0B0]">
            Get all the latest Bildare news delivered to your inbox.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-start sm:items-center w-full md:w-auto">
          <div className="relative w-full sm:w-86">
            <Input
              placeholder="you@example.com"
              className="pl-12 h-12 sm:h-14 w-full bg-[#292A25] placeholder:text-[#757575] text-white rounded-2xl border-none"
            />
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#757575]" />
          </div>
          <button
            className="bg-[#B9F500] px-4.5 py-2.5 sm:py-2.75 rounded-2xl text-black font-semibold text-sm sm:text-base w-full sm:w-auto"
          >
            Subscribe
          </button>
        </div>
      </div>

    </div>
  )
}

export default CTA
