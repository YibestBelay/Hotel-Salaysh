'use client'
import React, { useState, useEffect } from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date('2025-09-25')

const CountDown = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className='text-5xl font-bold text-yellow-400 h-12' />
  }

  if (isComplete) {
    return (
      <div className='text-3xl font-bold text-red-500'>
        <p>We have closed our Offer !</p>
      </div>
    )
  }

  return (
    <div className='text-center'>
      <Countdown 
        className='text-5xl font-bold text-yellow-400' 
        date={endingDate}
        onComplete={() => {
          setIsComplete(true)
          return true
        }}
      />
    </div>
  )
}

export default CountDown