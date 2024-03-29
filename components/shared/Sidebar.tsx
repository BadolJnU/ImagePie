"use client";

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { PathnameContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button';

const Sidebar = () => {
    const pathname = usePathname();
  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-2'>
            {/* logo in sidebar */}
            <Link href="/" className='sidebar-logo flex-center'>
                <Image src="/assets/images/logo.png" alt='logo' width={180} height={28}/>
            </Link>

            {/* navbar nav links */}
            <nav className='sidebar-nav'>
                {/* if user sign in */}
                <SignedIn>
                    <ul className="sidebar-nav_elements">
                        {
                            navLinks.slice(0,6).map((link) => {
                                const isActive = link.route === pathname
                                return (
                                    <li className={`sidebar-nav_element group ${isActive ? 'bg-orange-500 text-white' : 'text-gray-700'}`} key={link.route}>
                                        <Link href={link.route} className='sidebar-link hover:-translate-y-1 hover:scale-110 hover:bg-orange-200 duration-300 hover:rounded-full'>
                                            <Image 
                                                src={link.icon}
                                                alt='logo'
                                                width={24}
                                                height={24}
                                                className={`${isActive && 'brightness-200 bg-none text-2xl'}`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className="sidebar-nav_elements">
                    {
                            navLinks.slice(6).map((link) => {
                                const isActive = link.route === pathname
                                return (
                                    <li className={`sidebar-nav_element group ${isActive ? 'bg-orange-500 text-white' : 'text-gray-700'}`} key={link.route}>
                                        <Link href={link.route} className='sidebar-link hover:-translate-y-1 hover:scale-110 hover:bg-orange-200 duration-300 hover:rounded-full'>
                                            <Image 
                                                src={link.icon}
                                                alt='logo'
                                                width={24}
                                                height={24}
                                                className={`${isActive && 'brightness-200 bg-none text-2xl'}`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        <li className='flex-center cursor-pointer gap-2 p-4'>
                            <UserButton afterSignOutUrl='/' showName/>                
                        </li>
                    </ul>
                </SignedIn>
                {/* if user sign out */}
                <SignedOut>
                    <Button asChild className='button bg-orange-500 bg-cover'>
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar