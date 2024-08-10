'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Updated import for Next.js 13+ 

const NavbarCom = () => {
  const pathname = usePathname(); // Hook to get the current path

  return (
    <nav className="bg-blue-700 w-full">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className="text-white text-xl font-bold">ONLINE SHOP</div>
        <ul className="flex space-x-10 ml-auto mr-20">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Products', path: '/publicproducts' },
            { name: 'Categories', path: '/publiccategories' },
            { name: 'Contact', path: '/contact' },
            { name: 'Admin', path: '/admindashboard' },
          ].map((item) => (
            <li key={item.path}>
              <Link href={item.path}>
                <div
                  className={`${
                    pathname === item.path
                      ? 'text-black'
                      : 'text-white'
                  } hover:text-red-500 px-3 py-2`}
                >
                  {item.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavbarCom;




// 'use client'
// import React from 'react'
// import Link from 'next/link';
// import HoverBox from "@/components/HoverBox";


// const [hovering, setHovering] = useState(false);

// const NavbarCom = () => {

//   const sampleProducts = [
//     { id: 1, img1: '1.jpg', name: 'Leather Bag' },
//     { id: 2, img2: '2.jpg', name: 'Pent Coat' },
//   ];
  
//   return (
//     <>
//     <nav className="bg-blue-700 w-full">
//   <div className="container mx-auto flex justify-between items-center p-2">
//     <div className="text-white text-xl font-bold">
//       ONLINE SHOP
//     </div>
//     <ul className="flex space-x-10 ml-auto mr-20">
//       <li>
//         <Link href="/">
//           <div className="text-white hover:text-gray-300">Home</div>
//         </Link>
//       </li>
//       <li>
//         <Link href="/about">
//           <div className="text-white hover:text-gray-300">About</div>
//         </Link>
//       </li>
//       <li>
//         <Link href="/services">
//           <div className="text-white hover:text-gray-300">Services</div>
//         </Link>
//       </li>
//       <li>
//         <Link href="/publicproducts">
//           <div className="text-white hover:text-gray-300">Products</div>
//         </Link>
//       </li>
//       <li>
//         <Link href="/publiccategories">
//           <div className="text-white hover:text-gray-300">Categories</div>
//         </Link>
//       </li>
//       <li>
//         <Link href="/contact">
//           <div className="text-white hover:text-gray-300">Contact</div>
//         </Link>
//       </li>
//       <li>
//         <Link href="/admindashboard">
//           <div className="text-white hover:text-gray-300">Admin</div>
//         </Link>
//       </li>
//     </ul>
//   </div>
// </nav>

//     </>
//   )
// }

// export default NavbarCom