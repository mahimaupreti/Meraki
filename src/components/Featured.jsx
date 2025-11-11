import { motion, useAnimation } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import BEELINK from "../assets/images/BEELINK.png";
import CRYPTO from "../assets/images/CRYPTO.png";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHoverStart = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="container w-full sm:pt-20 pt-10">
      <div className="w-full border-b-[1px] border-zinc-700 pb-5">
        <h1 className="font-FoundersGroteskCondensed uppercase text-6xl">
          PROJECT HIGHLIGHTS
        </h1>
      </div>

      <div className="py-10 cards w-full flex flex-col md:flex-row gap-10">
        <motion.div
          onHoverStart={() => handleHoverStart(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide">
            <span className="w-2 h-2 bg-[#D0FF11] rounded-full"></span> BeeLinks AI
          </h1>

          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-hidden border-[1px]  border-[#D0FF11]">
            <img
              className="w-full h-auto object-cover hover:scale-105 transition-all"
              src={BEELINK}
              alt="featured"
            />
          </div>
        </motion.div>

        <motion.div
          onHoverStart={() => handleHoverStart(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide">
            <span className="w-2 h-2 bg-[#D0FF11] rounded-full"></span> Crypto Startup Landing Page
          </h1>

          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-hidden border-[1px] border-[#D0FF11]">
            <img
              className="w-full h-auto object-cover hover:scale-105 transition-all"
              src={CRYPTO}
              alt="featured"
            />
          </div>
        </motion.div>
      </div>

      <div className="m-auto rounded-full flex gap-2 justify-center w-fit bg-[#D0ff11] font-NueueMontreal text-black px-10 py-3 text-sm tracking-wider uppercase">
        See More
        <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px]" />
      </div>
    </div>
  );
}

export default Featured;
