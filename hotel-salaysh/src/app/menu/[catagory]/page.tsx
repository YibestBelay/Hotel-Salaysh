import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {ProductType} from '@/types/types'

const getData = async(catagory:string)=>{
  try {
    const res = await fetch('http://localhost:3000/api/products?catagory='+catagory)
     if(!res.ok){
        throw new Error('Failed to fetch products')
     }
    
    return res.json()
  } catch (error) {
    console.log(error)
  }
}


type props = {
    params: {
        catagory: string;
    };
}
const CatagoryPages = async({params}:props) => {
const products:ProductType[] = await getData(params.catagory)
  return (
    <div className='flex flex-wrap text-red-500'>
      {products.map((product:ProductType)=>(
        <Link className='w-full h-[70vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50' key={product.id} href={`/product/${product.id}`}>
          {product.img&&(
            <div className='relative h-[80%]'>
            <Image src={product.img} alt="" fill className='object-contain'/>
          </div>)}
          <div className='p-5  flex flex-row justify-between items-center font-bold'>
          <h1 className='text-2xl p-2'>{product.title}</h1>
          <p className='text-xl p-2  group-hover:hidden'>${product.price}</p>
          <button className='md:hidden group-hover:block  bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition-colors cursor-pointer'>Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CatagoryPages