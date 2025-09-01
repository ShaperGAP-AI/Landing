import image from '../assets/hero-image.png';
import Logo from '../assets/logo.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeInDiv from '../animations/FadeInDiv';

export default function Hero() {

  return (
    <div class="multi-gradient-bg w-full h-screen overflow-hidden">
      <div className='h-1/2 justify-center flex align-text-bottom items-end pb-4'>
        <img className='h-12' src={Logo} alt="Logo" />
        <h1 className='text-slate-900 text-4xl md:text-6xl font-sans font-bold'>Shaper</h1>
      </div>
      <div className='h-1/2'>
        <img className='w-full' src={image} alt="Hero" />
      </div>
    </div>
  )
}
