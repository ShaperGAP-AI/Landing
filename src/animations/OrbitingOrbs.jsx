import { motion } from 'framer-motion';
import useWindowSize from '../hooks/useWindowSize';
import orbita from '../assets/Hero/orbita.png';

export default function OrbitingOrbs() {
  const [width] = useWindowSize();
  const isMobile = width < 768;

  // Genera el array de datos según el tipo de dispositivo
  const numOrbits = isMobile ? 6 : 12;
  const orbitaData = Array.from({ length: numOrbits }, (_, i) => ({ id: i + 1 }));

  return (
    <>
      {orbitaData.map(item => (
        <motion.img
          key={item.id}
          src={orbita}
          alt={`Orbita ${item.id}`}
          className={`orbit-image orbit-${item.id}`} // Asigna una clase única
        />
      ))}
    </>
  );
}