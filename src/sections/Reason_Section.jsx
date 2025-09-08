import React from "react";
import { motion } from "framer-motion";
import FondoCuadros from "../components/FondoCuadros";
import girlImg from "../assets/womenWhyExists.png";
import boyImg from "../assets/menWhyExists.png";

const Reason_Section = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Fondo cuadriculado */}
      <FondoCuadros />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center text-center gap-8 px-4">
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Imagen izquierda */}
          <motion.img
            src={girlImg}
            alt="Sad girl"
            className="w-48 md:w-72 object-contain transform -rotate-2 scale-125"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeIn" }}
          />

          {/* Texto central */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold leading-snug"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
          >
            Traditional Education{" "}
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
            className="w-48 md:w-72 object-contain transform rotate-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeIn" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Reason_Section;
