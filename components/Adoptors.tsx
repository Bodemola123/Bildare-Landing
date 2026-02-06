import React from 'react'

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
        
        {/* Card 1 */}
        <div className='flex flex-col gap-2.5 bg-[#292A25] py-6 px-6 md:py-7.5 md:px-8.5 rounded-2xl justify-end w-full'>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-[#ffffff]'>For Designers</h1>
          <p className='text-sm md:text-base lg:text-lg max-w-full text-[#949494]'>
            Move beyond templates — build systems that scale with your product.
          </p>
        </div>

        {/* Card 2 */}
        <div className='flex flex-col gap-2.5 bg-[#292A25] py-6 px-6 md:py-7.5 md:px-8.5 rounded-2xl justify-end w-full'>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-[#ffffff]'>For Developers</h1>
          <p className='text-sm md:text-base lg:text-lg max-w-full text-[#949494]'>
            Get designs that translate predictably into code.
          </p>
        </div>

        {/* Card 3 */}
        <div className='flex flex-col gap-2.5 bg-[#292A25] py-6 px-6 md:py-7.5 md:px-8.5 rounded-2xl justify-end w-full'>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-[#ffffff]'>For Product Teams</h1>
          <p className='text-sm md:text-base lg:text-lg max-w-full text-[#949494]'>
            Collaborate with components that tie into real workflows, not just pretty mockups.
          </p>
        </div>

        {/* Card 4 */}
        <div className='flex flex-col gap-2.5 bg-[#292A25] py-6 px-6 md:py-7.5 md:px-8.5 rounded-2xl justify-end w-full'>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-[#ffffff]'>For Creators</h1>
          <p className='text-sm md:text-base lg:text-lg max-w-full text-[#949494]'>
            Launch systems people actually use — and retain control and credit.
          </p>
        </div>

      </div>
      <div className='w-full h-px bg-[#2E2E2E] max-w-338'></div>
    </div>
  )
}

export default Adoptors
