'use client'
import Image from "next/image";
import Link from 'next/link';
import NavbarCom from "@/components/NavbarCom";
import TopNavbarCom from "@/components/TopNavbarCom";
import FooterCom from "@/components/FooterCom";
import BannerSliderHomeCom from "@/components/BannerSliderHomeCom";




export default function Home() {
  return (
    <main >
      <TopNavbarCom/>
      <NavbarCom/>
      <BannerSliderHomeCom/>
      
      <FooterCom/>
    </main>
  );
}
