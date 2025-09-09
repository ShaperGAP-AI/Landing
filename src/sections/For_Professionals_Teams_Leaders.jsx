import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StudentPortrait from "../assets/student-portrait.png";
import ProfessionalPortrait from "../assets/professional-portrait.png";
import CareerShifterPortrait from "../assets/career-shifter-portrait.png";
import EmployerPortrait from "../assets/employer-portrait.png";
import MobileDNA from "../components/for_professionals_teams_leaders/MobileDNA";

const publicTargets = [
  {
    id: Math.random().toString(16).slice(2),
    portraitSrc: StudentPortrait,
    knowledge: "Building foundational soft skills such as communication, collaboration, time management",
    achievement: "Completing interactive challenges and diagnostic loops",
    quality: "Learning to express ideas clearly and solve problems creatively",
    progress: "Becoming confident, self-aware, and career-ready",
  },
  {
    id: Math.random().toString(16).slice(2),
    portraitSrc: ProfessionalPortrait,
    knowledge: "Sharpening emotional intelligence, leadership, and decision-making",
    achievement: "Applying skills in real scenarios and tough team dynamics",
    quality: "Elevating clarity under pressure and trust in communication",
    progress: "Growing into a stronger leader and better collaborator daily",
  },
  {
    id: Math.random().toString(16).slice(2),
    portraitSrc: CareerShifterPortrait,
    knowledge: "Rebuilding confidence in new skills: adaptability, time mgmt, critical thinking",
    achievement: "Navigating unfamiliar situations with guided simulations",
    quality: "Relearning how to lead, communicate, and perform in a new role",
    progress: "Transitioning with confidence and verifiable, real growth",
  },
  {
    id: Math.random().toString(16).slice(2),
    portraitSrc: EmployerPortrait,
    knowledge: "Seeing real behavioral data, not self-reported traits",
    achievement: "Tracking growth through challenges, not just test scores",
    quality: "Measuring clarity, resilience, empathy & leadership in action",
    progress: "Making smarter hiring, L&D, and team-building decisions based on verified skills",
  },
];

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
      <div className="flex flex-col gap-5 h-full py-5">
        {/* NAV */}
        <div className="flex gap-5 mx-auto">
          {publicTargets.map((portrait, i) => (
            <div
              key={`portrait-${portrait.id}`}
              className={`relative transition cursor-pointer ${currentIndex === i ? "" : "saturate-0"}`}
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
          ))}
        </div>
        {/* MOBILE DNA */}
        <AnimatePresence mode="popLayout" custom={direction}>
          <div
            key={`${publicTargets[currentIndex].id} + ${currentIndex}`}
            className="w-full aspect-3/4 overflow-hidden lg:hidden"
          >
            <MobileDNA info={publicTargets[currentIndex]} />
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
