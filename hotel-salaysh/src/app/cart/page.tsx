'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useCartStore } from '@/utils/store'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'


const CartPage = () => {
  useEffect(()=>{
    useCartStore.persist.rehydrate()
 },[])

  const {products,totalItems,totalPrice,removeFromCart} = useCartStore();
 const{data:session} = useSession();
 const router = useRouter()
  const handleCheckout = async()=>{
    if(!session){
      toast.error('Please login to checkout')
      router.push('/')
    } else{
      try {
        const res = await fetch('http://localhost:3000/api/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            price:totalPrice,
            products,
            userEmail:session.user.email!,
            status:'not paid'
          }),
        });
        const data= await res.json()
        router.push(`/pay/${data.id}`)
      } catch (error) {
        console.log(error)
      }
    }
    
  }
  return (
    <div className='flex h-[calc(100vh-5.5rem)] md:h-[calc(100vh-6.25rem)] text-red-500  flex-col md:flex-row gap-8 '>
      {/* product */}
      <div className=' flex-1  flex flex-col justify-center h-full  gap-4 p-10 lg:px-15 xl:px-20  '>
              {products.map((item)=>(
                <div className=' flex flex-row justify-between items-center' key={item.id}>
                  <div className=' relative'>
                    {item.img && (
                        <Image src={item.img!} alt=""  width={100} height={100} className='object-contain'/>
                    )}
                  </div>
                  <div className=''>
                    <h1 className='text-xl font-bold'>{item.title} X{item.quantity}</h1>
                    <p>{item.optionsTitle}</p>
                  </div>
                  <p className='font-bold'>${item.price}</p>
                  <button className='cursor-pointer' onClick={()=>removeFromCart(item)}>X</button>
                </div>
              ))}
        
      </div>
      
      {/* payment */}
      <div className=' flex-1  flex flex-col justify-center h-full bg-fuchsia-50 mx-2 p-20 lg:px-15 xl:px-20'>
              <div className='  flex flex-col justify-center gap-4'>
                  <div className='flex flex-row justify-between items-center'>
                    <h1>Subtotal({totalItems} Items)</h1>
                    <p className='font-bold text-red-500' >${totalPrice}</p>
                  </div>
                  <div className='flex flex-row justify-between items-center'>
                  <h1>Service Cost</h1>
                  <p className='font-bold text-red-500'>${0}</p>
                  </div>
                  <div className='flex flex-row justify-between items-center' >
                  <h1>Delivery Cost</h1>
                  <p className='font-bold text-green-500'>Free!</p>
                  </div>

                  <hr className='my-2 border-red-500'/>

                  <div className='flex flex-row justify-between items-center'>
                  <h1>Total(INCL. VAT)</h1>
                  <p className='font-bold text-red-500'>${totalPrice}</p>
                  </div>

                  <button className='w-1/2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors cursor-pointer self-end' 
                  onClick={handleCheckout}>
                  Checkout
                  </button>

            </div>
      </div>
      
    </div>
  )
}

export default CartPage