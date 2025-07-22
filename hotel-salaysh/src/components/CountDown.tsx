'use client'
import React from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date('2025-07-25')

const CountDown = () => {
  return (
    <Countdown className='text-5xl font-bold text-yellow-400' date={endingDate} />
  )
}

export default CountDown