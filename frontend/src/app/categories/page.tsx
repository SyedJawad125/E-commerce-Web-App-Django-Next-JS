'use client';
import React from 'react'
import NavbarCom from "@/components/NavbarCom";
import CategoriesCom from "@/components/CategoriesCom";
import TopNavbarCom from "@/components/TopNavbarCom";
import FooterCom from "@/components/FooterCom";





const page = () => {
  return (
    <div>
      <TopNavbarCom/>
      <NavbarCom/>
      <CategoriesCom/>
      <div className="mt-20">
        <FooterCom />
      </div>
    </div>
  )
}

export default page