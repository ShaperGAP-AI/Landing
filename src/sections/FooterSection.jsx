import shpaerimage from "../assets/Shared_Images/shaperFooter.png"
import SplitText from '../animations/SplitText'
import FondoCuadros from '../components/FondoCuadros'

import likedin from '../assets/Shared_Images/linkedin.png'
import instagram from '../assets/Shared_Images/instagram.png'
import youtube from '../assets/Shared_Images/youtube.png'
import twiter from '../assets/Shared_Images/twiter.png'

import Logo from '../assets/Shared_Images/logo.png';

export default function Footer() {
  return (
    <div className="w-full lg:h-full text-center py-10 lg:pt-20 lg:pb-10 px-5 lg:px-32 relative overflow-hidden">
        <FondoCuadros/>
        <img className="absolute bottom-0 left-0 w-full h-full object-cover" src={shpaerimage} alt="shaper text" />
        <div className="flex lg:flex-row flex-col justify-between">
            <div className='flex justify-start lg:justify-center items-center space-x-3'>
                <img className='h-12' src={Logo} alt="Logo" />
                <h1 className='text-white text-4xl md:text-6xl font-sans font-bold'>Shaper</h1>
            </div>
            <div className="w-fit lg:h-12 flex flex-col my-auto justify-center">
                <div className="flex lg:mt-0 mt-4 w-fit h-fit lg:mx-auto">
                    <SplitText
                        className='font-bold text-md lg:text-lg text-white relative z-30'
                        text="Learn,"
                        durationPerChar={0.4}>
                    </SplitText>
                    <SplitText
                        className='font-bold text-md lg:text-lg text-lightpurple relative z-30'
                        text="Play"
                        durationPerChar={0.6}>
                    </SplitText>
                    <SplitText
                        className='font-bold text-md li lg:text-lg text-white relative z-30'
                        text=", Evolve"
                        durationPerChar={0.8}>
                    </SplitText>
                </div>
                <div className="flex lg:mt-0 mt-4 justify-center space-x-5">
                    <a href="https://www.linkedin.com/in/itsmatirubio/">
                        <img className="w-6 h-6 cursor-pointer z-20 relative" src={likedin} alt="LinkedIn" />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img className="w-6 h-6 cursor-pointer z-20 relative" src={instagram} alt="Instagram" />
                    </a>
                    <a href="https://www.youtube.com/">
                        <img className="w-6 h-6 cursor-pointer z-20 relative" src={youtube} alt="Youtube" />
                    </a>
                    <a href="https://www.twitter.com/">
                        <img className="w-6 h-6 cursor-pointer z-20 relative" src={twiter} alt="Twitter" />
                    </a>
                </div>
            </div>
        </div>
        <div className="w-fit flex mt-5 flex-col text-start space-y-2 mb-10">
            <p>Careers</p>
            <p>Newsroom</p>
            <a href="mailto:ask@shaper.us">ask@shaper.us</a>
            <p>Documentation</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
        </div>
        <p className="mx-auto lg:text-base text-xs">Shaper GAP® 2025 @ All rights reserved</p>
    </div>
  )
}
