import Slider from "./slider";

const Hero = () => {
    return (
        <section className="h-[80vh] lg:h-[700px] bg-hero bg-cover bg-center bg-no-repeat">
            <div className="conatiner mx-auto h-full">
                <Slider />
            </div>
        </section>
    )
}
export default Hero;