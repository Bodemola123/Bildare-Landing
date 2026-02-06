import Image from 'next/image'
import React from 'react'

const Rectangle = () => {
  return (
    <div className='flex justify-center items-center'>
      <Image
        src="/Rectangle.svg"
        alt="Rectangle"
        className="w-291.25 h-185"
         width={1165}
         height={740}
      />
    </div>
  )
}

export default Rectangle
