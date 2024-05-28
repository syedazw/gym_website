'use client';

import Image from "next/image";
import {motion} from "framer-motion";
import { FadeIn } from "@/lib/variants";

const gallery = [
    {
        name: 'judo',
        img: '/images/judo.jpg'
    },
    {
        name: 'body-building',
        img: '/images/Karate.jpg'
    },
    {
        name: 'judo',
        img: '/images/judo.jpg'
    },
    {
        name: 'judo',
        img: '/images/judo.jpg'
    },
]

const Gallery = () => {
    return (
        <section >
            <h2 className="h2 flex flex-col items-center text-center">Gallery</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {gallery.map((item, index)=> {
                    return (
                     <div className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center" key={index}>
                        {/* overlay */}
                        <Image src={item.img} fill className="" alt=""/>
                        <div className="bg-black/20 absolute w-full h-full top-0 z-10 "></div>
                    </div>)
                })}
            </div>
        </section>
    )
}
export default Gallery;