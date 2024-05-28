'use client';

import MobileNavbar from "./Navbar/mobile_navbar";
import Navbar from "./Navbar/navbar";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {

    const [headerActive, setHeaderActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      //delete scroll
      setHeaderActive(window.scrollY > 50);
    };
    //add scroll  event
    window.addEventListener('scroll',handleScroll);

    //clear scroll event
    return () => {
      window.removeEventListener('scroll',handleScroll);
    };
  }, []);


    return (
        <header className={`${headerActive?'h-[100px]': 'h-[124px]'} fixed left-0 right-0 w-full bg-black h-[100px]`}>
            <div className="container mx-auto h-full flex items-center justify-between">

                {/* logo */}
                <Link href=''>
                <Image src={'/images/logo.png'} width={90} height={90} alt=""/>
                </Link>

                {/* mobile navbar */}
                {/* <MobileNavbar containerStyles=" text-white" /> */}

                {/* desktop navbar - hidden on small devices */}
                <Navbar containerStyles="text-white flex gap-10 "/>
            </div>
        </header>
    )
}
export default Header;