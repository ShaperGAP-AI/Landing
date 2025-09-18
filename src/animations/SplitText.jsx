import React from 'react';
import { motion } from 'framer-motion';

const SplitText = ({ text, duration = 0.8, stagger = 0.05, delay = 0, ...props }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: false }}
      {...props}
    >
      {text.split(' ').map((word, index) => (
        <motion.span 
          key={index} 
          variants={wordVariants}
          style={{ display: 'inline-block', marginRight: '0.25rem' }}
        >
          {word + ' '}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;