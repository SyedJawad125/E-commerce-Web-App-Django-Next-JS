'use client';
import React from 'react'
import NavbarCom from "@/components/NavbarCom";
import ProductsCom from "@/components/ProductsCom";
import TopNavbarCom from "@/components/TopNavbarCom";
import FooterCom from "@/components/FooterCom";




const page = () => {
  return (
    <div>
      <TopNavbarCom/>
      <NavbarCom/>
      {/* <h1>Products</h1> */}
      <ProductsCom/>
      <div className="mt-20">
        <FooterCom />
      </div>
    </div>
  )
}

export default page