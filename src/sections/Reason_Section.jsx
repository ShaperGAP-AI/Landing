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

  {/* Imagen chica */}
  <div className="flex justify-center items-end flex-[1.2]">
    <img
      src={girlCenter}
      alt="Girl center"
      className="w-[312px] h-[786px] object-contain"
      style={{ transformOrigin: "center bottom" }}
    />
  </div>

{/* Base violeta debajo de la chica */}
<div
  className="absolute bottom-[193px] left-1/2 -translate-x-1/2
             w-[180px] sm:w-[200px] lg:w-[240px] 
             h-[40px] bg-[#886FFF] rounded-full blur-[13px] opacity-90"
/>


  {/* Globo izquierdo */}
<motion.div
  className="absolute left-[12%] top-[28%] w-[240px] sm:w-[280px] md:w-[340px] lg:w-[380px] 
             bg-[#8B5CF6] text-white text-sm sm:text-base md:text-lg 
             px-5 py-3 rounded-2xl shadow-lg"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <p>
    You spent years in school... <br />
    ...but no one taught you how to <b>lead</b>, stay calm under pressure,
    or speak with clarity.
  </p>
</motion.div>

{/* Globo derecho */}
<motion.div
  className="absolute right-[12%] top-[28%] w-[240px] sm:w-[280px] md:w-[340px] lg:w-[380px] 
             bg-[#8B5CF6] text-white text-sm sm:text-base md:text-lg 
             px-5 py-3 rounded-2xl shadow-lg"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <p>
    91% of employers say <b>soft skills</b> are more important than hard
    skills — but no one trains them.
  </p>
</motion.div>

</section>

      </>
  );
};

export default Reason_Section;
