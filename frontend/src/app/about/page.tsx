import React from 'react'
import NavbarCom from "@/components/NavbarCom";
import AboutPageCom from "@/components/AboutPageCom";
import TopNavbarCom from "@/components/TopNavbarCom";





const about = () => {
  return (
    <div>
      <TopNavbarCom/>
      <NavbarCom/>
      <AboutPageCom/>
      <h1>About</h1>
    </div>
  )
}

export default about