import React from 'react'
import Image from 'next/image'

const cards = [
  {
    title: 'For Designers',
    description: 'Move beyond templates — build systems that scale with your product.',
    image: '/designers.jpg',
  },
  {
    title: 'For Developers',
    description: 'Get designs that translate predictably into code.',
    image: '/developers.jpg',
  },
  {
    title: 'For Product Teams',
    description: 'Collaborate with components that tie into real workflows, not just pretty mockups.',
    image: '/product-teams.jpg',
  },
  {
    title: 'For Creators',
    description: 'Launch systems people actually use — and retain control and credit.',
    image: '/creators.jpg',
  },
]

const Adoptors = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-16 md:gap-20 lg:gap-22.5 px-4 md:px-6 lg:px-8 py-20'>
      <div className='w-full h-px bg-[#2E2E2E] max-w-338'></div>

      {/* Header */}
      <div className='flex flex-col gap-4 md:gap-6 items-center justify-center'>
        <div className='border border-[#B9F500] bg-[#292A25] py-2 px-6 md:py-2.5 md:px-10 gap-2.5 rounded-3xl flex items-center justify-center'>
          <p className='text-sm md:text-base font-semibold text-[#ffffff]'>For Who?</p>
        </div>
        <div className='flex flex-col gap-2 text-center items-center justify-center'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff]'>
            For Early Adopters
          </h1>
          <p className='text-sm md:text-base lg:text-lg font-normal text-[#949494] max-w-md md:max-w-lg lg:max-w-338 text-center'>
            A better starting point for modern product design
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-4 w-full max-w-full h-full lg:h-125.25'>
        {cards.map((card) => (
          <div
            key={card.title}
            className='group relative flex flex-col gap-2.5 bg-[#292A25] py-6 px-6 md:py-7.5 md:px-8.5 rounded-2xl justify-end w-full overflow-hidden
              border border-transparent cursor-pointer
              transition-all duration-300 ease-out
              hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(185,245,0,0.12)] hover:border-[#B9F500]/30'
          >
            {/* Background image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className='object-cover opacity-10 rounded-2xl transition-opacity duration-300 group-hover:opacity-20'
            />

            {/* Lime sweep line at bottom */}
            <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-[#B9F500] transition-all duration-300 group-hover:w-full' />

            {/* Content */}
            <div className='relative z-10 flex flex-col gap-2.5'>
              <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-[#ffffff]'>
                {card.title}
              </h1>
              <p className='text-sm md:text-base lg:text-lg max-w-full text-[#949494] transition-colors duration-300 group-hover:text-[#bbbbbb]'>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full h-px bg-[#2E2E2E] max-w-338'></div>
    </div>
  )
}

export default Adoptors