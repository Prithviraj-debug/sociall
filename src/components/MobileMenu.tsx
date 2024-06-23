"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const MobileMenu = () => {
    const [ menuOpen, setMenuOpen ] = useState(false)

    const handleMenuOpen = () => {
        setMenuOpen((prev) => !prev)
    }
  return (
    <div className='md:hidden'>
        <div className={`flex flex-col gap-[4.5px] cursor-pointer`} onClick={handleMenuOpen}>
            <div className={`w-6 h-1 bg-teal-500 rounded-sm ${menuOpen === true ? 'origin-left rotate-45' : ""} ease-in-out duration-300`} />
            <div className={`w-6 h-1 rounded-sm bg-teal-500 ${menuOpen === true ? 'opacity-0' : ""} ease-in-out duration-300`} />
            <div className={`w-6 h-1 bg-teal-500 rounded-sm ${menuOpen === true ? 'origin-left -rotate-45 ' : ""} ease-in-out duration-300`} />
        </div>

        {menuOpen && (
            <div className='absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-slate-50 flex flex-col gap-8 justify-center items-center font-medium'>
                <Link href='/'>Home</Link>
                <Link href='/friends'>Friends</Link>
                <Link href='/groups'>Groups</Link>
                <Link href='/stories'>Stories</Link>
                <Link href='/profile'>Profile</Link>
            </div>
        )}
    </div>
  )
}

export default MobileMenu