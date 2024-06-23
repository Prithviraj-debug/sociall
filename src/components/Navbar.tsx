import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'

const Navbar = () => {
  return (
      <div className='h-24 flex items-center justify-between'>
        {/* Left */}
        <div className='md:hidden lg:block w-[20%]'>
            <Link href={"/"} className='font-bold text-xl text-teal-600'>Soc</Link>
        </div>
        {/* Center */}
        <div className='hidden md:flex w-[50%] items-center justify-between'>
            <div className='flex gap-6 text-gray-800'>
                <Link href={'/'}  className='flex items-center gap-2'>
                    <Image src='/home.png' alt='home' height={16} width={16} className='' />
                    <span>Home</span>
                </Link>
                <Link href={'/'} className='flex items-center gap-2'>
                    <Image src='/friends.png' alt='home' height={16} width={16} className='' />
                    <span>Friends</span>
                </Link>
                <Link href={'/'} className='flex items-center gap-2'>
                    <Image src='/stories.png' alt='home' height={16} width={16} className='' />
                    <span>Stories</span>
                </Link>
            </div>
            
            <div className='hidden xl:flex p-2 bg-gray-200 items-center rounded-xl'>
                <input type='text' placeholder='Search...' className='bg-transparent outline-none' />
                <Image src="/search.png" alt='search' width={14} height={14} />
            </div>
        </div>
        {/* rioght */}
        <div className='w-[30%] flex items-center gap-4 lg:gap-8 justify-end'>
            <ClerkLoading>

            </ClerkLoading>
            <ClerkLoaded>
                <SignedIn>
                    <div className='cursor-pointer'>
                        <Image src="/people.png" alt="people" width={24} height={24} />
                    </div>
                    <div className='cursor-pointer'>
                        <Image src="/messages.png" alt="people" width={24} height={24} />
                    </div>
                    <div className='cursor-pointer'>
                        <Image src="/notifications.png" alt="people" width={24} height={24} />
                    </div>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <div className=''>
                        {/* <Image src="/login.png" alt='login' width={20} height={20} /> */}
                        <Link href="/sign-in">Login/Register</Link>
                    </div>
                </SignedOut>
            </ClerkLoaded>
            <MobileMenu />
        </div>
    </div>
  )
}

export default Navbar