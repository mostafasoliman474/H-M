import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import React from 'react'
const links= [
    {
        id:2,
        text:"Create An Account",
        dist:"/"
    },
    {
        id:1,
        text:"Sign In",
        dist:"/"
    },
    {
        id:3,
        text:"Find Stores",
        dist:"/"
    },
    {
        id:4,
        text:"العربى",
        dist:"/"
    },
]
const navLinks=[
    {
        id:1,
        text:"Women",
        dist:"/"
    },
    {
        id:2,
        text:"Men",
        dist:"/"
    },
    {
        id:3,
        text:"Baby",
        dist:"/"
    },
    {
        id:4,
        text:"Kids",
        dist:"/"
    },
    {
        id:5,
        text:"H&M Home",
        dist:"/"
    },
    {
        id:6,
        text:"Sport",
        dist:"/"
    },
    {
        id:7,
        text:"Sale",
        dist:"/"
    },
    {
        id:8,
        text:"Sustainability",
        dist:"/"
    },
]
const Header = () => {
  return (
    <header>
        <div className='max-w-7xl flex justify-center gap-5 mx-auto pt-4'>
            {links.map(link=>(
                <a key={link.id} href={link.dist} className='text-sm'> {link.text}</a>
            ))}
            
        </div>
        <nav className='flex mx-auto max-w-6xl justify-between py-6 items-center'>
            <div className='flex border-black border-b-2'>
                <input type='text' placeholder='What are you looking for?' className='outline-none text-black'/>
                <MagnifyingGlassIcon className='h-8 w-8'/>
            </div>
            <div >
                <img src='https://eg.hm.com/themes/custom/transac/alshaya_hnm/site-logo.svg?tY6kjl' className='max-w-[15%]'/>
            </div>
            <div className='flex gap-4'>
                <HeartIcon className='h-8 w-8'/>
                <ShoppingBagIcon className='h-8 w-8'/>
            </div>
        </nav>
        <div className='max-w-7xl flex justify-center gap-5 mx-auto pt-4'>
            {navLinks.map(link=>(
                <a key={link.id} href={link.dist}>{link.text}</a>
            ))}
        </div>
    </header>
  )
}

export default Header