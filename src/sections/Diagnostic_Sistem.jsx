import TypingEffect from '../animations/TypingEffect'
import SplitText from '../animations/SplitText'
import DragFromLeft from "../animations/DragFromLeft"

import iconDiagnostic1 from '../assets/icon-diagnostic1.png'
import iconDiagnostic2 from '../assets/icon-diagnostic2.png'
import iconDiagnostic3 from '../assets/icon-diagnostic3.png'    
import iconDiagnostic4 from '../assets/icon-diagnostic4.png'

import FlipCard from '../components/diagnostic_sistem/FlipCard'

export default function Diagnostic_Sistem() {
  return (
    <div className='lg:h-screen h-fit multi-gradient-bg pt-12 overflow-hidden flex lg:flex-row flex-col align-middle justify-center items-center'>
        <div className='lg:w-2/5 w-full lg:text-start text-center'>
            <div className='flex lg:justify-start justify-center'>
                <SplitText className="lg:text-4xl text-2xl font-bold text-background" text={"Your Growth "}></SplitText>
                <SplitText delay={0.2} className="lg:text-4xl text-2xl font-bold text-purple" text={" Starts"}></SplitText>
            </div>
            <SplitText className="lg:text-4xl text-2xl lg:ml-2 font-bold text-purple" text={"With a Mirror."}></SplitText>
            <TypingEffect delay={0.01} className="text-md mt-4 mx-5 lg:mx-0 text-background" text={"Shaper’s interactive diagnostic system shows how you behave under pressure, how you think, and what truly drives you. It's not just a test — it’s a reflection of your potential."}></TypingEffect>
            <div className='mt-5 '>
                <DragFromLeft>
                    <div className='flex text-background lg:ml-0 ml-3 mb-5 font-bold lg:text-xl text-md'>
                        <img className='bg-background/10 rounded-full' src={iconDiagnostic1} alt="Diagnostic Icon 1" />
                        <p className="my-auto">Understand Your Core Strengths</p>
                    </div>
                </DragFromLeft>
                <DragFromLeft delay={0.1}>
                    <div className='flex text-background lg:ml-0 ml-3 mb-5 font-bold lg:text-xl text-md'>
                        <img className='bg-background/10 rounded-full' src={iconDiagnostic2} alt="Diagnostic Icon 2" />
                        <p className="my-auto">Know What Needs Work</p>
                    </div>
                </DragFromLeft>
                <DragFromLeft delay={0.2}>
                    <div className='flex text-background lg:ml-0 ml-3 mb-5 font-bold lg:text-xl text-md'>
                        <img className='bg-background/10 rounded-full' src={iconDiagnostic3} alt="Diagnostic Icon 3" />
                        <p className="my-auto">Earn Skill Badges as You Grow</p>
                    </div>
                </DragFromLeft>
                <DragFromLeft delay={0.3}>
                    <div className='flex text-background lg:ml-0 ml-3 mb-5 font-bold lg:text-xl text-md'>
                        <img className='bg-background/10 rounded-full' src={iconDiagnostic4} alt="Diagnostic Icon 4" />
                        <p className="my-auto">Your Growth Plan, Personalized</p>
                    </div>
                </DragFromLeft>
            </div>
        </div>
        <div className='lg:w-2/5 w-full'>
        <FlipCard />
      </div>
    </div>
  )
}
