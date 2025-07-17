import React from 'react'
import Link from 'next/link'
import {ShoppingCart} from 'lucide-react'
const CartIcon = () => {
  return (
    <div >
        <Link href="/cart" className='flex items-center gap-2'>
        <ShoppingCart />
        <span>Cart (5)</span>
        </Link>
    </div>
  )
}

export default CartIcon