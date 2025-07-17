import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between items-center px-4 md:px-15 lg:px-20 h-12 md:24 text-red-500'>
      <div className='text-xl md:text-l md:font-bold lg:text-2xl xl:text-3xl '>
        <Link href="/" className='font-bold'>Salaysh Grand</Link>
      </div>
      <p>&copy; All rights reserved.</p>
    </div>
  )
}

export default Footer