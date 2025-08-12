'use client'
import React from 'react'
import Link from 'next/link'
import {ShoppingCart} from 'lucide-react'
import { useCartStore } from '@/utils/store'
import { useEffect } from 'react'



const CartIcon = () => {
  useEffect(()=>{
    useCartStore.persist.rehydrate()
 },[])
    const {totalItems} = useCartStore();
  return (
    <div >
        <Link href="/cart" className='flex items-center gap-2'>
           
           <ShoppingCart />
           <span className='font-bold'>Cart ({totalItems})</span> 
        </Link>
    </div>
  )
}

export default CartIcon