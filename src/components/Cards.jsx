import { useEffect, useRef } from "react";
import aImg from "../assets/images/AI.png";
import bImg from "../assets/images/UXDesign.png";
import cImg from "../assets/images/Custom_Software.png";
import dImg from "../assets/images/Quality_Assurance.png";
import eImg from "../assets/images/Web_App.png";

function Cards() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 1024) {
      return undefined;
    }

    const container = scrollContainerRef.current;
    if (!container || container.scrollWidth <= container.clientWidth) {
      return undefined;
    }

    let animationFrameId;
    let restartTimeout;
    let start;

    const scrollDuration = 6000;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = (elapsed % scrollDuration) / scrollDuration;
      const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollLeft = progress * maxScroll;
      animationFrameId = window.requestAnimationFrame(step);
    };

    animationFrameId = window.requestAnimationFrame(step);

    const handlePointerDown = () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      if (restartTimeout) {
        window.clearTimeout(restartTimeout);
      }
      restartTimeout = window.setTimeout(() => {
        start = undefined;
        animationFrameId = window.requestAnimationFrame(step);
      }, 2500);
    };

    container.addEventListener("pointerdown", handlePointerDown);

    return () => {
      container.removeEventListener("pointerdown", handlePointerDown);
      if (restartTimeout) {
        window.clearTimeout(restartTimeout);
      }
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

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
      <div
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto lg:overflow-x-visible w-full scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-zinc-800 scroll-smooth snap-x snap-mandatory lg:snap-none"
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card group relative flex-shrink-0 lg:flex-shrink flex items-center justify-center w-80 h-96 rounded-xl overflow-hidden border border-transparent transition-all duration-500 ease-out hover:-translate-y-4 hover:border-white/40 hover:shadow-[0_25px_60px_-25px_rgba(0,0,0,0.45)] snap-start"
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
