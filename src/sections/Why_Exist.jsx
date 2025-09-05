import React, { useRef } from "react";
import FondoCuadros from "../components/FondoCuadros";
import { motion, useInView } from "framer-motion";

export default function Why_Exist() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <main
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <FondoCuadros />

      <section className="relative z-10 text-center">
        <motion.h1
          className="mb-6 text-[clamp(2.5rem,10vw,12rem)] leading-none tracking-normal"
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontWeight: 100,
            color: "#D9D9D9",
          }}
          variants={wordVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          WHY
        </motion.h1>

        <motion.h2
          className="mb-6 text-[clamp(3rem,11vw,13rem)] leading-none tracking-tight"
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontWeight: 900,
            color: "#BE80FF",
          }}
          variants={wordVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          SHAPER
        </motion.h2>

        <motion.h3
          className="text-[clamp(2.5rem,10vw,12rem)] leading-tight"
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontWeight: 100,
            color: "#D9D9D9",
          }}
          variants={wordVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 2.0, duration: 0.4, ease: "easeIn" }}
        >
          EXISTS
        </motion.h3>
      </section>
    </main>
  );
}