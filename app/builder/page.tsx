import Builder from '@/components/Builder'
import Footer from '@/components/Footer'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col p-5 gap-40 justify-between min-h-screen items-center'>
      <Builder/>
      <Footer/>
    </div>
  )
}

export default page
