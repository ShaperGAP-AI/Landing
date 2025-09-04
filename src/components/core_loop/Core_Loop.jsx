import ArrowThin from "../../assets/core-loop-arrow-thin.png";
import ArrowThick from "../../assets/core-loop-arrow-thick.png";
import CoreLoopAvatar from "../../assets/core-loop-avatar.png";
import CoreLoopBubble from "./CoreLoopBubble";
import PolygonPurple from "../../assets/polygon-purple.png";
import PolygonBlue from "../../assets/polygon-blue.png";
import PolygonGreen from "../../assets/polygon-green.png";
import PolygonYellow from "../../assets/polygon-yellow.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Core_Loop() {
  const coreLoopRef = useRef(null);
  const evolutionSystemRef = useRef(null);

  const { scrollYProgress: coreLoopScrollYProgress } = useScroll({
    target: coreLoopRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: evolutionSystemScrollYProgress } = useScroll({
    target: evolutionSystemRef,
    offset: ["start end", "end start"],
  });

  const rotateDisc = useTransform(coreLoopScrollYProgress, [0, 1], [0, 360]);
  const rotateBubble = useTransform(coreLoopScrollYProgress, [0, 1], [0, -360]);
  const translatePilePurpleCard = useTransform(evolutionSystemScrollYProgress, [0.6, 0.65], [-400, 0]);
  const translatePileBlueCard = useTransform(evolutionSystemScrollYProgress, [0.55, 0.6], [-400, 0]);
  const translatePileGreenCard = useTransform(evolutionSystemScrollYProgress, [0.5, 0.55], [-400, 0]);
  const translatePileYellowCard = useTransform(evolutionSystemScrollYProgress, [0.45, 0.5], [-400, 0]);

  return (
    <div className="flex flex-col items-center gap-20 lg:m-10 xl:m-20" ref={coreLoopRef}>
      {/* TITLE */}
      <h1 className="text-black text-6xl font-bold text-center">
        <span className="block whitespace-nowrap sm:inline">The Core</span>{" "}
        <span className="block text-darkpurple whitespace-nowrap sm:inline">Loop</span>
      </h1>
      {/* CORE_LOOP */}
      <div className="flex flex-col w-full lg:flex-row">
        {/* SPINNING_BUBBLES */}
        <div className="relative flex items-center justify-center w-full aspect-square">
          <motion.div
            className="absolute flex items-center justify-center w-full aspect-square"
            style={{ rotate: rotateDisc }}
          >
            <div className="absolute inset-[5%] border-[15vw] border-purple/20 rounded-full lg:border-[5vw]"></div>
            <CoreLoopBubble style={{ rotate: rotateBubble, left: "0%" }}>Knowledge & Information</CoreLoopBubble>
            <img
              src={ArrowThin}
              alt=""
              className="absolute h-[6vw] lg:h-6 xl:h-8"
              style={{ top: "22%", left: "17%", rotate: "320deg" }}
            />
            <CoreLoopBubble style={{ rotate: rotateBubble, top: "0%" }}>Abilities & Skills</CoreLoopBubble>
            <img
              src={ArrowThin}
              alt=""
              className="absolute h-[6vw] lg:h-6 xl:h-8"
              style={{ top: "21%", right: "17%", rotate: "50deg" }}
            />
            <CoreLoopBubble style={{ rotate: rotateBubble, right: "0%" }}>Behaviors</CoreLoopBubble>
            <img
              src={ArrowThin}
              alt=""
              className="absolute h-[6vw] lg:h-6 xl:h-8"
              style={{ bottom: "22%", right: "17%", rotate: "140deg" }}
            />
            <CoreLoopBubble style={{ rotate: rotateBubble, bottom: "0%" }}>Attitudes & Values</CoreLoopBubble>
            <img
              src={ArrowThin}
              alt=""
              className="absolute h-[6vw] lg:h-6 xl:h-8"
              style={{ bottom: "21%", left: "17%", rotate: "230deg" }}
            />
          </motion.div>
          <div className="flex items-center justify-center relative">
            <img src={CoreLoopAvatar} alt="" className="h-[30vw] sm:h-60 z-10 lg:h-[10vw]" />
            <img src={ArrowThin} alt="" className="absolute h-[6vw] left-[80%] lg:h-[14%] xl:h-[16%]" />
            <img src={ArrowThin} alt="" className="absolute h-[6vw] right-[80%] rotate-180 lg:h-[14%] xl:h-[16%]" />
            <img src={ArrowThin} alt="" className="absolute h-[6vw] bottom-[90%] rotate-270 lg:h-[14%] xl:h-[16%]" />
            <img src={ArrowThin} alt="" className="absolute h-[6vw] top-[90%] rotate-90 lg:h-[14%] xl:h-[16%]" />
          </div>
        </div>
        {/* MARKET_PULSE */}
        <div className="w-full flex flex-col items-center gap-10 lg:flex-row lg:justify-evenly lg:gap-2">
          <img src={ArrowThick} alt="" className="h-[22vw] lg:h-20 lg:-rotate-90 xl:h-30" />
          <div className="relative flex items-center justify-center h-[40vw] aspect-square rounded-full bg-radial from-darkpurple/70 from-10% to-darkpurple to-50% p-5 lg:h-[15vw]">
            <p className="text-2xl text-center sm:text-3xl xl:text-4xl z-10">Market Pulse</p>
            <motion.div
              className="absolute inset-0 bg-darkpurple/20 rounded-full"
              animate={{ scale: [1, 1.4], opacity: [1, 0] }}
              transition={{ duration: 1, ease: "linear", repeat: Infinity, repeatDelay: 0.2 }}
            ></motion.div>
            <motion.div
              className="absolute inset-0 bg-darkpurple/20 rounded-full"
              animate={{ scale: [1, 1.2], opacity: [1, 0] }}
              transition={{ duration: 1, ease: "linear", repeat: Infinity, repeatDelay: 0.2 }}
            ></motion.div>
          </div>
          <img src={ArrowThick} alt="" className="h-[22vw] lg:h-20 lg:-rotate-90 xl:h-30" />
        </div>
        {/* EVOLUTION_SYSTEM */}
        <div className="flex flex-col gap-10 items-center h-[90vh] w-full p-20 lg:flex-1" ref={evolutionSystemRef}>
          <h1 className="text-4xl text-center text-black font-extrabold">EVOLUTION SYSTEM</h1>
          <div className="w-full h-full flex flex-col items-center relative">
            <motion.img
              src={PolygonYellow}
              alt=""
              className="absolute h-40"
              style={{ translateY: translatePileYellowCard, bottom: "0%" }}
            />
            <motion.img
              src={PolygonGreen}
              alt=""
              className="absolute h-40"
              style={{ translateY: translatePileGreenCard, bottom: "3%" }}
            />
            <motion.img
              src={PolygonBlue}
              alt=""
              className="absolute h-40"
              style={{ translateY: translatePileBlueCard, bottom: "6%" }}
            />
            <motion.img
              src={PolygonPurple}
              alt=""
              className="absolute h-40"
              style={{ translateY: translatePilePurpleCard, bottom: "9%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
