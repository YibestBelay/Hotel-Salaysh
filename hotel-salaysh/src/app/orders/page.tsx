import React from 'react'

const OrderPage = () => {
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
          <tr className='border-b border-gray-500 bg-red-50'>
            <td className='px-2 py-2 hidden md:block'>1</td>
            <td className='px-2 py-2 '>2025-07-28</td>
            <td className='px-2 py-2 '> $200</td>
            <td className='px-2 py-2 hidden md:block'>Pizza (2) , Burger (1)</td>
            <td className='px-2 py-2 '>On the way</td>
          </tr>
          <tr className='border-b border-gray-500 odd:bg-gray-100'>
            <td className='px-2 py-2 hidden md:block'>2</td>
            <td className='px-2 py-2 '>2025-07-28</td>
            <td className='px-2 py-2 '> $200</td>
            <td className='px-2 py-2 hidden md:block'>Pizza (2) </td>
            <td className='px-2 py-2 '>Delivered</td>
          </tr>
          <tr className='border-b border-gray-500 odd:bg-gray-100'>
            <td  className='px-2 py-2 hidden md:block'>3</td>
            <td className='px-2 py-2 '>2025-07-28</td>
            <td className='px-2 py-2 '> $200</td>
            <td className='px-2 py-2 hidden md:block'>Pizza (1) , Burger (3)</td>
            <td className='px-2 py-2 '>Delivered</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default OrderPage