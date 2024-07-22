'use client';

// import swiper 
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperNavButton from "../Hero/swiper_nav_btn";

const Slider = () => {
    return (

    <Swiper spaceBetween={50} slidesPerView={3} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>

    </Swiper>
    // <Swiper className="h-full">
    //         <SwiperSlide className="h-full flex justify-end pt-39">
           
    //         <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    //                 <a className="block bg-gray-900 rounded-xl p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black-500/10" href="#">
    //                 <h2 className="mt-4 text-xl font-bold">Digital campaigns</h2>
    //                 <p className="mt-1 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci</p>
    //                 </a>

    //                 <a className="block bg-gray-900 rounded-xl p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black-500/10" href="#">
    //                 <h2 className="mt-4 text-xl font-bold">Digital campaigns</h2>
    //                 <p className="mt-1 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci</p>
    //                 </a>

    //                 <a className="block bg-gray-900 rounded-xl p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black-500/10" href="#">
    //                 <h2 className="mt-4 text-xl font-bold">Digital campaigns</h2>
    //                 <p className="mt-1 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci</p>
    //                 </a>
    //             </div>
    //         </SwiperSlide>

    //         <SwiperSlide className="h-full flex justify-end pt-39">
    //         <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    //                 <a className="block bg-gray-900 rounded-xl p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black-500/10" href="#">
    //                 <h2 className="mt-4 text-xl font-bold">Digital campaigns</h2>
    //                 <p className="mt-1 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci</p>
    //                 </a>

    //                 <a className="block bg-gray-900 rounded-xl p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black-500/10" href="#">
    //                 <h2 className="mt-4 text-xl font-bold">Digital campaigns</h2>
    //                 <p className="mt-1 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci</p>
    //                 </a>

    //                 <a className="block bg-gray-900 rounded-xl p-8 shadow-xl transition hover:border-black-500/10 hover:shadow-black-500/10" href="#">
    //                 <h2 className="mt-4 text-xl font-bold">Digital campaigns</h2>
    //                 <p className="mt-1 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci</p>
    //                 </a>
    //             </div>
    //         </SwiperSlide>


        //     {/* swiper nav button */}
    //       <SwiperNavButton 
    //         containerStyles="absolute bottom-2 lg:bottom-0 right-0 h-[200px] w-full lg:w-[700px] z-50 flex lg:justify-start gap-1" 
    //         btnStyles=" text-white w-[56px] h-[50px] flex justify-center items-center" 
    //         iconStyles="text-2xl"/>

    // </Swiper>
    )
}
export default Slider;
