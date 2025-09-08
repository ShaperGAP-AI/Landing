import React from 'react'
import FondoCuadros from '../components/FondoCuadros'

export default function Verified_evolution() {

  return (
    <div className="w-full lg:h-screen text-center py-20 relative overflow-hidden">
      <FondoCuadros />
      <div className="w-full h-screen absolute top-0 left-0 z-20 bg-gradient-to-l from-purple-950 to-black-950"></div>
    </div>
  )
}