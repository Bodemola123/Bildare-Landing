import Footer from '@/components/Footer'
import Waitlist1 from '@/components/Waitlist1'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col p-2 md:p-5 gap-40 justify-between min-h-screen items-center'>
      <Waitlist1/>
      <Footer/>
    </div>
  )
}

export default page
