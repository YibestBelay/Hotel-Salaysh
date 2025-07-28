import React from 'react'
import Image from 'next/image'
const CartPage = () => {
  return (
    <div className='flex h-[calc(100vh-5.5rem)] md:h-[calc(100vh-6.25rem)] text-red-500  flex-col md:flex-row gap-8 md:h-[80vh]'>
      {/* product */}
      <div className=' flex-1  flex flex-col justify-center h-full  gap-4 p-10 lg:px-15 xl:px-20  '>
              <div className=' flex flex-row justify-between items-center'>
                <div className=' relative'>
                <Image src='/Thanos restin.png' alt=""  width={100} height={100} className='object-contain'/>
                </div>
                <div className=''>
                  <h1 className='text-xl font-bold'>Thanos</h1>
                  <p>large</p>
                </div>
                <p className='font-bold'>${40}</p>
                <button className=''>X</button>
              </div>
              <div className=' flex flex-row justify-between items-center'>
                <div className=' relative'>
                <Image src='/Thanos restin.png' alt=""  width={100} height={100} className='object-contain'/>
                </div>
                <div className=''>
                  <h1 className='text-xl font-bold'>Thanos</h1>
                  <p>large</p>
                </div>
                <p className='font-bold'>${40}</p>
                <button className=''>X</button>
              </div>
              <div className=' flex flex-row justify-between items-center'>
                <div className=' relative'>
                <Image src='/Thanos restin.png' alt=""  width={100} height={100} className='object-contain'/>
                </div>
                <div className=''>
                  <h1 className='text-xl font-bold'>Thanos</h1>
                  <p>large</p>
                </div>
                <p className='font-bold'>${40}</p>
                <button className=''>X</button>
              </div>
      </div>
      
      {/* payment */}
      <div className=' flex-1  flex flex-col justify-center h-full bg-fuchsia-50 mx-2 p-20 lg:px-15 xl:px-20'>
              <div className='  flex flex-col justify-center gap-4'>
                  <div className='flex flex-row justify-between items-center'>
                    <h1>Subtotal(3 Items)</h1>
                    <p className='font-bold text-red-500' >${40}</p>
                  </div>
                  <div className='flex flex-row justify-between items-center'>
                  <h1>Service Cost</h1>
                  <p className='font-bold text-red-500'>${40}</p>
                  </div>
                  <div className='flex flex-row justify-between items-center' >
                  <h1>Delivery Cost</h1>
                  <p className='font-bold text-green-500'>Free!</p>
                  </div>

                  <hr className='my-2 border-red-500'/>

                  <div className='flex flex-row justify-between items-center'>
                  <h1>Total(INCL. VAT)</h1>
                  <p className='font-bold text-red-500'>${40}</p>
                  </div>

                  <button className='w-1/2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors cursor-pointer self-end'>Checkout</button>

            </div>
      </div>
      
    </div>
  )
}

export default CartPage