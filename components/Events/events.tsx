'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Link from "next/link";




const events = [
    {
        id: 1,
        img: '/images/judo.jpg',
        name: '2024 Champions Trophy',   
    },
    {
        id: 2,
        img: '/images/Karate.jpg',
        name: '2024 Champions Trophy',   
    },
    {
        id: 3,
        img: '/images/judo.jpg',
        name: '2024 Champions Trophy',   
    },
    {
        id: 4,
        img: '/images/karate.jpg',
        name: '2024 Champions Trophy',   
    },
]


const Events = () => {

    const settings = {
        dots: true,
        infinte: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }


    return (
        <>
        <section className="py-12 xl:h-[80vh]">
            <div className="w-3/4 m-auto">
                <h2 className="h2 text-center mb-6">Upcoming Events</h2>
                <div className="gap-8">
                    <Slider {...settings}>
                    {events.map((item) => (
                        <div key={item.id} className='bg-white h-[300px] text-black'>
                            <div>
                                <Image src={item.img} alt="" width={250} height={250}/>                               
                            </div>

                            <div className='justify-center items-center gap-4 p-4'>
                                <p className='text-xl font-bold'>{item.name}</p>
                                <button className='bg-gray-500 mt-4 text-white text-lg px-5 py-1 rounded-xl'>Read More</button>
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
        </section>
       </>       
    )
}
export default Events;
