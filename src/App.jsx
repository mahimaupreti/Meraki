import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) {
      return undefined;
    }

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainerRef.current || undefined,
      lenisOptions: {
        smoothTouch: false,
        touchMultiplier: 1,
      },
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      data-scroll-container
      className="w-full min-h-screen bg-black text-white overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <HeroSection />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
