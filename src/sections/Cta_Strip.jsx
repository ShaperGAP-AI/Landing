import FondoCuadros from "../components/FondoCuadros"

import SplitText from "../animations/SplitText"
import FadeInDiv from "../animations/FadeInDiv"

import ctaImage from '../assets/cta-image.png';

export default function Cta_Strip() {
  return (
    <div className="w-full text-center py-10 lg:py-20 relative overflow-hidden">
        <FondoCuadros />
        <div className='flex flex-col lg:w-4/6 w-full mx-auto text-center justify-center'>
            <SplitText
                className='font-bold text-2xl lg:mb-5 li lg:text-5xl text-white relative z-30'
                text="Start Your Evolution. "
                durationPerChar={0.9}>
            </SplitText>
            <SplitText
                className='font-bold text-2xl lg:text-5xl text-lightpurple relative z-30'
                text="Risk-Free."
                durationPerChar={0.9}>
            </SplitText>
            <FadeInDiv delay={1}>
                <img className="lg:mt-14 mt-8" src={ctaImage} alt="cta image" />
            </FadeInDiv>
        </div>
    </div>
  )
}
