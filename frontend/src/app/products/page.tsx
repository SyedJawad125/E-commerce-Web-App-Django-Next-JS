'use client';
import React from 'react'
import ProductsCom from "@/components/ProductsCom";
import AdminDashboardCom from "@/components/AdminDashboardCom";



const page = () => {
  return (
    <div>
      <AdminDashboardCom/>
      <ProductsCom/>
    </div>
  )
}

export default page


{/* <div className="flex h-screen">
      
      <div className="w-[15%] bg-gray-800 text-white">
        <AdminDashboardCom />
      </div>
      <div className="w-[85%] p-6 bg-gray-100">
        <ProductsCom />
      </div>
    </div> */}