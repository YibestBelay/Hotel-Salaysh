import React from 'react'
import Image from 'next/image'
import { singleProduct } from '@/data'
import Price from '@/components/Price'

const SingleProduct = () => {
  return (
    <div className=' text-red-500 p-4 lg:px-15 xl:px-20 h-[calc(100vh-5.5rem)] md:h-[calc(100vh-6.25rem)] flex flex-col justify-around items-center gap-4 md:flex-row md:gap-8'>
        <div className='relative w-full h-1/2 md:h-[70vh] '>
          <Image src={singleProduct.img!} alt="" fill className='object-contain'/>
        </div>
        <div className='w-full h-1/2 flex flex-col gap-4 '>
          <h1 className='text-3xl font-bold uppercase'>{singleProduct.title}</h1>
          <p className='text-sm '>{singleProduct.desc}</p>
          <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
        </div>
    </div>
  )
}  

export default SingleProduct