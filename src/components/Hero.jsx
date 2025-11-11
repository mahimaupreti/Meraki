import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const currentVideoRef = useRef(null);
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos >= totalVideos) {
      setLoading(false);
    }
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, [loadedVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set(nextVideoRef.current, { visibility: "visible" });
        gsap.to(nextVideoRef.current, {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from(currentVideoRef.current, {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(20% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `/src/assets/videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        {/* Video Previews */}
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={currentVideoRef}
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </VideoPreview>
          </div>

         <video
  ref={currentVideoRef}
  src={getVideoSrc((currentIndex % totalVideos) + 1)}
  loop
  muted
  autoPlay
  className="absolute top-0 left-0 w-full h-full object-cover"
  onLoadedData={handleVideoLoad}
/>

<video
  ref={nextVideoRef}
  src={getVideoSrc(currentIndex)}
  loop
  muted
  className="absolute top-0 left-0 w-full h-full object-cover invisible"
  onLoadedData={handleVideoLoad}
/>

<video
  src={getVideoSrc(currentIndex === totalVideos ? 1 : currentIndex)}
  autoPlay
  loop
  muted
  className="absolute top-0 left-0 w-full h-full object-cover"
/>

        </div>

        <div className="pointer-events-none absolute inset-0 z-40">
          <div className="absolute top-16 left-6">
            <h1 className="font-SpecialBold font-FoundersGroteskCondensed uppercase text-[150px] text-6xl">
              Innovate
            </h1>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center gap-6">
  <h1 className="font-SpecialBold font-FoundersGroteskCondensed uppercase text-[150px] text-6xl">
    Design
  </h1>
  <Button
    id="watch-trailer"
    title="trailer"
    leftIcon={<TiLocationArrow />}
    containerClass="bg-yellow-300 flex-center gap-1"
  />
</div>


          <div className="absolute bottom-16 right-6 text-right">
            <h1 className="font-SpecialBold font-FoundersGroteskCondensed uppercase text-[150px] text-6xl">
              Deliver
            </h1>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Hero;
