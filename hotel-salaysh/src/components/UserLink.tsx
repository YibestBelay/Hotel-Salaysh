'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { signOut } from 'next-auth/react'

const UserLink = () => {
    const {data:session} = useSession()
    return (
        <div>
            {session ? (
                <div className='flex gap-2 cursor-pointer'>
                <Link href="/orders">Orders</Link>
                <span onClick={() => signOut()}>Logout</span>
                </div> 
            ) : (
                <Link href="/login">Login</Link>
            )}
        </div>
    )
}

export default UserLink
