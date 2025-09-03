import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Why_Exist() {
  const [currentText, setCurrentText] = useState("why");

  // Simulación de scroll para mostrar cada palabra
  // En un caso real, usaría un hook como useInView para detectar la posición de scroll
  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentText("shaper"), 2000); // Muestra "SHAPER" después de 2 segundos
    const timer2 = setTimeout(() => setCurrentText("exists"), 4000); // Muestra "EXISTS" después de 4 segundos
    const timer3 = setTimeout(() => setCurrentText("final"), 6000); // Muestra la última visual después de 6 segundos

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Variantes de animación para cada palabra
  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center p-4"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Fondo de malla */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(#ffffff33 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          {currentText === "why" && (
            <motion.h1
              key="why"
              className="text-[#D9D8D9] font-thin text-[194px] leading-none"
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              WHY
            </motion.h1>
          )}

          {currentText === "shaper" && (
            <motion.h1
              key="shaper"
              className="text-[#BE80FF] font-black text-[194px] leading-none"
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              SHAPER
            </motion.h1>
          )}

          {currentText === "exists" && (
            <motion.h1
              key="exists"
              className="text-[#D9D8D9] font-thin text-[194px] leading-none"
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              EXISTS
            </motion.h1>
          )}

          {currentText === "final" && (
            <motion.div
              key="final"
              className="text-white text-center"
              variants={wordVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="text-[#D9D8D9] font-medium md:text-lg">WHY</span>
              <span className="text-[#BE80FF] font-medium ml-2 md:text-lg">
                SHAPER
              </span>
              <span className="text-[#D9D8D9] font-medium ml-2 md:text-lg">
                EXISTS
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
