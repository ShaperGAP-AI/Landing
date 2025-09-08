import { motion } from 'framer-motion';

const TypingEffect = ({ text, durationPerChar = 0.05, delay = 0, ...props }) => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: durationPerChar,
        delayChildren: delay,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={textVariants}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: false }} 
      {...props}
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={charVariants}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TypingEffect;