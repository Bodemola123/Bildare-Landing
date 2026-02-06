import CTA from '@/components/CTA'
import Feedback from '@/components/Feedback'
import Footer from '@/components/Footer'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col p-5 gap-40 justify-between min-h-screen items-center'>
      <Feedback/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default page
