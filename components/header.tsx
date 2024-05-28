'use client';

import Navbar from "./Navbar/navbar";
import { useEffect, useState } from "react";
// import Headroom from 'react-headroom';

const Header = () => {

    // const [headeractive, setHeaderActive] = useState(false);

    // const scrollHeader = () => {
    //   if (window.scrollY >= 20){
    //     setHeaderActive(true)
    //   }else{
    //     setHeaderActive(false)
    //   }
    // }
    // useEffect(()=> {
    //   window.addEventListener('scroll',scrollHeader);

    //   return ()=> {
    //     window.addEventListener('scroll',scrollHeader);
    //   }
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