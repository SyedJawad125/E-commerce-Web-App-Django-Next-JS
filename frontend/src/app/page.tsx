'use client'
import Image from "next/image";
import Link from 'next/link';
import NavbarCom from "@/components/NavbarCom";
import TopNavbarCom from "@/components/TopNavbarCom";
import FooterCom from "@/components/FooterCom";
import BannerSliderHomeCom from "@/components/BannerSliderHomeCom";
import LeftSideSliderCom from "@/components/LeftSideSliderCom";





export default function Home() {
  return (
    <>
    <TopNavbarCom />
    <NavbarCom />
    <main className="relative flex">
      <LeftSideSliderCom />
      <div className="ml-[15%] w-[85%]">
        
        <BannerSliderHomeCom />
        
      </div>
    </main>
    <FooterCom />
    </>
  );
}
