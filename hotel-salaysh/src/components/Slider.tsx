'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'


const data=[
    {id:1,
    title:"Test and feel happy ",
    image:"/20250320_114518.jpg"},
    {id:2,
    title:"Enjoy your stay here in salaysh",
    image:"/photo_2025-03-29_22-34-34.jpg"},
    {id:3,
    title:"Thanos rest in peace.",
    image:"/Thanos restin.png"},    
]

const Slider = () => {
    const [current, setCurrent] = useState(0);
    // useEffect(()=>{
    //     const timer = setInterval(()=>{
    //         setCurrent((prev)=>prev === data.length - 1 ? 0 : prev + 1)
    //     },5000)
    //     return ()=>clearInterval(timer)
    // },[])
  return (
    <div className='flex flex-col h-[calc(100vh-5.5rem)] md:h-[calc(100vh-6.25rem)] md:flex-row bg-fuchsia-50'>
        <div className=' flex-1 flex flex-col justify-center items-center gap-8 text-red-500 font-bold '>
            <h1 className='text-5xl  text-center p-4 md:p-10 md:text-6xl lg:text-7xl  uppercase '>{data[current].title}</h1>
            <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors cursor-pointer'>Order Now</button>
        </div>
        <div className='flex-1 w-full relative '>
            <Image src={data[current].image} alt={data[current].title} fill className='object-cover'/>
        </div>
    </div>
  )
}

export default Slider