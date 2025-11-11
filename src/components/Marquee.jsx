import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  const text = "MERAKI  CREATIONS  SOFTWARE  DEVELOPMENT COMPANY ◦   "; // extra spaces for gap

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-01"
      className="w-full py-8 rounded-t-3xl bg-[#0000]"
    >
      <div className="text text-[10vw] leading-none uppercase border-t-[1px] border-b-[1px] border-zinc-400 flex whitespace-nowrap overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
        >
          {/* repeat the text twice for seamless scroll */}
          <span className="font-FoundersGroteskCondensed mr-16" style={{ color: "#D0FF11" }}>
            {text}
          </span>
          <span className="font-FoundersGroteskCondensed mr-16" style={{ color: "#D0FF11" }}>
            {text}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
