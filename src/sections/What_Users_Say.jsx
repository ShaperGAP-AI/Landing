import FadeInDiv from '../animations/FadeInDiv';
import SplitText from '../animations/SplitText';

import FondoCuadros from '../components/FondoCuadros';

import flecha from '../assets/flecha.png';
import comillas from '../assets/comillas.png';

import { cardData } from '../data/person_data';
import { useEffect, useState, useRef, useCallback } from 'react';
// Asegúrate de importar 'motion' y 'AnimatePresence'
import { motion, AnimatePresence } from 'framer-motion';

export default function What_Users_Say() {
    const [selectedUser, setSelectedUser] = useState(cardData[1]);
    const timerRef = useRef(null);

    const handleUserSelect = useCallback((userId) => {
        const user = cardData.find((user) => user.id === userId);
        if (user) {
            setSelectedUser(user);
        }
    }, []);

    const handleNext = useCallback(() => {
        setSelectedUser(currentUser => {
            const currentIndex = cardData.findIndex((user) => user.id === currentUser.id);
            const nextIndex = (currentIndex + 1) % cardData.length;
            return cardData[nextIndex];
        });
    }, []);

    const handlePrev = useCallback(() => {
        setSelectedUser(currentUser => {
            const currentIndex = cardData.findIndex((user) => user.id === currentUser.id);
            const prevIndex = (currentIndex - 1 + cardData.length) % cardData.length;
            return cardData[prevIndex];
        });
    }, []);

    useEffect(() => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(handleNext, 5000);
        return () => clearTimeout(timerRef.current);
    }, [selectedUser, handleNext]);

    return (
        <div className="w-full text-center py-10 lg:py-20 relative overflow-hidden">
            <FondoCuadros />
            <div className='flex flex-col lg:w-4/6 w-full mx-auto text-center justify-center'>
                <SplitText
                    className='font-bold text-2xl li lg:text-5xl text-white relative z-30'
                    text="This changed how I think"
                    durationPerChar={0.9}>
                </SplitText>
                <SplitText
                    className='font-bold text-2xl lg:text-5xl text-lightpurple relative z-30'
                    text="under pressure."
                    durationPerChar={0.9}>
                </SplitText>
                <FadeInDiv delay={1}>
                    <p className='lg:mt-10 mt-5 text-slate-500 text-xs lg:text-base'>Trusted by top learners</p>
                </FadeInDiv>
                <div className='w-full relative z-20 lg:mt-10 mt-5 flex'>
                    <img
                        src={flecha}
                        alt="flecha"
                        className="mx-auto lg:h-10 lg:my-auto my-2 lg:w-10 h-5 w-5 rotate-180 cursor-pointer"
                        onClick={handlePrev}
                    />
                    <div className="flex w-4/6 justify-around">
                        {cardData.map((user) => (
                            <div key={user.id}>
                                <img
                                    id={user.id.toString()}
                                    className={`lg:w-16 lg:h-16 h-8 w-8 cursor-pointer transition-all duration-100 ease-in-out hover:-translate-y-1 hover:grayscale-0 hover:border-2 border-purple rounded-full ${selectedUser.id === user.id ? 'grayscale-0 border-2 border-purple' : 'grayscale'}`}
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
                        className="mx-auto lg:h-10 lg:my-auto my-2 lg:w-10 h-5 w-5 cursor-pointer"
                        onClick={handleNext}
                    />
                </div>
                
                {/* AÑADIMOS ANIMATEPRESENCE PARA GESTIONAR LA TRANSICIÓN */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedUser.id} // La key es crucial para que AnimatePresence funcione
                        className="lg:mt-10 mt-5 w-full lg:w-3xl mx-auto bg-[#333333] relative z-20 rounded-2xl p-5 lg:p-8 lg:h-96 h-fit text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="mx-auto w-fit font-bold text-purple-400 mb-6">
                            <img src={comillas} alt="comillas" />
                        </div>

                        {/* Reemplazamos TypingEffect por un <p> para una transición suave */}
                        <p className="lg:text-lg text-md lg:mb-0 mb-10 text-left h-20"> {/* Se añade altura fija para evitar saltos de layout */}
                            {selectedUser.desc}
                        </p>

                        <div className="flex flex-col md:flex-row w-full justify-around items-center">
                            <div className='bg-purple/10 w-full lg:mb-0 mb-6 lg:w-fit rounded-2xl lg:p-4 p-2 flex flex-col items-center'>
                                <img
                                    className="w-20 h-20 rounded-full mx-auto"
                                    src={selectedUser.image}
                                    alt={selectedUser.name}
                                />
                                <div>
                                    <p className="font-bold text-xl">{selectedUser.name}</p>
                                    <p className="text-gray-400">{selectedUser.role}</p>
                                </div>
                            </div>
                            <div className='bg-purple/10 w-full lg:mb-0 mb-6 lg:w-fit rounded-2xl lg:p-4 p-2 flex flex-col items-center'>
                                <h3 className="text-lg font-semibold mb-2">Skill Growth</h3>
                                <ul className="text-sm list-disc text-start lg:ml-2">
                                    <li>Communication: {selectedUser.skill.communication}</li>
                                    <li>Critical Thinking: {selectedUser.skill.criticalThinking}</li>
                                    <li>Leadership: {selectedUser.skill.leadership}</li>
                                    <li>Style: "{selectedUser.skill.style}"</li>
                                </ul>
                            </div>
                            <div className='bg-purple/10 w-full lg:mb-0 mb-6 lg:w-fit rounded-2xl lg:p-4 p-2 flex flex-col items-center'>
                                <h3 className="text-lg font-semibold mb-2">✅ Earned Badges</h3>
                                <div className="flex flex-wrap justify-evenly gap-2 max-w-[220px]">
                                    {selectedUser.earnedBadges.map((badge, index) => (
                                        <img key={index} className="w-12 h-12" src={badge} alt={`badge-${index}`} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="text-right mt-2 mx-auto w-fit text-gray-500 text-sm">
                            Progress verified by Linked®
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}