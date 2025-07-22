'use client';
import React, { useState } from 'react';
import {X,AlignJustify} from 'lucide-react'
import Link from 'next/link'
import CartIcon from './CartIcon';


const links = [
    {id:1 ,href: '/', label: 'HomePage'},
    {id:2 ,href: '/menu', label: 'Menu'},
    {id:3 ,href: '/', label: 'working Hours'},
    {id:4 ,href: '/', label: 'Contact'},
]
const user=false;
const Menu = () => {
    const [open, setOpen] = useState(false);
  return (
    <div>
            {open ? <X onClick={() => setOpen(false)} /> : <AlignJustify onClick={() => setOpen(true)} />}
        {open && (<div className='bg-[rgba(255,255,255,0.3)] backdrop-blur-sm shadow-amber-900 text-red-500 absolute top-22 left-0 text-3xl w-full z-10 h-[calc(100vh-5.5rem)] flex flex-col items-center pt-10 gap-4'>
            {links.map((item)=>(
                    <Link href={item.href} key={item.id} onClick={() => setOpen(false)}>{item.label} </Link>   
            ))}
            {!user ? <Link href="/login" onClick={() => setOpen(false)}>Login</Link> : <Link href="/orders" onClick={() => setOpen(false)}>Orders</Link>}
            
           <div onClick={() => setOpen(false)}><CartIcon  /></div>
        </div>)}
    </div> 

  )
}

export default Menu