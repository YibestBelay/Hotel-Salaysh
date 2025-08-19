import React from 'react'
import Image from 'next/image'
import { ProductType } from '@/types/types'
import Price from '@/components/Price'
import DeleteProduct from '@/components/DeleteProduct'

const getData = async(id:number)=>{
    const res = await fetch(`http://localhost:3000/api/products/${id}`)
    const data = await res.json()
    return data
}
const SingleProduct = async({params}:{params: Promise<{id:string}>}) => {
    const{id} = await params
   
    const singleProduct:ProductType = await getData(Number(id))
  return (
    <div className='relative text-red-500 p-4 lg:px-15 xl:px-20 h-[calc(100vh-5.5rem)] md:h-[calc(100vh-6.25rem)] flex flex-col justify-around items-center gap-4 md:flex-row md:gap-8 '>
        <div className='relative w-full h-1/2 md:h-[70vh] '>
          {singleProduct.img && <Image src={singleProduct.img!} alt="" fill className='object-contain'/>}
        </div>
        <div className='w-full h-1/2 flex flex-col gap-4 '>
          <h1 className='text-3xl font-bold uppercase'>{singleProduct.title}</h1>
          <p className='text-sm '>{singleProduct.desc}</p>
          <Price product={singleProduct}/>
        </div> 
        <DeleteProduct id={singleProduct.id}/>
    </div>
    
  )
}  

export default SingleProduct