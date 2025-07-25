'use client'
import React, { useEffect, useState } from 'react'

type Props={
    price:number;
    id:number;
    options?:{
        title:string;
        additionalPrice:number }[];
}

const Price = ({price,id,options}:Props) => {
    const [selected, setSelected] = useState(0);
    const [Total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setTotal(
           quantity*( options? price + options[selected].additionalPrice:price));
    },[quantity,price,options,selected])
  return (
    <div className='flex flex-col justify-center gap-4 w-full  md:gap-8'>
        <h2 className='text-2xl font-bold'>${Total.toFixed(2)}</h2>
        <div className='flex gap-4'>
        {options?.map((option,index)=>(
            <button 
                    key={option.title} 
                    className='min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md cursor-pointer'
                    style={
                        {
                            background:selected===index ? 'red' : 'white',
                            color:selected===index ? 'white' : 'red'
                        }
                    }
                    onClick={()=>setSelected(index)}>
                            
                        {option.title}
        </button>))}
        </div>
        <div className='flex justify-between w-full p-2'>
            <div className='flex justify-between w-full ring-1 ring-red-400 p-2'>
                <span>Quantity</span> 
                <div className='flex gap-5 ' >
                    <button className='cursor-pointer' onClick={()=>setQuantity((prev)=>(prev>1? prev-1:1))}>-</button>
                    <span>{quantity}</span>
                    <button className='cursor-pointer' onClick={()=>setQuantity((prev)=>(prev<9? prev+1:9))}>+</button>
                </div>
            </div>
            <div>
            <button className=' w-30 bg-red-400 text-white ring-2 ring-red-400 p-2 cursor-pointer hover:bg-red-600 transition-colors'>
                Add to Cart
            </button>
            </div>
        </div>
    </div>
  )
}

export default Price