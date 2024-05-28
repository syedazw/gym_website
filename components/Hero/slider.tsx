'use client';

// import swiper 
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperNavButton from "./swiper_nav_btn";

const Slider = () => {
    return (
        <Swiper className="h-full">
            <SwiperSlide className="h-full flex justify-end pt-48">
                <div>
                    <h1 className="h1 p-12">
                        <span>Where hard</span>work meets success
                    </h1>
                </div>
            </SwiperSlide>

            <SwiperSlide className="h-full flex justify-end pt-48">
                <div>
                    <h1 className="h1 p-12">
                        <span>Where hard</span>work meets success
                    </h1>
                </div>
            </SwiperSlide>


            {/* swiper nav button */}
            <SwiperNavButton 
            containerStyles="absolute bottom-2 lg:bottom-0 right-0 h-[60px] w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-1" 
            btnStyles=" text-white w-[56px] h-[50px] flex justify-center items-center" 
            iconStyles="text-2xl"/>

        </Swiper>
    )
}
export default Slider;