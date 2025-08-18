'use client'

import { LinkAuthenticationElement, PaymentElement, useStripe } from "@stripe/react-stripe-js"
import { useElements } from "@stripe/react-stripe-js"
import { useState ,useEffect } from "react"
import { AddressForm } from "./Address"
const CheckoutForm = () => {
    const stripe=useStripe()
    const elements = useElements()
    const[email,setEmail]=useState('')
    const[loading,setLoading]=useState(false)
    const[message,setMessage]=useState<string | null>(null)

    useEffect(()=>{
        if(!stripe){
            return
        }
        const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret')
        if(!clientSecret){
            return
        }

        stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent})=>{
            switch(paymentIntent?.status){
                case 'succeeded':
                    setMessage('Payment succeeded!')
                    break
                case 'processing':
                    setMessage('Your payment is processing.')
                    break
                case 'requires_payment_method':
                    setMessage('Your payment was not successful, please try again.')
                    break
                default:
                    setMessage('Something went wrong.')
                    break
            }
        })
    },[stripe])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!stripe || !elements){
            return
        }

        setLoading(true)
        
        const error = await stripe.confirmPayment({
            elements,
            confirmParams:{
                return_url:'http://localhost:3000/success',
            }
        })

        if(error?.error?.type==='card_error' || error?.error?.type==='validation_error'){
            setMessage(error?.error?.message||'An unexpected error occurred.')
        }else{
            setMessage('An unexpected error occurred.')
        }
        setLoading(false)
    }
   

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
        <LinkAuthenticationElement 
        id="link-authentication-element"
       />
        <PaymentElement
        id="payment-element"
        options={{
            layout:'tabs'
        }}/>   
        <AddressForm/>
        <button
        id="submit"
        disabled={loading||!stripe||!elements}
        // className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors cursor-pointer"
        >
            <span id="button-text">
                {loading ? <div className="spinner" id="spinner"></div> : <p className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition-colors cursor-pointer m-4 ">Pay Now!</p>}
            </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
    </form>
  )
}

export default CheckoutForm