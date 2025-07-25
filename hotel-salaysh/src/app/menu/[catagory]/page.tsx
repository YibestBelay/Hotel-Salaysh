import { pizzas } from '@/data'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CatagoryPages = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map((pizza)=>(
        <Link className='w-full h-[70vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50' key={pizza.id} href={`/product/${pizza.id}`}>
          {pizza.img&&(
            <div className='relative h-[80%]'>
            <Image src={pizza.img} alt="" fill className='object-contain'/>
          </div>)}
          <div className='p-5  flex flex-row justify-between items-center font-bold'>
          <h1 className='text-2xl p-2'>{pizza.title}</h1>
          <p className='text-xl p-2  group-hover:hidden'>${pizza.price}</p>
          <button className='md:hidden group-hover:block  bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition-colors cursor-pointer'>Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CatagoryPages