import ArrowThin from "../../assets/core-loop-arrow-thin.png";
import ArrowThick from "../../assets/core-loop-arrow-thick.png";
import CoreLoopAvatar from "../../assets/core-loop-avatar.png";
import CoreLoopBubble from "../../components/CoreLoopBubble";
import PolygonPurple from "../../assets/polygon-purple.png";
import PolygonBlue from "../../assets/polygon-blue.png";
import PolygonGreen from "../../assets/polygon-green.png";
import PolygonYellow from "../../assets/polygon-yellow.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Core_Loop() {
  const coreLoopRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: coreLoopRef,
    offset: ["start end", "end start"],
  });

  const rotateDisc = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateBubble = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const rotateArrow = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className="flex flex-col items-center gap-20 py-20 px-5" ref={coreLoopRef}>
      {/* TITLE */}
      <h1 className="text-black text-6xl font-bold text-center">
        <span className="block whitespace-nowrap sm:inline">The Core</span>{" "}
        <span className="block text-darkpurple whitespace-nowrap sm:inline">Loop</span>
      </h1>
      {/* CORE_LOOP */}
      <div className="w-full">
        {/* SPINNING_BUBBLES */}
        <div className="relative flex items-center justify-center aspect-square">
          <motion.div className="absolute w-full aspect-square" style={{ rotate: rotateDisc }}>
            <div className="absolute inset-[5%] border-[15vw] border-purple/20 rounded-full"></div>
            <CoreLoopBubble style={{ rotate: rotateBubble, top: "40%", left: "0%" }}>
              Knowledge & Information
            </CoreLoopBubble>
            <img
              src={ArrowThin}
              alt=""
              className="absolute h-[6vw]" /* 6 */
              style={{ top: "20%", left: "18%", rotate: "320deg" }}
            />
            <CoreLoopBubble style={{ rotate: rotateBubble, top: "0%", left: "40%" }}>Abilities & Skills</CoreLoopBubble>
            <img
              src={ArrowThin}
              alt=""
              className="absolute h-[6vw]" /* 6 */
              style={{ top: "22%", right: "16%", rotate: "45deg" }}
            />
            <CoreLoopBubble style={{ rotate: rotateBubble, top: "40%", right: "0%" }}>Behaviors</CoreLoopBubble>
            <img
              src={ArrowThin}
              alt=""
              className="absolute h-[6vw]" /* 6 */
              style={{ bottom: "18%", right: "20%", rotate: "150deg" }}
            />
            <CoreLoopBubble style={{ rotate: rotateBubble, bottom: "0%", right: "40%" }}>
              Attitudes & Values
            </CoreLoopBubble>
            <img
              src={ArrowThin}
              alt=""
              className="absolute h-[6vw]" /* 6 */
              style={{ bottom: "20%", left: "18%", rotate: "225deg" }}
            />
          </motion.div>
          <img src={CoreLoopAvatar} alt="" className="h-[30vw] sm:h-60 z-10" />
          <img src={ArrowThin} alt="" className="absolute h-[6vw]" style={{ top: "47%", right: "27%" }} />
          <img
            src={ArrowThin}
            alt=""
            className="absolute h-[6vw]"
            style={{ top: "47%", left: "27%", rotate: "180deg" }}
          />
          <img
            src={ArrowThin}
            alt=""
            className="absolute h-[6vw]"
            style={{ top: "29%", right: "43.5%", rotate: "270deg" }}
          />
          <img
            src={ArrowThin}
            alt=""
            className="absolute h-[6vw]"
            style={{ bottom: "29%", right: "43.5%", rotate: "90deg" }}
          />
        </div>
        {/* MARKET_PULSE */}
        <div className="w-full flex flex-col items-center gap-10">
          <img src={ArrowThick} alt="" className="h-[25vw]" />
          <div className="flex items-center justify-center rounded-full h-[40vw] aspect-square bg-purple/20">
            <div className="flex items-center justify-center h-[90%] aspect-square rounded-full bg-radial from-darkpurple/70 from-10% to-darkpurple to-50%">
              <p className="text-2xl">Market Pulse</p>
            </div>
          </div>
          <img src={ArrowThick} alt="" className="h-[25vw]" />
        </div>
        {/* EVOLUTION_SYSTEM */}
        <div className="flex flex-col gap-10 items-center h-[90vh] w-full p-5">
          <h1 className="text-5xl text-center text-black font-extrabold">EVOLUTION SYSTEM</h1>
          <div className="w-full h-full flex flex-col items-center relative">
            <img src={PolygonYellow} alt="" className="absolute h-[40vw]" style={{ bottom: "0%" }} />
            <img src={PolygonGreen} alt="" className="absolute h-[40vw]" style={{ bottom: "15%" }} />
            <img src={PolygonBlue} alt="" className="absolute h-[40vw]" style={{ bottom: "30%" }} />
            <img src={PolygonPurple} alt="" className="absolute h-[40vw]" style={{ bottom: "70%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
