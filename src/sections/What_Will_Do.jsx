import { AnimatePresence, motion } from "framer-motion";
import MoralDilemmasImg from "../assets/What_Will_Do/Moral Dilemmas.png";
import MoralDilemmasIcon from "../assets/What_Will_Do/moral-dilemmas-icon.png";
import TimeManagementImg from "../assets/What_Will_Do/Time Management Under Pressure.png";
import TimeManagementIcon from "../assets/What_Will_Do/time-management-under-pressure-icon.png";
import SplitPathImg from "../assets/What_Will_Do/Split-Path Decisions.png";
import SplitPathIcon from "../assets/What_Will_Do/split-path-decisions-icon.png";
import RoleSwapImg from "../assets/What_Will_Do/Role Swap.png";
import RoleSwapIcon from "../assets/What_Will_Do/role-swap-icon.png";
import EmotionDecoderImg from "../assets/What_Will_Do/Emotion Decoder.png";
import EmotionDecoderIcon from "../assets/What_Will_Do/emotion-decoder-icon.png";
import DialogueSimulationsImg from "../assets/What_Will_Do/Dialogue Simulations.png";
import DialogueSimulationsIcon from "../assets/What_Will_Do/dialogue-simulations-icon.png";
import PatternRecognitionImg from "../assets/What_Will_Do/Pattern Recognition Challenges.png";
import PatternRecognitionIcon from "../assets/What_Will_Do/pattern-recognition-challenges-icon.png";
import ArrowLeft from "../assets/Shared_Images/flecha-izq.png";
import ArrowRight from "../assets/Shared_Images/flecha.png";
import ArrowTopRight from "../assets/Shared_Images/ArrowTopRight.png";
import ActivityCard from "../components/what-will-do/ActivityCard";
import MainButton from "../components/MainButton";
import { useState } from "react";

const activities = [
  { id: Math.random().toString(16).slice(2), src: MoralDilemmasImg, alt: "" },
  { id: Math.random().toString(16).slice(2), src: RoleSwapImg, alt: "" },
  { id: Math.random().toString(16).slice(2), src: DialogueSimulationsImg, alt: "" },
  { id: Math.random().toString(16).slice(2), src: PatternRecognitionImg, alt: "" },
  { id: Math.random().toString(16).slice(2), src: SplitPathImg, alt: "" },
  { id: Math.random().toString(16).slice(2), src: EmotionDecoderImg, alt: "" },
  { id: Math.random().toString(16).slice(2), src: TimeManagementImg, alt: "" },
];

export default function What_Will_Do() {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function handleLeftArrowClick() {
    setDirection(-1);
    if (currentActivityIndex === 0) {
      setCurrentActivityIndex(activities.length - 1);
    } else {
      setCurrentActivityIndex(currentActivityIndex - 1);
    }
  }

  function handleRightArrowClick() {
    setDirection(1);
    if (currentActivityIndex === activities.length - 1) {
      setCurrentActivityIndex(0);
    } else {
      setCurrentActivityIndex(currentActivityIndex + 1);
    }
  }

  return (
    <div className="h-screen multi-gradient-bg pt-12 px-5 overflow-hidden pb-20">
      <div className="flex flex-col justify-evenly items-center min-h-[90vh] h-[90%]">
        {/* HEADER */}
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-5xl font-bold text-center">
            <span className="text-black whitespace-nowrap">Learn by</span>{" "}
            <span className="text-darkpurple whitespace-nowrap">living it</span>
          </h1>
          <p className="text-sm text-black/50 text-center lg:text-lg xl:text-xl">
            Make decisions, solve dilemmas, decode emotions, and navigate challenges. This isn’t a course. It’s a
            journey.
          </p>
        </div>
        {/* ACTIVITIES */}
        <div className="flex items-center gap-5 justify-center rounded-xl sm:h-[50%]">
          <ul className="h-full hidden flex-col justify-between rounded-lg bg-background/90 p-1 text-nowrap text-white/60 sm:flex xl:text-xl 2xl:text-3xl">
            <li
              className={`flex items-center gap-4 rounded-lg p-1 cursor-pointer ${
                currentActivityIndex === 0 ? "bg-purple/30 text-lighterpurple" : ""
              }`}
              onClick={() => setCurrentActivityIndex(0)}
            >
              <div
                className={`flex h-6 transition xl:h-7 2xl:h-8 ${
                  currentActivityIndex === 0 ? "brightness-80" : "saturate-0 brightness-70"
                }`}
              >
                <img src={MoralDilemmasIcon} alt="" className="" />
              </div>
              Moral Dilemmas
            </li>
            <li
              className={`flex items-center gap-4 rounded-lg p-1 cursor-pointer ${
                currentActivityIndex === 1 ? "bg-purple/30 text-lighterpurple" : ""
              }`}
              onClick={() => setCurrentActivityIndex(1)}
            >
              <div
                className={`flex h-6 transition brightness-250 xl:h-7 2xl:h-8 ${
                  currentActivityIndex === 1 ? "" : "saturate-0"
                }`}
              >
                <img src={RoleSwapIcon} alt="" className="" />
              </div>
              Role Swap
            </li>
            <li
              className={`flex items-center gap-4 rounded-lg p-1 cursor-pointer ${
                currentActivityIndex === 2 ? "bg-purple/30 text-lighterpurple" : ""
              }`}
              onClick={() => setCurrentActivityIndex(2)}
            >
              <div
                className={`flex h-6 transition brightness-250 xl:h-7 2xl:h-8 ${
                  currentActivityIndex === 2 ? "" : "saturate-0"
                }`}
              >
                <img src={DialogueSimulationsIcon} alt="" className="" />
              </div>
              Dialogue Simulations
            </li>
            <li
              className={`flex items-center gap-4 rounded-lg p-1 cursor-pointer ${
                currentActivityIndex === 3 ? "bg-purple/30 text-lighterpurple" : ""
              }`}
              onClick={() => setCurrentActivityIndex(3)}
            >
              <div
                className={`flex h-6 transition brightness-250 xl:h-7 2xl:h-8 ${
                  currentActivityIndex === 3 ? "" : "saturate-0"
                }`}
              >
                <img src={PatternRecognitionIcon} alt="" className="" />
              </div>
              Pattern Recognition Challenges
            </li>
            <li
              className={`flex items-center gap-4 rounded-lg p-1 cursor-pointer ${
                currentActivityIndex === 4 ? "bg-purple/30 text-lighterpurple" : ""
              }`}
              onClick={() => setCurrentActivityIndex(4)}
            >
              <div
                className={`flex h-6 transition brightness-250 xl:h-7 2xl:h-8 ${
                  currentActivityIndex === 4 ? "" : "saturate-0"
                }`}
              >
                <img src={SplitPathIcon} alt="" className="" />
              </div>
              Split-Path Decisions
            </li>
            <li
              className={`flex items-center gap-4 rounded-lg p-1 cursor-pointer ${
                currentActivityIndex === 5 ? "bg-purple/30 text-lighterpurple" : ""
              }`}
              onClick={() => setCurrentActivityIndex(5)}
            >
              <div
                className={`relative flex h-6 brightness-250 xl:h-7 2xl:h-8 ${
                  currentActivityIndex === 5 ? "" : "saturate-0"
                }`}
              >
                <img src={EmotionDecoderIcon} alt="" className="" />
              </div>
              Emotion Decoder
            </li>
            <li
              className={`flex items-center gap-4 rounded-lg p-1 cursor-pointer ${
                currentActivityIndex === 6 ? "bg-purple/30 text-lighterpurple" : ""
              }`}
              onClick={() => setCurrentActivityIndex(6)}
            >
              <div
                className={`relative flex h-6 brightness-250 xl:h-7 2xl:h-8 ${
                  currentActivityIndex === 6 ? "" : "saturate-0"
                }`}
              >
                <img src={TimeManagementIcon} alt="" className="" />
              </div>
              Time Management Under Pressure
            </li>
          </ul>
          <AnimatePresence custom={direction} mode="wait">
            <ActivityCard key={activities[currentActivityIndex].id} activity={activities[currentActivityIndex]} />
          </AnimatePresence>
        </div>
        <div className="flex gap-5 sm:hidden">
          <button onClick={handleLeftArrowClick} className="flex h-6 active:brightness-120 hover:brightness-120">
            <img src={ArrowLeft} alt="" />
          </button>
          <button onClick={handleRightArrowClick} className="flex h-6 active:brightness-120 hover:brightness-120">
            <img src={ArrowRight} alt="" />
          </button>
        </div>
        <MainButton>
          Start your Journey
          <img src={ArrowTopRight} alt="" />
        </MainButton>
      </div>
    </div>
  );
}
