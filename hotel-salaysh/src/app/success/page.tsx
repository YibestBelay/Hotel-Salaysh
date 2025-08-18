'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

const successpage = () => {
  const searchParams = useSearchParams()
  const payment_intent = searchParams.get('payment_intent')  
  const router = useRouter()

  useEffect(() => {
      const MakeRequest = async () => {
          try {
             await fetch(`http://localhost:3000/api/confirm/${payment_intent}`
              ,{
              method:'PUT',
            });
                  
              setTimeout(() => {
                router.push('/orders')
              }, 2000);
              
          } catch (error) {
              console.error(error)
          }
      }
      MakeRequest()
  }, [router,payment_intent])


  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-5.5rem)] md:h-[calc(100vh-6.25rem)]">
      <h1 className="text-2xl font-bold">Payment is successful.Now you will be redirected to order page</h1>
    </div>
  )
}

export default successpage