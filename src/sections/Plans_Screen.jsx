import FondoCuadros from "../components/FondoCuadros"

import SplitText from "../animations/SplitText"
import FadeInDiv from "../animations/FadeInDiv"
import DragFromLeft from "../animations/DragFromLeft"

import pro from '../assets/Plans_Screen/PRO.png';
import elite from '../assets/Plans_Screen/ELITE.png';
import DragFromRight from "../animations/DragFromRight";

import frame1p from '../assets/Plans_Screen/Frame1P.png';
import frame2p from '../assets/Plans_Screen/Frame2P.png';
import frame3p from '../assets/Plans_Screen/Frame3P.png';
import frame4p from '../assets/Plans_Screen/Frame4P.png';
import frame5p from '../assets/Plans_Screen/Frame5P.png';

export default function Plans_Screen() {
  return (
    <div className="w-full text-center py-10 lg:py-20 relative overflow-hidden">
        <FondoCuadros />
        <div className='flex flex-col lg:w-4/6 w-full mx-auto text-center justify-center'>
            <div className="flex lg:flex-row flex-col w-fit mx-auto">
                <SplitText
                    className='font-bold text-2xl lg:mb-5 lg:text-5xl text-white relative z-30'
                    text="Simple."
                    durationPerChar={0.4}>
                </SplitText>
                <SplitText
                    className='font-bold text-2xl lg:text-5xl text-lightpurple relative z-30'
                    text="Transparent."
                    durationPerChar={0.6}>
                </SplitText>
                <SplitText
                    className='font-bold text-2xl li lg:text-5xl text-white relative z-30'
                    text="Powerful."
                    durationPerChar={0.8}>
                </SplitText>
            </div>
            
            <FadeInDiv delay={1}>
                <p className='lg:mt-5 mt-2 lg:w-full w-3/4 mx-auto text-slate-500 text-xs lg:text-base'>Start free. Pay only when you're ready. Monthly and annual options available.</p>
            </FadeInDiv>

            <div className="flex lg:flex-row flex-col justify-evenly lg:mt-10 mt-5">
                <DragFromLeft>
                    <img className="lg:w-full w-4/5 mx-auto" src={pro} alt="Pro Plan" />
                </DragFromLeft>
                <DragFromRight>
                    <img className="lg:w-full w-4/5 mx-auto lg:mt-0 mt-4" src={elite} alt="Elite Plan" />
                </DragFromRight>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-wrap lg:w-4/6 w-full mt-5 mx-auto justify-center">
                    <FadeInDiv delay={0.2}>
                        <img className="lg:w-fit w-32 mx-2 my-2" src={frame1p} alt="frame1" />
                    </FadeInDiv>
                    <FadeInDiv delay={0.4}>
                        <img className="lg:w-fit w-32 mx-2 my-2" src={frame2p} alt="frame2" />
                    </FadeInDiv>
                    <FadeInDiv delay={0.6}>
                        <img className="lg:w-fit w-32 mx-2 my-2" src={frame3p} alt="frame3" />
                    </FadeInDiv>
                    <FadeInDiv delay={0.8}>
                        <img className="lg:w-fit w-32 mx-2 my-2" src={frame4p} alt="frame4" />
                    </FadeInDiv>
                    <FadeInDiv delay={1}>
                        <img className="lg:w-fit w-52 mx-2 my-2" src={frame5p} alt="frame5" />
                    </FadeInDiv>
                </div>
            </div>
        </div>
    </div>
  )
}
