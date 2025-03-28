'use client'

import Link from 'next/link'
import React from 'react'
import {AiFillBug} from 'react-icons/ai'
import {usePathname} from 'next/navigation'
import classNames from 'classnames'

const NavBar = () => {

  const navLinks = [
    {name: 'Dashboard', href: '/'},
    {name: 'Issues', href: '/issues'},
  ]

  const currentPath = usePathname();
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href='/'><AiFillBug /></Link>
        <ul className='flex space-x-6'>
          {navLinks?.map((link)=>(
            <Link
               key={link?.href}
               href={link.href} 
               className={classNames({
                'text-zinc-900' : link?.href === currentPath,
                'text-zinc-500': link?.href !== currentPath,
                'hover: text-zinc-800 transition-colors' : true
               })}>
              {link?.name}
            </Link>
          ))}
        </ul>
    </nav>
  )
}

export default NavBar
