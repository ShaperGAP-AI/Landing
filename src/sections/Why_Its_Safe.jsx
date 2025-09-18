import FondoCuadros from '../components/FondoCuadros'

import imgWhatUserSay from '../assets/img-what-user-say.png'

import iconBrain from '../assets/icon-brain.png'
import iconDoc from '../assets/icon-doc.png'
import iconShield from '../assets/icon-shield.png'
import iconUser from '../assets/icon-user.png'
import iconAtom from '../assets/icon-atom.png'

import ArrowTopRight from '../assets/ArrowTopRight.png'
import MainButton from '../components/MainButton'

import TypingEffect from '../animations/TypingEffect'
import DragFromLeft from '../animations/DragFromLeft'
import DragFromRight from '../animations/DragFromRight'

export default function Why_Its_Safe() {
  return (
    <div className="w-full lg:h-full text-center  lg:py-20 relative overflow-hidden">
        <FondoCuadros/>
        <div className='flex flex-col lg:flex-row mb-10 items-center justify-evenly w-full h-fit px-5 lg:px-20 text-white relative z-30'>
            {/* DragFromLeft */}
            <DragFromLeft delay={0.8} className='lg:w-1/3 lg:h-3/4 w-full mb-5 h-full' duration={1.2}>
            <img src={imgWhatUserSay} alt="imgWhatUserSay" />
            </DragFromLeft>
            <div className='lg:w-1/3 w-full text-start'>
            {/* typingEfect */}
                <TypingEffect 
                    className='font-bold text-3xl lg:text-5xl' 
                    text="Not Just " 
                    durationPerChar={0.04}>
                </TypingEffect>
                <TypingEffect 
                    className='font-bold text-3xl lg:text-5xl' 
                    text="Motivational. " 
                    durationPerChar={0.08}>
                </TypingEffect>
                <TypingEffect 
                    className='font-bold text-3xl lg:text-5xl text-lightpurple' 
                    text="Measurable." 
                    durationPerChar={0.1}>
                </TypingEffect>
                {/*DragFromRight*/}
                <div className='mt-10'>
                    <DragFromRight delay={0.1}>
                    <div className='flex align-baseline justify-start mb-2 text-start'>
                        <img className='bg-darkpurple/10 rounded-full p-0.5' src={iconBrain} alt="brain image" />
                        <p className='my-auto ml-4 text-xs lg:text-base'>7-day free trial. Cancel anytime.</p>
                    </div>
                    </DragFromRight>
                    <DragFromRight delay={0.2}>
                    <div className='flex align-baseline justify-start mb-2 text-start'>
                        <img className='bg-darkpurple/10 rounded-full p-0.5' src={iconDoc} alt="document image" />
                        <p className='my-auto ml-4 text-xs lg:text-base'>Backed by Stripe. Verified by blockchain.</p>
                    </div>
                    </DragFromRight>
                    <DragFromRight delay={0.3}>
                    <div className='flex align-baseline justify-start mb-2 text-start'>
                        <img className='bg-darkpurple/10 rounded-full p-0.5' src={iconShield} alt="shield image" />
                        <p className='my-auto ml-4 text-xs lg:text-base'>100% data-secure</p>
                    </div>
                    </DragFromRight>
                    <DragFromRight delay={0.4}>
                    <div className='flex align-baseline justify-start mb-2 text-start'>
                        <img className='bg-darkpurple/10 rounded-full p-0.5' src={iconAtom} alt="user image" />
                        <p className='my-auto ml-4 text-xs lg:text-base'>Based on science + gamification psychology.</p>
                    </div>
                    </DragFromRight>
                    <DragFromRight delay={0.4}>
                    <div className='flex align-baseline justify-start mb-2 text-start'>
                        <img className='bg-darkpurple/10 rounded-full p-0.5' src={iconUser} alt="user image" />
                        <p className='my-auto ml-4 text-xs lg:text-base'>over 1,000 Learners in the first match leveled up +3 core skills.</p>
                    </div>
                    </DragFromRight>
                </div>
            </div>
        </div>
        <div className='w-fit mx-auto'>
           <MainButton>
                Start Free Trial
                <img src={ArrowTopRight} alt="arrow" />
            </MainButton> 
        </div>
    </div>
  )
}
