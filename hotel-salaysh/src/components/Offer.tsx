import React from 'react'
import Image from 'next/image'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className=' h-[80vh] flex flex-col   bg-black md:flex-row '>
        <div className='flex-1 flex flex-col justify-center items-center gap-8 p-6'>
          <h1 className='text-5xl font-bold text-white'>Special Offer</h1>
          <p className='text-xl text-white'>Get 20% off on your first order</p>
          <CountDown />
          <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors cursor-pointer'>Order Now</button>
        </div>
        <div className='flex-1 w-full relative md:h-full'>
          <Image src='/Thanos restin.png' alt='offer' fill className='object-cover'/>
        </div>
    </div>
  )
}

export default Offer