import React from 'react';
import { motion } from 'framer-motion';

const FadeInDiv = ({ children, duration = 1.5, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration, delay: delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeInDiv;
