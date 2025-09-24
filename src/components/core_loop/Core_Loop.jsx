import ArrowThin from "../../assets/Core_Loop_Section/core-loop-arrow-thin.png";
import ArrowThick from "../../assets/Core_Loop_Section//core-loop-arrow-thick.png";
import CoreLoopAvatar from "../../assets/Core_Loop_Section/core-loop-avatar.png";
import CoreLoopBubble from "./CoreLoopBubble";
import PolygonPurple from "../../assets/Core_Loop_Section/polygon-purple.png";
import PolygonBlue from "../../assets/Core_Loop_Section/polygon-blue.png";
import PolygonGreen from "../../assets/Core_Loop_Section/polygon-green.png";
import PolygonYellow from "../../assets/Core_Loop_Section/polygon-yellow.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useContainerHeight from "../../hooks/useContainerHeight";

export default function Core_Loop() {
  const coreLoopRef = useRef(null);
  const evolutionSystemRef = useRef(null);
  const containerH = useContainerHeight(evolutionSystemRef);

  const { scrollYProgress: coreLoopScrollYProgress } = useScroll({
    target: coreLoopRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: evolutionSystemScrollYProgress } = useScroll({
    target: evolutionSystemRef,
    offset: ["start end", "end start"],
  });

  const CARD_SIZE_PX = 160;

  const rotateDisc = useTransform(coreLoopScrollYProgress, [0, 1], [0, 360]);
  const rotateBubble = useTransform(coreLoopScrollYProgress, [0, 1], [0, -360]);

  const translatePilePurpleCard = useTransform(
    evolutionSystemScrollYProgress,
    [0.6, 0.65],
    [(-containerH + CARD_SIZE_PX) * 1, 0]
  );
  const translatePileBlueCard = useTransform(
    evolutionSystemScrollYProgress,
    [0.55, 0.6],
    [(-containerH + CARD_SIZE_PX) * 1.02, 0]
  );
  const translatePileGreenCard = useTransform(
    evolutionSystemScrollYProgress,
    [0.5, 0.55],
    [(-containerH + CARD_SIZE_PX) * 1.04, 0]
  );
  const translatePileYellowCard = useTransform(
    evolutionSystemScrollYProgress,
    [0.45, 0.5],
    [(-containerH + CARD_SIZE_PX) * 1.06, 0]
  );

  const showPurplePileCard = useTransform(evolutionSystemScrollYProgress, [0.6, 0.65], [0, 1]);
  const showBluePileCard = useTransform(evolutionSystemScrollYProgress, [0.55, 0.62], [0, 1]);
  const showGreenPileCard = useTransform(evolutionSystemScrollYProgress, [0.5, 0.6], [0, 1]);
  const showYellowPileCard = useTransform(evolutionSystemScrollYProgress, [0.45, 0.55], [0, 1]);

  return (
    <div className="flex flex-col items-center gap-10 lg:gap-0 lg:m-10 xl:m-20" ref={coreLoopRef}>
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
              className="absolute h-[6vw] opacity-50 lg:h-6 xl:h-8"
              style={{ top: "22%", left: "17%", rotate: "320deg" }}
            />
            <CoreLoopBubble style={{ rotate: rotateBubble, top: "0%" }}>Abilities & Skills</CoreLoopBubble>
            <img
              src={ArrowThin}
              alt=""
              className="absolute h-[6vw] opacity-50 lg:h-6 xl:h-8"
              style={{ top: "21%", right: "17%", rotate: "50deg" }}
            />
            <CoreLoopBubble style={{ rotate: rotateBubble, right: "0%" }}>Behaviors</CoreLoopBubble>
            <img
              src={ArrowThin}
              alt=""
              className="absolute h-[6vw] opacity-50 lg:h-6 xl:h-8"
              style={{ bottom: "22%", right: "17%", rotate: "140deg" }}
            />
            <CoreLoopBubble style={{ rotate: rotateBubble, bottom: "0%" }}>Attitudes & Values</CoreLoopBubble>
            <img
              src={ArrowThin}
              alt=""
              className="absolute h-[6vw] opacity-50 lg:h-6 xl:h-8"
              style={{ bottom: "21%", left: "17%", rotate: "230deg" }}
            />
          </motion.div>
          <div className="flex items-center justify-center relative">
            <img src={CoreLoopAvatar} alt="" className="h-[30vw] sm:h-60 z-10 lg:h-[10vw]" />
            <img src={ArrowThin} alt="" className="absolute h-[6vw] left-[80%] opacity-50 lg:h-[14%] xl:h-[16%]" />
            <img src={ArrowThin} alt="" className="absolute h-[6vw] right-[80%] opacity-50 rotate-180 lg:h-[14%] xl:h-[16%]" />
            <img src={ArrowThin} alt="" className="absolute h-[6vw] bottom-[90%] opacity-50 rotate-270 lg:h-[14%] xl:h-[16%]" />
            <img src={ArrowThin} alt="" className="absolute h-[6vw] top-[90%] opacity-50 rotate-90 lg:h-[14%] xl:h-[16%]" />
          </div>
        </div>
        {/* MARKET_PULSE */}
        <div className="w-full flex flex-col items-center gap-10 lg:flex-row lg:justify-evenly lg:gap-2">
          <img src={ArrowThick} alt="" className="h-[22vw] opacity-50 lg:h-20 lg:-rotate-90 xl:h-30" />
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
          <img src={ArrowThick} alt="" className="h-[22vw] opacity-50 lg:h-20 lg:-rotate-90 xl:h-30" />
        </div>
        {/* EVOLUTION_SYSTEM */}
        <div className="flex flex-col gap-10 items-center h-[90vh] w-full p-10 lg:p-20 lg:flex-1">
          <h1 className="text-4xl text-center text-black font-extrabold">EVOLUTION SYSTEM</h1>
          <div className="w-full h-full flex flex-col items-center relative" ref={evolutionSystemRef}>
            <img src={ArrowThin} alt="" className="absolute h-[8vh] top-[20%] z-10 rotate-90 opacity-50" />
            <motion.img
              src={PolygonYellow}
              alt=""
              className="absolute"
              style={{
                translateY: translatePileYellowCard,
                opacity: showYellowPileCard,
                bottom: containerH * 0.01,
                height: CARD_SIZE_PX,
                aspectRatio: 1.4 / 1,
              }}
            />
            <motion.img
              src={PolygonGreen}
              alt=""
              className="absolute"
              style={{
                translateY: translatePileGreenCard,
                opacity: showGreenPileCard,
                bottom: containerH * 0.02,
                height: CARD_SIZE_PX,
                aspectRatio: 1.4 / 1,
              }}
            />
            <motion.img
              src={PolygonBlue}
              alt=""
              className="absolute"
              style={{
                translateY: translatePileBlueCard,
                opacity: showBluePileCard,
                bottom: containerH * 0.04,
                height: CARD_SIZE_PX,
                aspectRatio: 1.4 / 1,
              }}
            />
            <motion.img
              src={PolygonPurple}
              alt=""
              className="absolute"
              style={{
                translateY: translatePilePurpleCard,
                opacity: showPurplePileCard,
                bottom: containerH * 0.06,
                height: CARD_SIZE_PX,
                aspectRatio: 1.4 / 1,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
