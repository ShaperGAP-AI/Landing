import { motion } from "framer-motion";
import FondoCuadros from "../components/FondoCuadros";
import girlImg from "../assets/Reason_Section/womenWhyExists.png";
import boyImg from "../assets/Reason_Section/menWhyExists.png";
import TypingEffect from "../animations/TypingEffect";
import DragFromLeft from "../animations/DragFromLeft";
import DragFromRight from "../animations/DragFromRight";
import SplitText from "../animations/SplitText";

const Reason_Section = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background lg:py-0">
      <FondoCuadros />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-7xl mx-auto px-4">
        
        {/* Etiqueta superior (común para ambas vistas) */}
        <TypingEffect
          className="text-slate-500 font-urbanist font-semibold text-sm lg:text-xl mb-4"
          text={"Reason No. 1"}
        />

        {/* --- CONTENEDOR PRINCIPAL QUE CAMBIA DE flex-col a lg:flex-row --- */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center w-full">
          
          {/* 1. Imagen Izquierda (Solo visible en Desktop) */}
          <DragFromLeft className="hidden lg:block">
            <img
              className="w-40 lg:w-72 object-contain transform -rotate-2 scale-[3.3] brightness-100 contrast-190 opacity-30"
              src={girlImg}
              alt="girl"
            />
          </DragFromLeft>

          {/* 2. Bloque de Texto */}
          <div className="w-fit mx-auto">
            <div className="lg:block flex flex-col items-center">
              <SplitText text={"Traditional Education"} className="text-5xl font-bold leading-snug mx-2 text-center" />
              <SplitText text={"Failed"} className="px-2 py-1 rounded-full bg-[#FC3952] text-white shadow-lg shadow-black/40 text-5xl font-bold leading-snug w-fit mx-auto text-center" />
              <SplitText text={"You."} className="text-5xl font-bold leading-snug mx-2 text-center" />
            </div>
          </div>
          
          {/* 3. Imagen Derecha (Solo visible en Desktop) */}
          <DragFromRight className="hidden lg:block">
            <img
              className="w-40 lg:w-72 object-contain rotate-2 filter mt-10 brightness-100 contrast-190 opacity-25"
              src={boyImg}
              alt="boy"
            />
          </DragFromRight>

          {/* 4. Imágenes (Solo visibles en Móvil, al final) */}
          <div className="lg:hidden flex items-end justify-center mt-8">
             <DragFromLeft>
                <img className="w-40 object-contain -mt-44 transform -rotate-2 scale-[3.3] brightness-100 contrast-190 opacity-30" src={girlImg} alt="Sad girl" />
             </DragFromLeft>
             <DragFromRight>
                <img className="w-40 object-contain transform -rotate-2 brightness-100 contrast-190 opacity-30" src={boyImg} alt="Sad boy" />
             </DragFromRight>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reason_Section;