'use client';

import Navbar from "./Navbar/navbar";
import { useEffect, useState } from "react";
// import Headroom from 'react-headroom';

const Header = () => {
    return (
        <header>
            <div>
                {/* desktop navbar - hidden on small devices */}
                <Navbar/>
            </div>
        </header>
    )}
export default Header;