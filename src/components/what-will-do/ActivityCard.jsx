import { motion, usePresenceData } from "framer-motion";

export default function ActivityCard({ activity }) {
  const direction = usePresenceData();
  const BASE_X = 50;

  return (
    <motion.div
      initial={{ x: -BASE_X * direction, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: BASE_X * direction, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="flex rounded-xl overflow-hidden sm:h-full"
    >
      <img src={activity.src} alt={activity.alt} className="object-contain sm:object-cover" />
    </motion.div>
  );
}
