import { motion } from "framer-motion";

export default function CoreLoopBubble({ children, style }) {
  return (
    <motion.div
      className="absolute flex items-center justify-center bg-darkpurple/20 h-[22vw] aspect-square rounded-full"
      style={style}
    >
      <div className="flex items-center justify-center bg-darkpurple h-[90%] aspect-square rounded-full p-2">
        <p className="text-xs text-center font-bold sm:text-lg lg:text-2xl">{children}</p>
      </div>
    </motion.div>
  );
}
