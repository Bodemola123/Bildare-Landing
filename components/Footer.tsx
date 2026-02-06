import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center w-full px-4 md:px-8 lg:px-16 -mt-10'>
      
      {/* Quick Links */}
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0'>
        <div className='flex flex-col gap-4 text-[#ffffff] w-full md:w-auto'>
          <p className='mt-10 text-lg md:text-xl font-semibold'>Quick Links</p>

          <div className='flex flex-col sm:flex-row flex-wrap justify-start gap-6 md:gap-20'>
            
            <div className='flex flex-col gap-2'>
              <p className='text-sm md:text-base'>Home</p>
              <p className='text-sm md:text-base'>About us</p>
              <p className='text-sm md:text-base'>Contact us</p>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-sm md:text-base'>Resources</p>
              <p className='text-sm md:text-base'>FAQs</p>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-sm md:text-base'>Terms of Service</p>
              <p className='text-sm md:text-base'>Privacy Policy</p>
            </div>

          </div>
        </div>

        <div className='mt-6 md:mt-0'>
          <Image src="/threedots.svg" alt='logo' width={232} height={60} className='w-36 md:w-auto h-auto'/>
        </div>
      </div>

      {/* Background Text */}
<div className="w-full flex justify-center my-10 opacity-100">
  <Image
    src="/bildaretext.svg"
    alt="BILDARE"
    width={1394}
    height={437}
    className="
      w-full 
      h-30 
      sm:h-45 
      md:h-70 
      lg:h-109.25 
      object-contain
    "
  />
</div>




      {/* Bottom Section */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0'>
        <Image src="/Built.svg" alt='logo' width={129} height={22} className='w-32 md:w-auto h-auto'/>

        <div className='flex flex-wrap justify-start md:justify-end items-center gap-4 md:gap-8 text-sm md:text-base font-medium text-[#FFFFFF]'>
          <p>Help</p>
          <p>Email</p>
          <p>Twitter</p>
          <p>Discord</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
