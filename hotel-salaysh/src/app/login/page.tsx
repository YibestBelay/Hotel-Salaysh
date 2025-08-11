'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  if (status === 'loading') return <div>Loading...</div>

  return (
    <div className='p-4 lg:px-15 xl:px-20 flex justify-center items-center h-[calc(100vh-5.5rem)] md:h-[calc(100vh-6.25rem)]'>
       <div className='h-full flex flex-col items-center shadow-2xl rounded-md md:justify-center md:flex-row gap-5 md:w-full'>
        <div className='relative md:p-0'>
            <Image src="/Thanos restin.png" alt="" width={500} height={500} className='object-contain'/>
        </div>
        <div className='flex flex-col gap-8'>
           <h1 className='text-3xl font-bold'>Welcome To Hotel Salaysh</h1>
           <p>Login to your account or create new To get started</p>
           <button className='flex items-center gap-2 ring-1 ring-orange-200 p-2 w-1/2 rounded-md hover:bg-orange-200 transition-colors cursor-pointer' onClick={() => signIn('google')}>
            <Image src="/Google logo.jpg" alt="" width={35} height={35} className='object-contain ring-2 rounded-md'/>
            <span>Google</span>
            </button>
           <button className='flex items-center gap-2 ring-1 ring-blue-200 p-2 w-1/2 rounded-md hover:bg-blue-200 transition-colors cursor-pointer'>
            <Facebook className='bg-blue-500 text-white ring-2 rounded-md'/>
            <span>Facebook</span>
            </button>
           <p>Any Problem? <Link href="/contact" className='underline'>Contact Us</Link></p>
        </div>
       </div>
    </div>
  )
}

export default LoginPage