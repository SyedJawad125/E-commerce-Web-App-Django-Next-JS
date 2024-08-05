import React from 'react'
import NavbarCom from "@/components/NavbarCom";
import ServicesPageCom from "@/components/ServicesPageCom";
import TopNavbarCom from "@/components/TopNavbarCom";



const page = () => {
  return (
    <div>
      <TopNavbarCom/>
      <NavbarCom/>
      <ServicesPageCom/>
    </div>
  )
}

export default page