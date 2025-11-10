import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function HeroSection() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="container w-full"
    >
      <div className="textstructure py-[10vh]">
        {["It All", " Begin With", "An Idea!"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-center overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "16vw" }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 1,
                    delay: 1,
                  }}
                  className="w-[8vw] h-[5vh] sm:h-[6vh] sm:w-[5vw] sm:mt-5 mr-5 rounded-md bg-[#D0FF11]"
                ></motion.div>
              )}
              <h1
                key={index}
                className="font-FoundersGroteskCondensed sm:-mb-[1vw] md:text-[10vw] sm:text-[12vw] text-[16vw] uppercase whitespace-nowrap leading-none h-full"
              >
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t-[1px] border-zinc-800 py-5 font-NueueMontreal">
       
      </div>
    </div>
  );
}

export default HeroSection;
