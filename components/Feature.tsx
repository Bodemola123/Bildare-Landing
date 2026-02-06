import Image from 'next/image'
import React from 'react'

const Feature = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-16 md:gap-20 lg:gap-22.5 px-4 md:px-6 lg:px-8 py-12'>
      {/* Header */}
      <div className='flex flex-col gap-4 md:gap-6 items-center justify-center'>
        <div className='border border-[#B9F500] bg-[#292A25] py-2 px-6 md:py-2.5 md:px-10 gap-2.5 rounded-3xl flex items-center justify-center'>
          <p className='text-sm md:text-base font-semibold text-[#ffffff]'>(Feature + Benefit)</p>
        </div>

        <div className='flex flex-col gap-2 text-center items-center justify-center'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff]'>
            What You Get
          </h1>
          <p className='text-sm md:text-base lg:text-lg font-normal text-[#949494] max-w-lg md:max-w-xl lg:max-w-136 text-center'>
            A better starting point for modern product design
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-4 w-full max-w-full">

        {/* Top row – 2 cards */}
        <div className="sm:col-span-1 lg:col-span-3 bg-[#22231F] py-13 px-15.5 rounded-2xl gap-6 md:gap-9 flex flex-col items-start justify-center">
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-bold text-[#ffffff] tracking-[-0.06em]">
            Curated modern UI systems
          </h1>
          <p className="text-sm md:text-base lg:text-lg max-w-full text-[#949494]">
            Not a collection of random templates. Every system is designed to feel current,
            scalable, and relevant for real products — from early MVPs to growing platforms.
          </p>
          <Image src="/Curated.svg" alt="Feature 1" width={152} height={152} />
        </div>

        <div className="sm:col-span-1 lg:col-span-3 bg-[#22231F] py-13 px-15.5 rounded-2xl gap-6 md:gap-9 flex flex-col items-start justify-center">
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-bold text-[#ffffff] tracking-[-0.06em]">
            Modular sections and components
          </h1>
          <p className="text-sm md:text-base lg:text-lg max-w-full text-[#949494]">
            Each asset is broken into reusable sections and components, so you can adapt,
            rearrange, and evolve your interface without rebuilding from scratch.
          </p>
          <Image src="/Base.svg" alt="Feature 2" width={275} height={252} />
        </div>

        {/* Bottom row – 3 cards */}
        <div className="sm:col-span-1 lg:col-span-2 bg-[#22231F] py-13 px-15.5 rounded-2xl gap-6 md:gap-9 flex flex-col items-start justify-between h-full">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#ffffff]">
              Design systems that respect structure
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-full text-[#949494]">
              Typography, spacing, color tokens, and layout rules are built in from the start — ensuring consistency as your product grows.
            </p>
          </div>
          <Image src="/Frame1.svg" alt="Feature 3" width={128} height={41} />
        </div>

        <div className="sm:col-span-1 lg:col-span-2 bg-[#22231F] py-13 px-15.5 rounded-2xl gap-6 md:gap-9 flex flex-col items-start justify-between h-full">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-xl md:text-2xl lg:text-[28px] font-bold text-[#ffffff] tracking-[-0.06em]">
              AI-assisted editing with boundaries
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-full text-[#949494]">
              Layouts, tokens, and hierarchy stay intact — you’re always in control.
            </p>
          </div>
          <Image src="/Frame2.svg" alt="Feature 4" width={174} height={133} />
        </div>

        <div className="sm:col-span-1 lg:col-span-2 bg-[#22231F] py-13 px-15.5 rounded-2xl gap-6 md:gap-9 flex flex-col items-start justify-between h-full">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-xl md:text-2xl lg:text-[28px] font-bold text-[#ffffff] tracking-[-0.06em]">
              A bridge from design to production
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-full text-[#949494]">
              Assets are created with real development workflows in mind — helping teams move from design decisions to implementation with clarity.
            </p>
          </div>
          <Image src="/Frame3.svg" alt="Feature 5" width={198} height={53} />
        </div>

      </div>
    </div>
  )
}

export default Feature
