import IlluminatedBrain from "../../assets/illuminated-brain.png";
import ShaperLogo from "../../assets/logo.png";
import AdaptativeEvolution from "../../assets/adaptative-evolution.png";
import CommanderChange from "../../assets/commander-of-change.png";
import CreativeCatalyst from "../../assets/creative-catalyst.png";
import FlexStart from "../../assets/flex-start.png";
import Knowledge from "../../assets/knowledge.png";
import StrategicMind from "../../assets/strategic-mind.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Skills_That_Matter() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const ascendingBubble1a = useTransform(scrollYProgress, [0, 0.3], [1000, 0]);
  const ascendingBubble2a = useTransform(scrollYProgress, [0, 0.4], [1000, 0]);
  const ascendingBubble3a = useTransform(scrollYProgress, [0, 0.5], [1000, 0]);
  const ascendingBubble1b = useTransform(scrollYProgress, [0, 0.35], [1000, 0]);
  const ascendingBubble2b = useTransform(scrollYProgress, [0, 0.45], [1000, 0]);
  const ascendingBubble3b = useTransform(scrollYProgress, [0, 0.55], [1000, 0]);

  return (
    <div ref={ref} className="relative flex flex-col items-center h-screen gap-20">
      <motion.img
        src={CreativeCatalyst}
        alt=""
        className="absolute left-[5%] top-[15%] blur-[1px] opacity-70"
        style={{ translateY: ascendingBubble1a }}
      />
      <motion.img
        src={CommanderChange}
        alt=""
        className="hidden absolute left-[30%] top-[25%] blur-[1px] opacity-70 lg:block"
        style={{ translateY: ascendingBubble2b }}
      />
      <motion.img
        src={StrategicMind}
        alt=""
        className="absolute left-[20%] top-[30%] blur-[1px] opacity-70 lg:top-[40%] lg:left-[10%]"
        style={{ translateY: ascendingBubble3a }}
      />
      <motion.img
        src={FlexStart}
        alt=""
        className="absolute right-[5%] top-[15%] blur-[1px] opacity-70"
        style={{ translateY: ascendingBubble1b }}
      />
      <motion.img
        src={Knowledge}
        alt=""
        className="hidden absolute right-[30%] top-[25%] blur-[1px] opacity-70 lg:block"
        style={{ translateY: ascendingBubble2a }}
      />
      <motion.img
        src={AdaptativeEvolution}
        alt=""
        className="absolute right-[20%] top-[30%] blur-[1px] opacity-70 lg:top-[40%] lg:right-[10%]"
        style={{ translateY: ascendingBubble3b }}
      />
      <div className="h-full flex flex-col justify-evenly items-center z-10">
        <div className="flex h-50">
          <img src={IlluminatedBrain} alt="" />
        </div>
        <div className="flex flex-col gap-10 text-center text-black text-4xl font-bold lg:text-6xl">
          <h2>
            <span className="text-darkpurple whitespace-nowrap">Real feedback,</span>{" "}
            <span className="whitespace-nowrap">not grades</span>
          </h2>
          <h2>
            <span className="text-darkpurple whitespace-nowrap">Skills that matter</span>{" "}
            <span className="whitespace-nowrap">in life & work</span>
          </h2>
          <h2>
            <span className="text-darkpurple whitespace-nowrap">Personal growth</span>{" "}
            <span className="whitespace-nowrap">that adapts with you</span>
          </h2>
        </div>
        <div className="flex h-30">
          <img src={ShaperLogo} alt="" />
        </div>
      </div>
    </div>
  );
}
