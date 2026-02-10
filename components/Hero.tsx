import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen m-auto relative -mt-10 px-4 md:px-8'>
      
      {/* Background image layer */}
      <div
        className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none"
      >
        <Image
          src="/Background.png"
          alt="Background"
          className="w-72 md:w-96 lg:w-102.5 h-auto object-contain"
          width={102.5}
          height={164}
        />
      </div>

      {/* Foreground content */}
      <div className="flex flex-col justify-between items-center gap-6 md:gap-8">

        {/* Badge */}
        <div className='border border-[#B9F500] bg-[#292A25] py-2 px-6 md:py-2.5 md:px-10 gap-2.5 rounded-3xl items-center justify-center flex'>
          <p className='text-sm md:text-base font-semibold text-[#ffffff]'>
            Bildare V1.0
          </p>
        </div>

        <div className='flex flex-col gap-8 md:gap-10 lg:gap-14 justify-between items-center'>

          {/* Heading */}
          <h1 className='
            text-3xl 
            md:text-5xl 
            lg:text-7xl 
            font-bold 
            w-full 
            max-w-full 
            md:max-w-3xl 
            lg:max-w-5xl 
            text-center
            leading-tight
          '>
            Build modern product UIs without starting from scratch
          </h1>

          {/* Paragraph */}
          <p className='
            text-base 
            md:text-lg 
            font-light 
            max-w-full 
            md:max-w-2xl 
            lg:max-w-215 
            text-center
          '>
            Bildare is a curated marketplace for modern Figma UI kits, sections, and design systems—built for teams who care about quality, structure, and longevity.
          </p>

          {/* Buttons */}
          <div className='
            flex 
            flex-col 
            sm:flex-row 
            items-center 
            justify-center 
            gap-3 
            md:gap-4 
            w-full 
            sm:w-auto
          '>
            <button className='
              w-full sm:w-auto
              cursor-pointer 
              bg-[#B9F500] 
              py-2.5 
              px-4.5 
              text-[#000000] 
              font-semibold 
              text-base 
              rounded-2xl 
              flex items-center 
              justify-center 
              gap-2.5
            '>
              Become a Creator
            </button>

            <Link href="/waitlist" className='
              w-full sm:w-auto
              cursor-pointer 
              bg-[#B9F50033] 
              py-2.5 
              px-4.5 
              text-[#B9F500] 
              font-semibold 
              text-base 
              rounded-2xl 
              flex items-center 
              justify-center 
              gap-2.5
            '>
              Join Waitlist
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
