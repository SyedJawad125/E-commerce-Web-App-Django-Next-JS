import React from 'react'
import NavbarCom from "@/components/NavbarCom";
import ContactPageCom from "@/components/ContactPageCom";
import TopNavbarCom from "@/components/TopNavbarCom";



const page = () => {
  return (
    <div>
      <TopNavbarCom/>
      <NavbarCom/>
      <ContactPageCom/>
    </div>
  )
}

export default page