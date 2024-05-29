'use client';

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";


const Navbar = () => {

    // const [fix, setFix] = useState(false);
    // const headerfixed = () => {
    //   if (window.scrollY >= 200){
    //     setFix(true)
    //   }else{
    //     setFix(false)
    //   }
    // }
    // window.addEventListener('scroll',headerfixed);


    const [isClick, setisClick] = useState(false);
    const toggleNavbar = () =>{
        setisClick(!isClick)
    }
    return (
        <>
        <nav className="bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-22">
                    <div className="flex items-center py-2 p-18">
                        <div className="flex-shrink-0">
                        <Link href=''><Image src={'/images/logo.png'} width={90} height={90} alt="" />
                        </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4 ">
                            <a href="" className="text-white p-2">Home</a>
                            <a href="" className="text-white p-2">Events</a>
                            <a href="" className="text-white p-2">About</a>
                            <a href="" className="text-white p-2">Contact</a>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-white 
                        hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={toggleNavbar}>
                            {isClick ? (
                                <svg 
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                    <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ): (
                                <svg 
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                    <path 
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* moble navbar */}
            {isClick && (
                <div className="md:hidden">
                    <div className="flex flex-col text-center gap-5 px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="" className="text-white block p-2">Home</a>
                        <a href="" className="text-white block p-2">Events</a>
                        <a href="" className="text-white block p-2">About</a>
                        <a href="" className="text-white block p-2">Contact</a>
                    </div>
                </div>
            )} 
        </nav>
        </>
    )} 
export default Navbar;