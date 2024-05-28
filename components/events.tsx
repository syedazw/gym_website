'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/lib/variants";


const events = [
    {
        image: '/images/judo.jpg',
        name: '2024 Champions Trophy',   
    },
    {
        image: '/images/Karate.jpg',
        name: '2024 Champions Trophy',   
    },
    {
        image: '/images/judo.jpg',
        name: '2024 Champions Trophy',   
    },
    {
        image: '/images/karate.jpg',
        name: '2024 Champions Trophy',   
    },
]


const Events = () => {
    return (
        <section className="py-12 xl:h-[110vh]">
            <div className="conatiner mx-auto h-full flex flex-col items-center justify-center">
                
                <h2 className="h2 text-center mb-6">Upcoming Events</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20">
                    {events.map((event, index)=> {
                        return (
                            <div className="flex flex-col items-center text-center" key={index}>
                                <div className="relative w-[250px] h-[250px] mx-auto">
                                    <Image src={event.image} fill alt=""></Image>
                                </div>
                                <h5 className="h5 ">{event.name}</h5>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Events;