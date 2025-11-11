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
            className="card group relative flex-shrink-0 lg:flex-shrink flex items-center justify-center w-80 h-96 rounded-xl overflow-hidden border border-transparent transition-all duration-500 ease-out hover:-translate-y-4 hover:border-white/40 hover:shadow-[0_25px_60px_-25px_rgba(0,0,0,0.45)]"
            style={{
              backgroundColor: card.bg,
            }}
          >
            <img
              src={card.src}
              alt={`ochi ${index + 1}`}
              className={`w-[98%] h-[98%] object-contain transition-transform duration-500 ease-out group-hover:scale-105 ${
                card.extraClass ? card.extraClass : ""
              }`}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/0 via-white/0 to-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
