'use client'
import React from 'react'
import Link from 'next/link';


const NavbarCom = () => {
  return (
    <>
    <nav className="bg-blue-700 w-full">
  <div className="container mx-auto flex justify-between items-center p-2">
    <div className="text-white text-xl font-bold">
      ONLINE SHOP
    </div>
    <ul className="flex space-x-10 ml-auto mr-20">
      <li>
        <Link href="/">
          <div className="text-white hover:text-gray-300">Home</div>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <div className="text-white hover:text-gray-300">About</div>
        </Link>
      </li>
      <li>
        <Link href="/services">
          <div className="text-white hover:text-gray-300">Services</div>
        </Link>
      </li>
      <li>
        <Link href="/categories">
          <div className="text-white hover:text-gray-300">Categories</div>
        </Link>
      </li>
      <li>
        <Link href="/products">
          <div className="text-white hover:text-gray-300">Products</div>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <div className="text-white hover:text-gray-300">Contact</div>
        </Link>
      </li>
    </ul>
  </div>
</nav>

    </>
  )
}

export default NavbarCom