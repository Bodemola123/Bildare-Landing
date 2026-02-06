import Image from 'next/image'
import React from 'react'

const Why = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8">
      <div className='
        flex 
        flex-col 
        md:flex-col lg:flex-row
        items-center 
        justify-center 
        gap-10 md:gap-12 lg:gap-23
        w-full
        py-12 md:py-16 lg:py-16
        border-y 
        border-[#2E2E2E]
      '>

        {/* Left Content */}
        <div className='
          flex 
          flex-col 
          justify-center 
          gap-4 md:gap-6 lg:gap-6
          items-center md:items-center lg:items-start
          w-full md:max-w-159.25
          text-center md:text-center lg:text-left
        '>

          <div className='border border-[#C5F72B] bg-[#292A25] py-2 px-6 md:py-2.5 md:px-8 lg:px-10 rounded-3xl '>
            <p className='text-sm md:text-sm lg:text-base font-semibold text-[#ffffff]'>
              Why Bildare?
            </p>
          </div>

          <h2 className='
            w-full 
            text-2xl md:text-3xl lg:text-5xl 
            font-bold 
            text-[#ffffff]
            leading-snug md:leading-snug lg:leading-tight
          '>
            The UI ecosystem is evolving — your tools should too.
          </h2>

          <p className='
            w-full 
            text-sm md:text-base lg:text-lg 
            font-normal 
            text-[#949494]
          '>
            Design systems today are rigid. Templates die when trends change. AI tools regenerate everything and ignore structure.
            <br />
            Bildare reimagines design infrastructure for the future — guided by control, modularity, and real-world usability.
          </p>
        </div>

        {/* Right Box */}
        <div className='
          flex 
          items-center 
          justify-center 
          bg-[#292A25] 
          rounded-3xl 
          w-full 
          max-w-sm md:max-w-md lg:w-151
          h-64 md:h-72 lg:h-136
          mt-6 md:mt-8 lg:mt-0
        '>
          <Image 
            src="/Bildare.svg" 
            alt='Why?' 
            width={306} 
            height={106}
            className="w-36 md:w-40 lg:w-76.5 h-26.5"
          />
        </div>

      </div>
    </div>
  )
}

export default Why
