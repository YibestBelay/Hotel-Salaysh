'use client'

import { use, useEffect ,useState} from 'react'
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '@/components/CheckoutForm'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

const PayPage = ({ params }: { params: Promise<{ id: string }>}) => {
  const [clientSecret, setClientSecret] = useState('')
  const { id } = use(params)
  
  useEffect(() => {
    const makeRequest = async () => {
      const res = await fetch(`http://localhost:3000/api/create-intent/${id}`, {
        method: 'POST',
      })
      const data = await res.json()
      setClientSecret(data.clientSecret)
    }
    
    makeRequest() 
  }, [id])

  const options:StripeElementsOptions = {
   clientSecret,
    appearance:{
      theme:'stripe',
    },
  }
  return (
    <div>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
  
    </div>
  )
}

export default PayPage