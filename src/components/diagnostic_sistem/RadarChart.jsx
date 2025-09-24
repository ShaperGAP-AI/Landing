import { motion } from 'framer-motion';
import getPathForRadius from '../../hooks/getPathForRadius';

// Datos de el gráfico
const skills = [
  { name: 'Comunicación', value: 80 },
  { name: 'Pensamiento Crítico', value: 70 },
  { name: 'Servicio al Cliente', value: 90 },
  { name: 'Liderazgo', value: 65 },
  { name: 'Inteligencia Emocional', value: 85 },
  { name: 'Gestión del Tiempo', value: 75 },
];


export default function RadarChart() {
  const size = 300; // Tamaño del SVG
  const center = size / 2;
  const radius = size / 2 - 20; // Radio máximo
  const numSkills = skills.length;
  const angleSlice = (Math.PI * 2) / numSkills;

  // Calcula la ruta (path) del polígono interno
  const getPath = () => {
    let path = '';
    skills.forEach((skill, i) => {
      const valueRadius = (skill.value / 100) * radius;
      const x = center + valueRadius * Math.sin(angleSlice * i);
      const y = center - valueRadius * Math.cos(angleSlice * i);
      path += `${i === 0 ? 'M' : 'L'}${x},${y}`;
    });
    path += 'Z';
    return path;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Contenedor relativo para posicionar el SVG y los textos */}
      <div className="relative lg:mt-5 w-full h-full" style={{ width: size, height: size }}>
        <svg className='lg:w-full w-2/3 h-2/3 mx-auto my-auto lg:h-full' viewBox={`0 0 ${size} ${size}`}>
          {/* Líneas de la cuadrícula */}
          {[...Array(5)].map((_, i) => (
            <path
              key={i}
              d={getPathForRadius(((i + 1) / 5) * radius, size)}
              fill="none"
              stroke="#B2ACAC"
              strokeWidth="1.2"
              className="transition-all duration-300 ease-in-out"
            />
          ))}

          {/* Ejes desde el centro */}
          {skills.map((_, i) => (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={center + radius * Math.sin(angleSlice * i)}
              y2={center - radius * Math.cos(angleSlice * i)}
              stroke="#6a51e1"
              strokeWidth="1.4"
            />
          ))}

          {/* Polígono de las habilidades con animación de Framer Motion */}
          <motion.path
            d={getPath()}
            fill="url(#gradient)"
            stroke="#a855f7"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          {/* Gradiente de fondo */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.7 }} />
              <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.7 }} />
            </linearGradient>
          </defs>
        </svg>

        {/* Etiquetas de texto como divs flotantes */}
        {skills.map((skill, i) => {
          const valueRadius = (skill.value / 100) * radius;
          const labelX = center + (radius + 20) * Math.sin(angleSlice * i);
          const labelY = center - (radius + 20) * Math.cos(angleSlice * i);
          
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              className="absolute lg:flex hidden pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
              style={{
                top: labelY,
                left: labelX,
                // Alineación del texto dependiendo del ángulo para evitar que se corten
                textAlign:
                  i === 0 || i === numSkills / 2
                    ? 'center'
                    : i < numSkills / 2
                    ? 'left'
                    : 'right',
              }}
            >
              <div className="bg-slate-400 bg-opacity-70 text-white font-semibold text-sm px-2 py-1 rounded-md whitespace-nowrap">
                {skill.name}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}