import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import SERVICES from '../assets/images/SERVICES.png'

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.01"
      className="w-full bg-[#1d1f1e] rounded-t-3xl py-10 sm:py-20"
    >
      <div className="container w-full">
       
        <div className="md:flex justify-center gap-10">
          <div className="about-text h-fit">
            <h1 className="text-4xl mb-4 text-lime-300">Explore Our </h1>
            <p className="text-base sm:text-xl text-zinc-200 tracking-wide">
             Industry Expertise The boundless potential of custom software at your service. We will transform your ideas into reality through our expertise and technology solutions.
            </p>
            <div className="rounded-full flex gap-2 justify-center mt-4 w-fit bg-[#D0FF11] text-zinc-100 px-10 py-3 text-sm tracking-wider uppercase">
              Read more
              <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px]" />
            </div>
          </div>
          <img
            className="w-full rounded-3xl mt-10 md:w-[40vw] md:mt-0"
            src={SERVICES}
            alt="about us"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
