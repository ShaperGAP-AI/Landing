import { motion } from 'framer-motion';

const FadeInDiv = ({ children, duration = 0.8, delay = 0, yOffset = 20, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: false }} 
      transition={{ duration: duration, delay: delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeInDiv;