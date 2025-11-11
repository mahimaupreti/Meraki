import React from "react";
import aImg from "../assets/images/AI.png";
import bImg from "../assets/images/UXDesign.png";
import cImg from "../assets/images/Custom_Software.png";
import dImg from "../assets/images/Quality_Assurance.png";
import eImg from "../assets/images/Web_App.png";

function Cards() {
  const cardData = [
    { src: aImg, bg: "#D0FF11" },
    { src: bImg, bg: "#293231" },
    { src: cImg, bg: "#D0FF11" },
    { src: dImg, bg: "#293231" },
    { src: eImg, bg: "#D0FF11" },
  ];

  return (
    <div className="container w-full py-20">
      {/* Horizontal scroll for small screens */}
      <div className="flex gap-5 overflow-x-auto lg:overflow-x-visible w-max lg:w-full scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-zinc-800 scroll-smooth">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card relative flex-shrink-0 lg:flex-shrink flex items-center justify-center w-80 h-96 rounded-xl overflow-hidden"
            style={{ backgroundColor: card.bg }}
          >
            <img
              src={card.src}
              alt={`ochi ${index + 1}`}
              className={`w-[98%] h-[98%] object-contain ${card.extraClass ? card.extraClass : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
