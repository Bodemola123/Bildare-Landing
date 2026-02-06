import Image from 'next/image'
import React from 'react'

const Waitlist = () => {
  return (
    <div className="flex flex-col gap-25 items-center justify-center px-4 md:px-8 lg:px-16 py-16 min-h-screen">
      <div className='flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-23 border border-[#2E2E2E] rounded-3xl p-6 md:p-10 w-full max-w-338'>

        {/* Left Content */}
        <div className='flex flex-col justify-center gap-4 md:gap-6 items-center md:items-start text-center md:text-left w-full md:w-auto lg:w-159.25'>
          <div className='border border-[#C5F72B] bg-[#292A25] py-2 px-6 md:py-2.5 md:px-10 rounded-3xl'>
            <p className='text-sm md:text-base font-semibold text-[#ffffff]'>Early Access Benefits</p>
          </div>

          <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-[#ffffff] w-full md:w-159.25'>
            Join the Waitlist & Get
          </h1>

          <div className='text-sm md:text-base lg:text-lg font-normal text-[#949494] w-full md:w-159.25'>
            <ul className="list-none space-y-2 text-left md:text-left">
              <li>⭐ Early access before public launch</li>
              <li>⭐ Exclusive creator onboarding</li>
              <li>⭐ First-look at new systems and tools</li>
              <li>⭐ Option to influence product direction</li>
            </ul>
          </div>

          <button className='cursor-pointer bg-[#B9F500] py-2.5 px-4.5 text-[#000000] font-semibold text-base rounded-2xl flex items-center justify-center gap-2.5 mt-4 md:mt-6'>
            Join Waitlist
          </button>
        </div>

        {/* Right Image */}
        <div className='flex items-center justify-center bg-[#292A25] rounded-3xl w-full sm:max-w-xs md:max-w-151 lg:w-151 lg:h-106 h-auto p-4 md:p-20 lg:p-10 mt-6 md:mt-0'>
          <Image src="/Logo.svg" alt='logo' width={202} height={202} className="w-20 md:lg:w-auto h-auto" />
        </div>

      </div>
      <div className='w-full h-px bg-[#2E2E2E] max-w-338'></div>
    </div>
  )
}

export default Waitlist
