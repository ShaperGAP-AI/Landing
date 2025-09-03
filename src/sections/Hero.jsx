import image from '../assets/hero-image.png';
import skillImage from "../assets/Skill-circle.png";
import fondo from '../assets/fondo-Image.png';
import orbita from '../assets/orbita.png';
import Logo from '../assets/logo.png';
import FadeInDiv from '../animations/FadeInDiv';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';


export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Background opacity animation
  const backgroundOpacity = useTransform(
    scrollY,
    [0, 500],
    [1, 0]
  );

  // Logo and title animations
  const logoContainerTranslateY = useTransform(
    scrollY,
    [0, 100],
    [0, -100]
  );

  const logoContainerScale = useTransform(
    scrollY,
    [0, 100],
    [1, 0.8]
  );

  // New text animations
  const newTextOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 1]
  );

  // Image animations
  const imageTranslateY = useTransform(
    scrollY,
    [400, 600],
    [0, 0]
  );

  const imageScale = useTransform(
    scrollY,
    [400, 800],
    [1, 0.4]
  );

  // Skill Image Animations
  const skillImageScale = useTransform(
    scrollY,
    [400, 600],
    [0, 0.5]
  );

  const skillImageRotate = useTransform(
    scrollY,
    [200, 1000],
    [0, 360]
  );

  return (
    <div className='relative'>
      {/* Background that moves and fades */}
      <motion.div
        ref={ref}
        style={{ opacity: backgroundOpacity }}
        className='multi-gradient-bg h-screen fixed top-0 left-0 w-full z-0'
      >
      </motion.div>

      {/* Content that scrolls on top */}
      <div className="w-full h-full relative z-10 overflow-hidden">
        {/* Animated logo and title container */}
        <motion.div
          style={{
            translateY: logoContainerTranslateY,
            scale: logoContainerScale,
          }}
          className='h-fit mt-68 -mb-42 justify-center flex flex-col items-center text-center pb-4'
        >
          <div className='flex justify-center items-end'>
            <img className='h-12' src={Logo} alt="Logo" />
            <h1 className='text-slate-900 text-4xl md:text-6xl font-sans font-bold'>Shaper</h1>
          </div>
          {/* New text that appears on scroll */}
          <motion.div
            style={{ opacity: newTextOpacity }}
            className="mt-4"
          >
            <FadeInDiv>
              <h2 className='text-xl md:text-6xl font-bold leading-tight'>
                Unlock Who You’re <br /> Meant to Become.
              </h2>
              <p className='mt-2 text-sm md:text-xl text-gray-700'>
                Shaper GAP® is your evolution-based learning system —<br />
                decoding your behavior, training your soft skills, and guiding your real growth path.
              </p>
            </FadeInDiv>
          </motion.div>
        </motion.div>
        
        <FadeInDiv>
          <div className='relative h-1/3 flex justify-center items-center'>
            {/* The skill image is placed first in the DOM so it renders behind */}
            <motion.img
              className='absolute w-full' 
              src={skillImage}
              alt="Skill"
              style={{
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
            >
              <img className='w-full' src={image} alt="Hero" />
            </motion.div>
          </div>
        </FadeInDiv>
        <img className='-mt-98' src={fondo} alt="Fondo" />
      </div>
    </div>
  );
}