import React from "react";
import { motion } from "framer-motion";
import FondoCuadros from "../components/FondoCuadros";
import girlImg from "../assets/womenWhyExists.png";
import boyImg from "../assets/menWhyExists.png";
import girlCenter from "../assets/girlCenter.png";
import chessPiece from "../assets/chessImg.png";

const Reason_Section = () => {
  const piecesPattern = [
    "gray",
    "white",
    "gray",
    "gray",
    "white",
    "gray",
    "gray",
    "white",
    "gray",
  ];
  return (
    <>
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Fondo cuadriculado */}
      <FondoCuadros />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center text-center gap-12 px-4">
        {/* Etiqueta superior */}
        <motion.span
          className="text-white font-urbanist font-semibold text-xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
        >
          Reason No. 1
        </motion.span>

        {/* Bloque central */}
        <div className="flex flex-col md:flex-row items-center justify-center relative">
          {/* Imagen izquierda */}
          <motion.img
            src={girlImg}
            alt="Sad girl"
            className="w-40 sm:w-48 md:w-72 object-contain transform -rotate-2 scale-[3.3] brightness-100 contrast-190 opacity-30 -mt-10 sm:-mt-14 md:-mt-20 md:-mr-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 0.3, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeIn" }}
          />

          {/* Texto central */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug mx-2 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
          >
            Traditional Education
            <br />
            <span className="px-4 py-1 rounded-full bg-[#FC3952] text-white shadow-lg shadow-black/40">
              Failed
            </span>
            <br />
            You.
          </motion.h2>

          {/* Imagen derecha */}
          <motion.img
            src={boyImg}
            alt="Sad boy"
            className="w-40 sm:w-48 md:w-72 object-contain rotate-2 filter brightness-100 contrast-190 opacity-2 -mt-6 sm:-mt-8 md:-mt-10 md:-ml-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 0.2, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeIn" }}
          />
        </div>
      </div>
    </section>

<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
  <FondoCuadros />

<div className="relative flex flex-col items-center justify-end w-full">
  {/* Glow: capa amplia y sutil (fondo) */}
  <div
    aria-hidden
    style={{
      position: "absolute",
      bottom: "-6px",
      width: "clamp(180px, 32vw, 3200px)",
      height: "clamp(40px, 8vh, 160px)",
      borderRadius: "50%",
      background:
        "radial-gradient(ellipse at center, rgba(136,111,255,0.25) 0%, rgba(136,111,255,0.12) 40%, transparent 70%)",
      filter: "blur(25px)",
      zIndex: 0,
      pointerEvents: "none",
      opacity: 1,
      transform: "translateY(6%)",
    }}
  />

  {/* Glow: capa intermedia (color más definido) */}
  <div
    aria-hidden
    style={{
      position: "absolute",
      bottom: "-2px",
      width: "clamp(170px, 28vw, 270px)",
      height: "clamp(36px, 6.6vh, 120px)",
      borderRadius: "50%",
      background:
        "radial-gradient(ellipse at center, rgba(136,111,255,0.78) 0%, rgba(136,111,255,0.38) 30%, rgba(136,111,255,0.12) 55%, transparent 75%)",
      filter: "blur(10px)",
      zIndex: 1,
      pointerEvents: "none",
      transform: "translateY(3%)",
    }}
  />

  {/* Glow: capa central y brillante (pequeña) */}
  <div
    aria-hidden
    style={{
      position: "absolute",
      bottom: "2px",
      width: "clamp(140px, 22vw, 230px)",
      height: "clamp(20px, 4vh, 44px)",
      borderRadius: "50%",
      background:
        "radial-gradient(ellipse at center, rgba(136, 111, 255, 1) 0%, rgba(136, 111, 255, 0.6) 35%, rgba(136, 111, 255, 0.15) 65%, transparent 85%)",
      filter: "blur(10px)",
      zIndex: 2,
      pointerEvents: "none",
      transform: "translateY(0%)",
    }}
  />

  {/* Imagen (arriba de los glows) */}
  <img
    src={girlCenter}
    alt="Girl center"
    className="object-contain"
    style={{
      position: "relative",
      zIndex: 10,
      height: "clamp(400px, 70vh, 786px)",
      width: "auto",
      pointerEvents: "auto",
    }}
  />
</div>

</section>

      </>
  );
};

export default Reason_Section;
