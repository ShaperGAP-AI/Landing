// src/components/FlipCard.jsx

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardDesign from './CardDesign'; 
import { cardData } from '../../data/card_data'; 
import flecha from "../../assets/flecha.png"

const NUM_STACKED_CARDS = 3; 

export default function FlipCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const intervalRef = useRef(null);

   const handleClick = () => {
    stopFlipping();
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
      setIsFlipping(false);
      startFlipping();
    }, 700);
  };
  const startFlipping = () => {
    intervalRef.current = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
        setIsFlipping(false);
      }, 700);
    }, 4000); 
  };

  const stopFlipping = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startFlipping();
    return () => stopFlipping();
  }, []);

  const getCardsToDisplay = () => {
    const cards = [];
    cards.push({ ...cardData[currentIndex], zIndex: NUM_STACKED_CARDS + 1, order: 0 });

    for (let i = 1; i <= NUM_STACKED_CARDS; i++) {
      const nextIndex = (currentIndex + i) % cardData.length;
      cards.push({
        ...cardData[nextIndex],
        zIndex: NUM_STACKED_CARDS + 1 - i, 
        order: i, 
      });
    }
    return cards;
  };

  const cardsToDisplay = getCardsToDisplay();

  const cardVariants = {
    initial: (order) => ({
      x: order * 15,
      y: order * 25,
      scale: 1 - order * 0.05, 
      opacity: 1 - order * 0.5,
      rotateY: 0,
      zIndex: NUM_STACKED_CARDS + 1 - order,
    }),
    stacked: (order) => ({
      x: order * 15,
      y: order * 25,
      scale: 1 - order * 0.05,
      opacity: 1 - order * 0.2,
      rotateY: 0,
      zIndex: NUM_STACKED_CARDS + 1 - order,
      transition: {
        x: { duration: 0.5, ease: 'easeInOut' },
        y: { duration: 0.5, ease: 'easeInOut' },
        scale: { duration: 0.5, ease: 'easeInOut' },
        opacity: { duration: 0.5, ease: 'easeInOut' },
      },
    }),
    front: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      rotateY: 0,
      zIndex: NUM_STACKED_CARDS + 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    flip: {
      rotateY: 360, 
      x: NUM_STACKED_CARDS * 15, 
      y: NUM_STACKED_CARDS * 25,
      scale: 1 - NUM_STACKED_CARDS * 0.05,
      opacity: 0.2,
      zIndex: 0,
      transition: {
        rotateY: { duration: 0.7, ease: 'easeInOut' },
        x: { duration: 0.7, ease: 'easeInOut' },
        y: { duration: 0.7, ease: 'easeInOut' },
        scale: { duration: 0.7, ease: 'easeInOut' },
        opacity: { duration: 0.9, ease: 'easeInOut' },
      },
    },
  };

  return (
    <div className='w-full h-fit flex flex-col'>
      <div className="relative mx-auto my-3 w-[250px] h-[300px] lg:w-[400px] lg:h-[450px]">
        <AnimatePresence initial={false}>
          {cardsToDisplay.map((card, index) => {
            const isFrontCard = index === 0; 
            
            return (
              <motion.div
                key={card.id}
                className="absolute inset-0"
                custom={card.order} 
                variants={cardVariants}
                initial="initial"
                animate={isFrontCard ? (isFlipping ? 'flip' : 'front') : 'stacked'}
                exit="flip"
                style={{
                  perspective: '1000px',
                  transformOrigin: 'right center', 
                  backfaceVisibility: 'hidden',
                  pointerEvents: isFrontCard ? 'auto' : 'none', 
                }}
              >
                <CardDesign
                  title={card.title}
                  content={card.component || card.content}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
        
      </div>
      <div className='mx-auto mt-14 z-30 cursor-pointer hover:-translate-y-1 transition-all ease-in-out'>
        <img onClick={handleClick} className="w-5" src={flecha} alt="Flecha" />
      </div>
    </div>
  );
}