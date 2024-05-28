import About from "@/components/about";
import Events from "@/components/events";
import Gallery from "@/components/gallery";
import Hero from "@/components/Hero/hero";
import Quote from "@/components/quotation";

export default function Home() {
  return (
   <main>
  <Hero />
  <Events />
  <Gallery />
  {/* <About /> */}
  <Quote />
  </main>
  );
}
