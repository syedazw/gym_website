import Slider from "./slider";

const Hero = () => {
    return (
        <section className="h-[20vh] lg:h-[630px] bg-hero bg-cover bg-center bg-no-repeat">
            <div className="conatiner mx-auto h-full">
                {/* slider */}
            <Slider />
            </div>
        </section>
    )
}
export default Hero;