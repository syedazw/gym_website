'use client';

import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import {motion } from "framer-motion";



const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="container mx-auto">
                <div className="text-white grid grid-cols-1 sm:grid-cols-2 py-5">
                    {/* info */}
                    <div className="flex flex-col">
                        <Link href={''}> <Image src={'/images/logo.png'} width={90} height={90} alt=""/></Link>
                        <p className="max-w-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe at dignissimos esse atque fugit similique!</p>
                        <ul className="flex flex-col gap-4 py-5">
                            <li className="flex items-center gap-4">
                                <FaMapMarkerAlt  className="text-xl text-red-500"/>
                                <span>North Nazimbad Block-04, Karachi</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <FaPhoneAlt  className="text-xl text-red-500"/>
                                <span>(+92) 310-546728-90 </span>
                            </li>
                            <li>
                                <Link className="flex items-center gap-4" href={''}>
                                    <FaEnvelope  className="text-xl text-red-500"/>
                                    <span>sayhello@gmail.com</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* social */}
                    <div>
                        <h5 className="h5 text-center items-center justify-center py-8">Follow Us on Social Media</h5>
                        <div className="flex py-2">
                            <ul className="flex items-center justify-start h-full gap-4">
                                <li>
                                <Link href={''} className="text-white transition-all text-red-500">
                                <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link href={''} className="text-white transition-all text-red-500">
                                <FaInstagram />
                                </Link>
                            </li>
                            <li>
                            <Link href={''} className="text-white transition-all text-red-500">
                                <FaYoutube />
                                </Link>
                            </li>
                            <li>
                            <Link href={''} className="text-white transition-all text-red-500">
                                <FaTwitter />
                                </Link>
                            </li>
                            <li>
                            <Link href={''} className="text-white transition-all text-red-500">
                                <FaLinkedin />
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </div>

                    {/* copywrite */}
                    <div className="text-white border-t border-white/20 py-5">
                        <div className="container mx-auto h-full">
                            <div>
                                <span>&copy; Copyright 2024 FitnessTrain</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;