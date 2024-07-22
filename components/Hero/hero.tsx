import Slider from "./hero_slider";

const Hero = () => {
    return (
        <section className="h-[80vh] lg:h-[600px] bg-hero bg-cover bg-center bg-no-repeat">
            <div className="conatiner mx-auto h-full">
                <Slider />
            </div>
        </section>
    )
}
export default Hero;