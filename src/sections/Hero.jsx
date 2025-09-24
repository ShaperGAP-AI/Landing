import image from '../assets/Hero/hero-image.png';
import skillImage from "../assets/Hero/Skill-circle.png";
import fondo from '../assets/Hero/fondo-Image.png';
import Logo from '../assets/Shared_Images/logo.png';
import FadeInDiv from '../animations/FadeInDiv';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef} from 'react';
import useWindowSize from '../hooks/useWindowSize';
import OrbitingOrbs from '../animations/OrbitingOrbs';


export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  const [width] = useWindowSize();
  const isMobile = width < 768;

  // Background opacity animation
  const backgroundOpacity = useTransform(
    scrollY,
    [0, 500],
    [1, 0]
  );

  const backgroundDisplay = useTransform(
    scrollY,
    [0, 500],
    ["inline", "none"]
  );

  // Logo and title animations: diferente para móvil y PC
  const logoContainerTranslateY = useTransform(
    scrollY,
    isMobile ? [0, 250] : [0, 400],
    isMobile ? [0, 150] : [0, -100]
  );

  const logoContainerScale = useTransform(
    scrollY,
    isMobile ? [0, 500] : [0, 100],
    isMobile ? [1, 0.8] : [1, 0.8]
    
  );

  // New text animations
  const newTextOpacity = useTransform(
    scrollY,
    isMobile ? [0, 200] : [0, 100],
    isMobile ? [0, 1] : [0, 1]
  );

  // Image animations: diferente para móvil y PC
  const imageTranslateY = useTransform(
    scrollY,
    isMobile ? [0, 300] : [400, 600],
    isMobile ? [100, 500] : [0, 0]
  );

  const imageScale = useTransform(
    scrollY,
    isMobile ? [0, 500] : [400, 800],
    isMobile ? [2, 2] : [1, 0.4]
  );

   // Escala para el círculo de habilidad: diferente para móvil y PC
  const skillImageScale = useTransform(
    scrollY,
    isMobile ? [0, 400] : [400, 600],
    isMobile ? [0, 3] : [0, 0.5]
  );

  const skillImageRotate = useTransform(
    scrollY,
    isMobile ? [0, 900] : [200, 1000],
    isMobile ? [0, 360] : [0, 360]
  );
  
  const skillImageTranslateY = useTransform(
    scrollY,
    isMobile ? [0, 400] : [0, 0],
    isMobile ? [0, 400] : [0, 0]
  );

  return (
    <div className='relative'>
      {/* Background that moves and fades */}
      <motion.div
        ref={ref}
        style={{ opacity: backgroundOpacity, display: backgroundDisplay }}
        className='multi-gradient-bg lg:h-screen h-full overflow-hidden fixed top-0 left-0 w-full z-0'
      >
      </motion.div>
      {/* Imágenes de órbita flotantes*/}
      <OrbitingOrbs />
      {/* Content that scrolls on top */}
      <div className="w-full h-full relative z-10 overflow-hidden">
        {/* Animated logo and title container */}
        <motion.div
          style={{
            translateY: logoContainerTranslateY,
            scale: logoContainerScale,
          }}
          className='h-fit mt-68 lg:-mb-42 justify-center flex flex-col items-center text-center pb-4'
        >
          <FadeInDiv>
            <div className='flex justify-center items-end'>
              <img className='h-12' src={Logo} alt="Logo" />
              <h1 className='text-slate-900 text-4xl md:text-6xl font-sans font-bold'>Shaper</h1>
            </div>
          </FadeInDiv>
            {/* New text that appears on scroll */}
            <motion.div
              style={{ opacity: newTextOpacity }}
              className="mt-4"
            >
            <FadeInDiv>
              <h2 className='text-xl md:text-6xl font-bold leading-tight'>
                Unlock <span className="text-lightpurple">Who You’re</span>  <br />  <span className="text-lightpurple">Meant </span> to Become.
              </h2> 
              <p className='mt-2 text-xs lg:text-md md:text-xl text-foreground'>
                Shaper GAP® is your evolution-based learning system —<br />
                decoding your behavior, training your soft skills, and guiding your real growth path.
              </p>
            </FadeInDiv>
          </motion.div>
        </motion.div>
        
        <FadeInDiv>
          {/* Main container for images */}
          <div className='relative flex flex-col justify-center items-center'>
            {/* The skill image is placed first in the DOM so it renders behind */}
            <motion.img
              className='absolute w-full' 
              src={skillImage}
              alt="Skill"
              style={{
                translateY: skillImageTranslateY,
                scale: skillImageScale,
                rotate: skillImageRotate,
              }}
            />
            
            {/* The main image comes after, ensuring it renders on top */}
            <motion.div
              style={{ 
                translateY: imageTranslateY,
                scale: imageScale,
              }}
              className="relative w-full h-[500px] overflow-hidden md:h-auto"
            >
              <img className='w-full object-cover object-top h-full' src={image} alt="Hero" />
            </motion.div>
          </div>
        </FadeInDiv>
        <img className='lg:-mt-98' src={fondo} alt="Fondo" />
      </div>
    </div>
  );
}