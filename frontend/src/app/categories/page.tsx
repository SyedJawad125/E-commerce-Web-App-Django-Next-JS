'use client';
import React from 'react'
import CategoriesCom from "@/components/CategoriesCom";
import AdminDashboardCom from "@/components/AdminDashboardCom";



const page = () => {
  return (
    <div>
      <AdminDashboardCom/>
      <CategoriesCom/>
    </div>
  )
}

export default page