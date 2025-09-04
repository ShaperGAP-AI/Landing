import { motion } from "framer-motion";

export default function CoreLoopBubble({ children, style }) {
  return (
    <motion.div
      className="absolute flex items-center justify-center bg-darkpurple/20 h-[22vw] aspect-square rounded-full lg:h-[8vw] xl:h-[9vw]"
      style={style}
    >
      <div className="flex items-center justify-center bg-darkpurple h-[90%] aspect-square rounded-full p-2">
        <p className="text-[2.8vw] text-center font-bold sm:text-lg lg:text-[0.6rem] xl:text-sm 2xl:text-2xl 3xl:text-3xl">{children}</p>
      </div>
    </motion.div>
  );
}
