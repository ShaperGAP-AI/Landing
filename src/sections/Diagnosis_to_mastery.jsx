import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FondoCuadros from "../components/FondoCuadros";

import lineaCurva from "../assets/linea-curva-diagnostic-to-mastery.png";

import tablet1 from "../assets/tablet1.png";
import tablet2 from "../assets/tablet2.png"
import tablet3 from "../assets/tablet3.png";
import tablet4 from "../assets/tablet4.png";
import tablet5 from "../assets/tablet5.png";

import flecha from "../assets/flecha.png";
import flechaTransparente from "../assets/flecha-transparente.png";

import SplitText from "../animations/SplitText";
import DragFromRight from "../animations/DragFromRight";

export default function Diagnosis_to_mastery() {
  const [currentTablet, setCurrentTablet] = useState({ 
    src: tablet1, 
    id: 1, 
    subTitle: "Discover Your Superpowers", 
    desc:"Through fun games and decision challenges, Shaper reveals how you think, lead, and adapt." 
  });
  
  const tablets = [
    { src: tablet1, title: "Initial Diagnosis", id: 1, marginLeft: "ml-[46px]", subTitle: "Discover Your Superpowers", desc:"Through fun games and decision challenges, Shaper reveals how you think, lead, and adapt." },
    { src: tablet2, title: "Skill Games", id: 2, marginLeft: "ml-[65px]", subTitle: "Get a Personalized Plan", desc:"AI maps your strengths and gaps into a living skill path." },
    { src: tablet3, title: "Real-time Feedback", id: 3, marginLeft: "ml-[72px]", subTitle: "Train Daily Through Play", desc:"Learn by doing with simulations, dilemmas, puzzles, and social games." },
    { src: tablet4, title: "Verifiable Growth", id: 4, marginLeft: "ml-[65px]", subTitle: "Track Real Growth", desc:"Your progress is always visible — and backed by behavioral data." },
    { src: tablet5, title: "Life Impact", id: 5, marginLeft: "ml-[40px]", subTitle: "Earn Verifiable Badges", desc:"Certify your growth on-chain. Share it with employers, teams, and your future self." },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 5000); // Cambia cada 5 segundos

    return () => clearTimeout(timer);
  }, [currentTablet.id]);

  const handlePointClick = (tablet) => {
    setCurrentTablet(tablet);
  };

  const handleNextClick = () => {
    const currentIndex = tablets.findIndex((t) => t.id === currentTablet.id);
    const nextIndex = (currentIndex + 1) % tablets.length;
    setCurrentTablet(tablets[nextIndex]);
  };

  const handlePrevClick = () => {
    const currentIndex = tablets.findIndex((t) => t.id === currentTablet.id);
    const prevIndex = (currentIndex - 1 + tablets.length) % tablets.length;
    setCurrentTablet(tablets[prevIndex]);
  };

  return (
    <div className="w-full lg:h-screen text-center py-20 relative overflow-hidden">
      <FondoCuadros />
      
      <SplitText
        text="From Diagnosis to Mastery"
        className='text-xl md:text-5xl lg:mb-8 mb-2 font-bold'
        delay={0.5}
      ></SplitText>
      <SplitText
        text="Your Growth, Engineered."
        className='text-xl md:text-5xl mb-8 font-bold text-lightpurple'
        delay={0.8}
      ></SplitText>
      
      <div className="flex lg:flex-row flex-col-reverse w-full justify-center relative">
        <div className="lg:w-2/5 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTablet.id} // Clave única para la animación
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <img src={currentTablet.src} alt={currentTablet.title} />
            </motion.div>
          </AnimatePresence>
          <div className="absolute lg:top-74 top-40 lg:left-16 left-10 text-start w-4/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTablet.id} // Clave única para la animación
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="lg:text-xl text-xs lg:mb-5 mb-0 font-bold">{currentTablet.subTitle}</h2>
                <p className="lg:text-md text-xs text- font-extralight">{currentTablet.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="lg:absolute lg:mx-0 justify-center lg:left-70 flex -bottom-4 ">
            <img onClick={handlePrevClick} className="w-5 mr-4" src={flechaTransparente} alt="Flecha Transparente" />
            <img onClick={handleNextClick} className="w-5" src={flecha} alt="Flecha" />
          </div>
        </div>

        <div className="lg:w-1/5 w-full lg:flex  lg:flex-col hidden text-start justify-center relative">
          {/* SVG para la línea curva */}
          <img className="absolute z-0 h-98 left-0" src={lineaCurva} alt="linea curva" />

          {tablets.map((tablet, index) => (
            <DragFromRight delay={index * 0.1}>
              <div
                key={tablet.id}
                className={`inline-block m-6 cursor-pointer ${tablet.marginLeft} relative z-10`}
                onClick={() => handlePointClick(tablet)}
              >
                {/* Círculo del punto */}
                <div
                  className={`absolute left-[-20px] top-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                    currentTablet.id === tablet.id
                      ? 'w-4 h-4 shadow-lg radial-gradient-purple'
                      : 'w-2 h-2 bg-gray-400'
                  }`}
                />
                <h2 className={`text-lg transition-all duration-300 ${currentTablet.id === tablet.id ? 'font-bold' : 'font-semibold'}`}>
                  {tablet.title}
                </h2>
              </div>
            </DragFromRight>
            ))}
          </div>
        </div>
    </div>
  );
}