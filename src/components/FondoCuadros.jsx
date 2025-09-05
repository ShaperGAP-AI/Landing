import React from 'react'
import fondoCuadros from '../assets/cuadros-fondo-liso.png'

export default function FondoCuadros() {
  return (
    <div className="w-full h-screen flex absolute top-0 left-0 z-10">
        <img className="w-1/2" src={fondoCuadros} alt="Fondo de cuadros" />
        <img className="w-1/2" src={fondoCuadros} alt="Fondo de cuadros" />
    </div>
  )
}
