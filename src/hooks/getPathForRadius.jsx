// Función auxiliar para las líneas de la cuadrícula
export default function getPathForRadius(currentRadius) {
  let path = '';
  const numSkills = 6;
  const angleSlice = (Math.PI * 2) / numSkills;
  const center = 150; // hardcoded for helper func
  
  for (let i = 0; i < numSkills; i++) {
    const x = center + currentRadius * Math.sin(angleSlice * i);
    const y = center - currentRadius * Math.cos(angleSlice * i);
    path += `${i === 0 ? 'M' : 'L'}${x},${y}`;
  }
  path += 'Z';
  return path;
};