'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ProductType } from '@/types/types';

const Featured = () => {
  const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        setFeaturedProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (!featuredProducts || featuredProducts.length === 0) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <p className="text-gray-500">No featured products available.</p>
      </div>
    );
  }

  return (
    <div className='w-full overflow-x-auto text-red-500'>
      {/* Wrapper */}
      <div className='flex w-max'>
        {/* single items */}
        {featuredProducts.map((item) => (
          <div 
            key={item.id}
            className='w-screen h-[80vh] flex flex-col justify-around items-center p-4 md:p-10 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'
          >
            {/* Image */}
            {item.img && (
              <div className='relative flex-1 w-full hover:rotate-y-[20deg] transition-all duration-500'>
                <Image 
                  src={item.img} 
                  alt={item.title || 'Product image'}
                  fill 
                  className='object-cover'
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
            {/* text */}
            <div className='flex-1 flex flex-col justify-center items-center text-center gap-4 p-4 md:p-10'>
              <h1 className='text-2xl font-bold uppercase xl:text-4xl'>{item.title}</h1>
              <p className='text-l p-4 xl:text-xl'>{item.desc}</p>
              <span className='text-xl font-bold xl:text-2xl'>${item.price}</span>
              <button className='bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-colors cursor-pointer'>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;