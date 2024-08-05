'use client';
import React from 'react'
import NavbarCom from "@/components/NavbarCom";
import CategoriesCom from "@/components/CategoriesCom";
import TopNavbarCom from "@/components/TopNavbarCom";




const page = () => {
  return (
    <div>
      <TopNavbarCom/>
        <NavbarCom/>
        <CategoriesCom/>
    </div>
  )
}

export default page