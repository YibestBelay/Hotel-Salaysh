import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon'
import {Phone} from 'lucide-react'
const user=false;
const NavBar = () => {
  return (
    <div className=' h-12 text-red-500 px-4  flex justify-between items-center bb2  border-b-2 border-red-500 uppercase font-medium md:h-15  lg:px-15 xl:px-20'>
      
             <div className='hidden md:flex gap-4'>
              <Link href="/">HomePage</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/contact">Contact</Link>
             </div>
            <div className='text-xl md:text-l md:font-bold lg:text-2xl xl:text-3xl'>
              <Link href="/">Salaysh Grand</Link>
            </div>
            <div className='hidden md:flex gap-4 items-center '>
              <div className=' md:absolute top-2 right-2 md:text-sm lg:text-base   lg:static flex items-center gap-2 bg-amber-300 px-2 py-1 rounded-md'>
                <Phone className='w-5 h-5'/>
                <p>+251912345678</p>
              </div>
              {!user ? <Link href="/">Login</Link> : 
              <Link href="/orders">Orders</Link>}
              <CartIcon />
             </div>
        
        <div className='md:hidden'>
            <Menu />
        </div>
    </div>
  )
}

export default NavBar