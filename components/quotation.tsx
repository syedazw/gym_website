'use client';

import Image from "next/image";

const Quote = () => {
    return (
        <section className="py-8 xl:py-0 lg:h-[95vh] bg-quote bg-cover bg-center relative"> 

            <div className="relative w-full h-full flex flex-col justify-center items-center bg-quote bg-cover bg-center">
                        {/* overlay */}
                <div className="bg-black/20 absolute w-full h-full top-0 z-10 "></div>
                <p className="h5 text-white text-center mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi cumque totam eius dolores 
                iste non quibusdam deserunt alias voluptas blanditiis reiciendis dolore nisi molestias repellat sapiente, debitis 
                laborum nesciunt iusto!</p>
            
            </div> 
        </section>
    )
}
export default Quote;


