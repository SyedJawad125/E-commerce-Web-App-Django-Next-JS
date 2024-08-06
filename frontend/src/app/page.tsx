'use client'
import Image from "next/image";
import Link from 'next/link';
import NavbarCom from "@/components/NavbarCom";
import TopNavbarCom from "@/components/TopNavbarCom";
import BannerSliderHomeCom from "@/components/BannerSliderHomeCom";




export default function Home() {
  return (
    <main >
      <TopNavbarCom/>
      <NavbarCom/>
      <BannerSliderHomeCom/>
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <h1 className="text-3xl font-bold underline bg-red-500">
        
      </h1>    
      </div> */}
    </main>
  );
}
