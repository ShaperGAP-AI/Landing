import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DNA from "../components/for_professionals_teams_leaders/DNA";
import ArrowLeft from "../assets/flecha-izq.png";
import ArrowRight from "../assets/flecha.png";
import publicTargets from "../data/professionals_teams_leaders";

export default function For_Professionals_Teams_Leaders() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function handlePortraitClick(i) {
    if (i < currentIndex) {
      setDirection(-1);
    } else {
      setDirection(1);
    }
    setCurrentIndex(i);
  }

  function handleLeftArrowClick() {
    setDirection(-1);
    setCurrentIndex(currentIndex - 1);
  }

  function handleRightArrowClick() {
    setDirection(1);
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <div className="flex flex-col gap-5 multi-gradient-bg px-[4vw] pt-10">
      {/* HEADER */}
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-4xl text-black font-bold">
          For the Curious, <span className="text-darkpurple">the Career Shifters, the Builders,</span> & the Brave.
        </h1>
        <p className="text-black/50">Every journey is different. Here’s how Shaper’s growth DNA fits each path.</p>
      </div>
      {/* SLIDE */}
      <div className="flex flex-col gap-10 h-full py-5 lg:h-screen lg:pb-0">
        {/* NAV */}
        <div className="flex gap-5 mx-auto lg:w-[40vw] lg:justify-between">
          {publicTargets.map((portrait, i) => (
            <div key={`portrait-${portrait.id}`} className="h-15 aspect-square flex flex-col items-center">
              <div
                className={`h-full aspect-square relative transition cursor-pointer ${
                  currentIndex === i ? "" : "saturate-0"
                }`}
                onClick={() => handlePortraitClick(i)}
              >
                {currentIndex === i && (
                  <motion.div
                    className="absolute -inset-1 rounded-full border-2 border-darkpurple"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                  ></motion.div>
                )}
                <img src={portrait.portraitSrc} alt={portrait.portraitAlt} className="relative z-10" />
              </div>
              <span className={`text-nowrap text-black ${currentIndex === i ? "font-bold" : ""}`}>{portrait.name}</span>
            </div>
          ))}
        </div>
        {/* DNA */}
        <AnimatePresence mode="popLayout" custom={direction}>
          <div
            key={`${publicTargets[currentIndex].id} + ${currentIndex}`}
            className="relative aspect-3/4 overflow-hidden lg:h-full lg:m-auto lg:aspect-auto lg:flex"
          >
            <div className="hidden h-[4%] w-[8%] absolute top-0 right-0 lg:inline">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleLeftArrowClick}
                className={`absolute top-0 bottom-0 left-0 flex cursor-pointer ${currentIndex === 0 ? "hidden" : ""}`}
              >
                <img src={ArrowLeft} alt="" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleRightArrowClick}
                className={`absolute top-0 bottom-0 right-0 flex cursor-pointer ${
                  currentIndex === publicTargets.length - 1 ? "hidden" : ""
                }`}
              >
                <img src={ArrowRight} alt="" />
              </motion.button>
            </div>
            <DNA info={publicTargets[currentIndex]} />
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
