import React from 'react'
import FondoCuadros from '../components/FondoCuadros'

import telefono from '../assets/Verified_evolution/telefono.png'

import iconBrain from '../assets/Shared_Images/icon-brain.png'
import iconDoc from '../assets/Shared_Images/icon-doc.png'
import iconShield from '../assets/Shared_Images/icon-shield.png'
import iconUser from '../assets/Shared_Images/icon-user.png'

import rectangleicon1 from '../assets/Verified_evolution/rectangle-icon1.png'
import rectangleicon2 from '../assets/Verified_evolution/rectangle-icon2.png'
import rectangleicon3 from '../assets/Verified_evolution/rectangle-icon3.png'
import rectangleicon4 from '../assets/Verified_evolution/rectangle-icon4.png' 

import boxLinked from '../assets/Verified_evolution/box-linked.png'
import linked from '../assets/Verified_evolution/linked.png'
import iconPlay from '../assets/Verified_evolution/icon-play.png'

import SplitText from '../animations/SplitText'
import TypingEffect from '../animations/TypingEffect'
import FadeInDiv from '../animations/FadeInDiv'
import DragFromLeft from '../animations/DragFromLeft'
import DragFromRight from '../animations/DragFromRight'


export default function Verified_evolution() {
  return (
    <div className="w-full lg:h-full text-center py-10 lg:py-20 relative overflow-hidden">
      <FondoCuadros/>
      <div className="w-full h-full absolute top-0 left-0 z-20 bg-gradient-to-l from-purple-950 to-black-950"></div>
      <div className='flex flex-col lg:flex-row mb-10 items-center justify-evenly w-full h-fit px-5 lg:px-20 text-white relative z-30'>
        <div className='lg:w-1/3 w-full text-start'>
          {/* typingEfect */}
          <div className='flex'>
            <TypingEffect 
              className='font-bold text-3xl lg:text-5xl' 
              text="Your Growth." 
              durationPerChar={0.04}>
            </TypingEffect>
            <TypingEffect 
              className='font-bold text-3xl lg:text-5xl text-lightpurple' 
              text="Your" 
              durationPerChar={0.06}>
            </TypingEffect>
          </div>
          <div className='flex'>
            <TypingEffect 
              className='font-bold text-3xl lg:text-5xl text-lightpurple' 
              text="Identity." 
              durationPerChar={0.08}>
            </TypingEffect>
            <TypingEffect 
              className='font-bold text-3xl lg:text-5xl' 
              text=" Verified." 
              durationPerChar={0.1}>
            </TypingEffect>
          </div>
          {/* splitText */}
          <SplitText className='text-slate-500 text-md my-10' text="Everything you do in Shaper GAP® is recorded, reflected, and stored in Linked® — your evolving, blockchain-verified skill identity." stagger={0.01} delay={0.5}></SplitText>
          {/*DragFromLeft*/}
          <div className='mt-10'>
            <DragFromLeft delay={0.1}>
              <div className='flex align-baseline justify-start mb-2 text-start'>
                <img className='bg-darkpurple/10 rounded-full p-0.5' src={iconBrain} alt="brain image" />
                <p className='my-auto ml-4 text-xs lg:text-base'>Every decision you make, every challenge you conquer — Linked captures it all.</p>
              </div>
            </DragFromLeft>
            <DragFromLeft delay={0.2}>
              <div className='flex align-baseline justify-start mb-2 text-start'>
                <img className='bg-darkpurple/10 rounded-full p-0.5' src={iconDoc} alt="document image" />
                <p className='my-auto ml-4 text-xs lg:text-base'>Your behavior is translated into real data.</p>
              </div>
            </DragFromLeft>
            <DragFromLeft delay={0.3}>
              <div className='flex align-baseline justify-start mb-2 text-start'>
                <img className='bg-darkpurple/10 rounded-full p-0.5' src={iconShield} alt="shield image" />
                <p className='my-auto ml-4 text-xs lg:text-base'>Your skills are verifiable, stored securely, and portable.</p>
              </div>
            </DragFromLeft>
            <DragFromLeft delay={0.4}>
              <div className='flex align-baseline justify-start mb-2 text-start'>
                <img className='bg-darkpurple/10 rounded-full p-0.5' src={iconUser} alt="user image" />
                <p className='my-auto ml-4 text-xs lg:text-base'>Your evolution becomes your identity — across jobs, projects, and life.</p>
              </div>
            </DragFromLeft>
          </div>
        </div>
        {/* FadeInDiv */}
        <DragFromRight delay={0.8} className='lg:w-1/3 lg:h-3/4 w-full h-full' duration={1.2}>
          <img src={telefono} alt="Teléfono" />
        </DragFromRight>
      </div>
      <div className='w-full mb-20 h-fit flex flex-col'>
        <div className='flex flex-wrap justify-around relative z-20 w-full lg:w-3/5 mx-auto'>
          {/* FadeInDiv for each div */}
          <FadeInDiv className='flex flex-col w-3/7 lg:mb-0 mb-2 lg:w-48 hover:bg-lightpurple/30 transition-all duration-200 hover:shadow-lg hover:-translate-y-2 hover:shadow-darkpurple justify-center bg-lightpurple/10 rounded-2xl py-3 px-2'>
            <img className='lg:w-4/5 w-2/5 mx-auto lg:h-3/5 h-2/5' src={rectangleicon1} alt="icon1" />
            <h2 className='font-bold text-lg lg:text-xl'>Live<br />Skill Log</h2>
            <p className='text-xs text-slate-500 w-4/5 mx-auto mt-3'>See your growth unfold in real time</p>
          </FadeInDiv>
          <FadeInDiv className='flex flex-col w-3/7 lg:mb-0 mb-2 lg:w-48 hover:bg-lightpurple/30 transition-all duration-200 hover:shadow-lg hover:-translate-y-2 hover:shadow-darkpurple justify-center bg-lightpurple/10 rounded-2xl py-3 px-2'>
            <img className='lg:w-4/5 w-2/5 mx-auto lg:h-3/5 h-2/5' src={rectangleicon2} alt="icon2" />
            <h2 className='font-bold text-lg lg:text-xl'>Behavioral<br />Ledger</h2>
            <p className='text-xs text-slate-500 w-4/5 mx-auto mt-3'>Decisions → data → insights</p>
          </FadeInDiv>
          <FadeInDiv className='flex flex-col w-3/7 lg:mb-0 mb-2 lg:w-48 hover:bg-lightpurple/30 transition-all duration-200 hover:shadow-lg hover:-translate-y-2 hover:shadow-darkpurple justify-center bg-lightpurple/10 rounded-2xl py-3 px-2'>
            <img className='lg:w-4/5 w-2/5 mx-auto lg:h-3/5 h-2/5' src={rectangleicon3} alt="icon3" />
            <h2 className='font-bold text-lg lg:text-xl'>Portable<br />Identity</h2>
            <p className='text-xs text-slate-500 w-4/5 mx-auto mt-3'>Prove your growth across platforms</p>
          </FadeInDiv>
          <FadeInDiv className='flex flex-col w-3/7 lg:mb-0 mb-2 lg:w-48 hover:bg-lightpurple/30 transition-all duration-200 hover:shadow-lg hover:-translate-y-2 hover:shadow-darkpurple justify-center bg-lightpurple/10 rounded-2xl py-3 px-2'>
            <img className='lg:w-4/5 w-2/5 mx-auto lg:h-3/5 h-2/5' src={rectangleicon4} alt="icon4" />
            <h2 className='font-bold text-lg lg:text-xl'>On-Chain <br />Verified</h2>
            <p className='text-xs text-slate-500 w-4/5 mx-auto mt-3'>Your badges live beyond Shaper</p>
          </FadeInDiv>
        </div>
        <div className='flex lg:mt-30 mt-10'>
          <div className='lg:w-3/5 w-full lg:h-fit mx-auto p-2 align-middle flex flex-col z-20 relative'>
            <img className='absolute h-full top-0 left-0 w-full' src={boxLinked} alt="linked" />
            <div className='lg:mt-4 mt-20 mb-10 lg:mb:0 z-20'>
              {/* FadeInDiv */}
              <FadeInDiv duration={0.8} delay={0.2}>
                <div className='flex w-fit mx-auto mb-5 h-fit'>
                  <img src={linked} alt="linked" />
                  <h2 className='text-2xl font-extrabold ml-1 my-auto'>Linked</h2>
                </div>
              </FadeInDiv>
              {/* splittext */}
              <SplitText text="Linked is like your skill passport. Built from your actions. Trusted by others. Owned by you." stagger={0.01} delay={0.7}>
                <p className='lg:w-3/5 w-4/5 mx-auto text-lg lg:text-2xl font-extralight'>Linked is like your skill passport. Built from your actions. Trusted by others. Owned by you.</p>
              </SplitText>
              <div className='lg:w-3/5 w-full mx-auto flex lg:flex-row flex-col justify-around'>
                {/* FadeInDiv for each button afect the split text animation finished */}
                <FadeInDiv delay={1.6}>
                  <div className='flex bg-darkpurple transition-all duration-200 hover:shadow-md hover:shadow-white hover:-translate-y-1 justify-center rounded-full px-4 py-2 mt-5 cursor-pointer'>
                    <p className='my-auto mr-2'>Start My Growth Log</p>
                    <img src={iconPlay} alt="icon play" />
                  </div>
                </FadeInDiv>
                <FadeInDiv delay={1.6}>
                  <div className='flex bg-background shadow shadow-white hover:bg-background/10 transition-all duration-200 hover:shadow-md justify-center hover:-translate-y-1 rounded-full px-4 py-2 mt-5 cursor-pointer'>
                    <p>Start My Growth Log</p>
                  </div>
                </FadeInDiv>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}