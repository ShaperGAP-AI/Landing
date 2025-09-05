import React, { useRef } from "react";
import ImgBackground from "../assets/cuadros-fondo-liso.png";
import { motion, useInView } from "framer-motion";

export default function Why_Exist() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Detecta cuando el 50% de la sección está visible

  // Define las variantes para las palabras.
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
      className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden"
    >
      {/* Fondo decorativo (no necesita animación con scroll) */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 flex"
      >
        <div
          className="w-1/2"
          style={{
            backgroundImage: `url(${ImgBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="w-1/2"
          style={{
            backgroundImage: `url(${ImgBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </motion.div>

      {/* Contenido principal con animaciones */}
      <section className="relative z-10 text-center">
        {/* WHY */}
        <motion.h1
          className="text-[194px] leading-none mb-10"
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontWeight: 100,
            color: "#D9D9D9",
            lineHeight: "100%",
          }}
          variants={wordVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Anima solo si está visible
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          WHY
        </motion.h1>

        {/* SHAPER */}
        <motion.h2
          className="text-[194px] leading-none mb-10"
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontWeight: 900,
            color: "#BE80FF",
            lineHeight: "100%",
          }}
          variants={wordVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Anima solo si está visible
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          SHAPER
        </motion.h2>

        {/* EXISTS */}
        <motion.h3
          className="text-[194px] leading-none"
          style={{
            fontFamily: "Urbanist, sans-serif",
            fontWeight: 100,
            color: "#D9D9D9",
            lineHeight: "100%",
          }}
          variants={wordVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Anima solo si está visible
          transition={{ delay: 2.0, duration: 0.4, ease: "easeIn" }}
        >
          EXISTS
        </motion.h3>
      </section>
    </main>
  );
}