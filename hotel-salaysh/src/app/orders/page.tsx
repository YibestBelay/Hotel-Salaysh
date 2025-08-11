'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { OrderType } from '@/types/types'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Pen } from 'lucide-react';
import { useMutation,useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'


const OrderPage = () => {
  const {data:session,status} = useSession()
  const router = useRouter()
  if(status === 'unauthenticated') return router.push('/')

  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      fetch('http://localhost:3000/api/orders').then((res) =>
        res.json(),
      ),
  })
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: ({id,status}: {id:string,status:string})=>{
      return fetch(`http://localhost:3000/api/orders/${id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({status})
      })
    },
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['orders']})
    }
  })

  const handleUpdate = async(e:React.FormEvent<HTMLFormElement>,id:string)=>{
    e.preventDefault()
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;
    mutation.mutate({id,status})
    toast.success('OrderStatus updated successfully')
    
  }
  if (isLoading) return 'Loading...'
  
  return (
    <div className='p-4 md:p-15 lg:p-20'>
      <table className='w-full border-separate border-spacing-3'>
        <thead className='text-left'>
          <tr className='border-b border-gray-500'>
            <th className='px-2 py-2 hidden md:block'>Order Id</th>
            <th className='px-2 py-2 '>Date</th>
            <th className='px-2 py-2 '>Price</th>
            <th className='px-2 py-2 hidden md:block'>Products</th>
            <th className='px-2 py-2 '>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item:OrderType) => (
            <tr key={item.id} className={`border-b border-gray-500  odd:bg-gray-100 ${item.status === 'delivered' ? 'bg-green-100' : ''}`}
            >
              <td className='px-2 py-2 hidden md:block'>{item.id}</td>
              <td className='px-2 py-2 '>{item.createdAt.toString().split('T')[0]}</td>
              <td className='px-2 py-2 '>{item.price}</td>
              <td className='px-2 py-2 hidden md:block'>{item.products[0].title}</td>
                 {session?.user.isAdmin ?(
                  <td>
                    <form className='flex items-center justify-center gap-4  ' onSubmit={(e)=>handleUpdate(e, item.id.toString())}>
                    <input type="text" placeholder={item.status} className='px-2 py-1 rounded-md capitalize'/>
                    <button type='submit'><Pen className='cursor-pointer'/></button>
                    </form>
                  </td>
                 ):(
                  <td className='px-2 py-2 '>{  item.status}</td>
                 )}
                       
            </tr>
          ))} 
        </tbody>
      </table>

    </div>
  )
}

export default OrderPage