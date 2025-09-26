import SplitText from '../animations/SplitText'
import FaqAccordion from '../animations/FaqAccordion'
import FadeInDiv from '../animations/FadeInDiv'
import iconPlay from '../assets/Shared_Images/icon-play.png'

export default function CTA() {
  return (
   <div className='lg:h-screen h-fit multi-gradient-bg pt-12 overflow-hidden flex flex-col align-middle justify-center items-center'>
        <SplitText
            className='font-bold text-2xl lg:mb-5 li lg:text-5xl text-background relative z-30'
            text="Still have questions?"
            durationPerChar={0.6}>
        </SplitText>
        <SplitText
            className='font-bold text-2xl lg:text-5xl text-lightpurple relative z-30'
            text="We’ve got answers"
            durationPerChar={0.9}>
        </SplitText>
        <FaqAccordion />
        <div className='w-fit mx-auto flex lg:mb-0 mb-10 lg:flex-row flex-col justify-around'>
            {/* FadeInDiv for each button afect the split text animation finished */}
            <FadeInDiv delay={1.6}>
                <div className='flex bg-darkpurple transition-all duration-200 hover:shadow-2xl justify-center hover:-translate-y-1 rounded-full px-4 shadow-lg shadow-background py-3 lg:mr-5 lg:mt-5 cursor-pointer'>
                <p>Start Free Trial</p>
                </div>
            </FadeInDiv>
            <FadeInDiv delay={1.6}>
                <div className='flex bg-background transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 justify-center rounded-full px-4 shadow-lg shadow-background py-2 mt-5 cursor-pointer'>
                <p className='my-auto mr-2'>Begin Your Evaluation Now</p>
                <img src={iconPlay} alt="icon play" />
                </div>
            </FadeInDiv>
        </div>
    </div>
  )
}
