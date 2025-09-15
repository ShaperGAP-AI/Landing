import FadeInDiv from '../animations/FadeInDiv';
import DragFromLeft from '../animations/DragFromLeft';
import DragFromRight from '../animations/DragFromRight';
import SplitText from '../animations/SplitText'
import TypingEffect from '../animations/TypingEffect';

import FondoCuadros from '../components/FondoCuadros'

import person1 from '../assets/person1.png'
import person2 from '../assets/person2.png'
import person3 from '../assets/person3.png'
import person4 from '../assets/person4.png'
import person5 from '../assets/person5.png'
import person6 from '../assets/person6.png'

import flecha from '../assets/flecha.png'
import comillas from '../assets/comillas.png'

import { cardData } from '../data/person_data';
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export default function What_Users_Say() {
    const [selectedUser, setSelectedUser] = useState(cardData[1]);
    
    const handleUserSelect = (userId) => {
        const user = cardData.find((user) => user.id === userId);
        setSelectedUser(user);
    };

    const handleNext = () => {
        const currentIndex = cardData.findIndex((user) => user.id === selectedUser.id);
        const nextIndex = (currentIndex + 1) % cardData.length;
        setSelectedUser(cardData[nextIndex]);
    };

    const handlePrev = () => {
        const currentIndex = cardData.findIndex((user) => user.id === selectedUser.id);
        const prevIndex = (currentIndex - 1 + cardData.length) % cardData.length;
        setSelectedUser(cardData[prevIndex]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
        handleNext();
        }, 5000); // Change user every 5 seconds

        return () => clearInterval(interval);
    }, [selectedUser]);
    
  return (
    <div className="w-full text-center py-10 lg:py-20 relative overflow-hidden">
        <FondoCuadros/>
        <div className='flex flex-col lg:w-4/6 w-full mx-auto text-center justify-center'>
            <SplitText
                className='font-bold text-3xl lg:text-5xl text-white relative z-30'
                text="This changed how I think"
                durationPerChar={0.9}>
            </SplitText>
            <SplitText
                className='font-bold text-3xl lg:text-5xl text-lightpurple relative z-30'
                text="under pressure."
                durationPerChar={0.9}>
            </SplitText>
            <FadeInDiv delay={1}>
                <p className='mt-10 text-slate-500 text-xs lg:text-base'>Trusted by top learners</p>
            </FadeInDiv>
            <div className='w-full relative z-20 mt-10 flex'>
                <img
                    src={flecha}
                    alt="flecha"
                    className="mx-auto h-10 my-auto w-10 rotate-180 cursor-pointer"
                    onClick={handlePrev}
                />
                <div className="flex w-4/6 justify-around">
                    {cardData.map((user) => (
                        <div key={user.id}>
                            <img
                                key={user.id}
                                id={user.id.toString()}
                                className={`w-16 h-16 cursor-pointer transition-all duration-100 ease-in-out hover:-translate-y-1 hover:grayscale-0 hover:border-2 border-purple  rounded-full  ${
                                selectedUser.id === user.id ? 'grayscale-0 border-2 border-purple' : 'grayscale'
                                }`}
                                src={user.image}
                                alt={user.name}
                                onClick={() => handleUserSelect(user.id)}
                            />
                            <p className={`text-xs lg:text-sm text-white mt-2 ${selectedUser.id === user.id ? 'font-bold' : 'hidden'}`}>{user.name}</p>
                        </div>
                    ))}
                </div>
                <img
                    src={flecha}
                    alt="flecha"
                    className="mx-auto h-10 my-auto w-10 cursor-pointer"
                    onClick={handleNext}
                />
            </div>
            <div  key={selectedUser.id} className="mt-10 w-full max-w-3xl mx-auto bg-[#333333] relative z-20 rounded-2xl p-8 h-96 text-white">
                <div className="text-4xl font-bold text-purple-400 mb-6">
                    <FadeInDiv><img src={comillas} alt="comillas" /></FadeInDiv>
                </div>

                {/* Animación de tipeo para la descripción */}
                <TypingEffect
                    text={selectedUser.desc}
                    className="text-lg mb-8 text-left"
                    durationPerChar={0.01}
                />

                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* El perfil del usuario entra desde la izquierda */}
                    <DragFromLeft className="flex items-center" delay={0.2}>
                    <img
                        className="w-20 h-20 rounded-full mr-4"
                        src={selectedUser.image}
                        alt={selectedUser.name}
                    />
                    <div>
                        <p className="font-bold text-xl">{selectedUser.name}</p>
                        <p className="text-gray-400">{selectedUser.role}</p>
                    </div>
                    </DragFromLeft>

                    {/* Las habilidades y medallas entran desde la derecha */}
                    <DragFromRight className="flex gap-8 text-left" delay={0.2}>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Skill Growth</h3>
                        <ul className="text-sm">
                        <li>Communication: {selectedUser.skill.communication}</li>
                        <li>Critical Thinking: {selectedUser.skill.criticalThinking}</li>
                        <li>Leadership: {selectedUser.skill.leadership}</li>
                        <li>Style: "{selectedUser.skill.style}"</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">✅ Earned Badges</h3>
                        <div className="flex flex-wrap gap-2 max-w-[200px]">
                        {selectedUser.earnedBadges.map((badge, index) => (
                            <img key={index} className="w-12 h-12" src={badge} alt={`badge-${index}`} />
                        ))}
                        </div>
                    </div>
                    </DragFromRight>
                </div>

                <FadeInDiv delay={1}>
                    <p className="text-right mt-6 text-gray-500 text-sm">
                    Progress verified by Linked®
                    </p>
                </FadeInDiv>
            </div>
      </div>
    </div>
  )
}
