import { motion } from 'framer-motion';

const DragFromLeft = ({ children, delay = 0, duration = 0.8, xOffset = -100, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: false }}
      transition={{ duration: duration, delay: delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default DragFromLeft;