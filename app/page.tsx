import Adoptors from '@/components/Adoptors'
import Carousel from '@/components/Carousel'
import Feature from '@/components/Feature'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Rectangle from '@/components/Rectangle'
import Waitlist from '@/components/Waitlist'
import Why from '@/components/Why'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col pb-5  gap-20 justify-between min-h-screen items-center'>
      <Hero/>  
      <Rectangle/>
      <Why/>  
      <Feature/>
      <Adoptors/>
      <Carousel/>  
      <Waitlist/>
      <Footer/>
    </div>
  )
}

export default page
