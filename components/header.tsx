'use client';

import Navbar from "./Navbar/navbar";
import { useEffect, useState } from "react";
// import Headroom from 'react-headroom';

const Header = () => {
  //   const [headerActive, setHeaderActive] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     //delete scroll
  //     setHeaderActive(window.scrollY > 50);
  //   };
  //   //add scroll  event
  //   window.addEventListener('scroll',handleScroll);

  //   //clear scroll event
  //   return () => {
  //     window.removeEventListener('scroll',handleScroll);
  //   };
  // }, []);
    return (
        <header>
            <div>
                {/* desktop navbar - hidden on small devices */}
                <Navbar/>
            </div>
        </header>
    )}
export default Header;