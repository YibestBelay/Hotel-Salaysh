import React from 'react'
import {menu} from '../../data'
import Link from 'next/link'


const MenuPage = () => {
  return (
    <div className='p-4 lg:px-15 xl:px-20 h-[calc(100vh-5.5rem)] md:h-[calc(100vh-6.25rem)] flex flex-col items-center md:flex-row'>
       {menu.map((category)=>(
        <Link href={`/menu/${category.slug}`} key={category.id} className='w-full h-1/3 p-8 md:h-1/2' style={{backgroundColor:`${category.color}`}}>
         <div className='text-white flex flex-col justify-center items-center gap-2'>
          <h1 className='text-3xl font-bold'>{category.title}</h1>
          <p className='text-sm my-5'>{category.desc}</p>
          <button className='hidden md:block bg-amber-400 font-bold text-amber-100 px-4 py-1 rounded-md hover:bg-amber-500 transition-colors cursor-pointer'>Explore</button> 
         </div>
            
        </Link>
       ))}
    </div>
  )

}
export default MenuPage