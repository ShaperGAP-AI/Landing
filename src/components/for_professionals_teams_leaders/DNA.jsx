import { motion, usePresenceData } from "framer-motion";
import DNAImg from "../../assets/dna.png";

export default function DNA({ info }) {
  const direction = usePresenceData();

  return (
    <motion.div
      className="h-full m-auto flex"
      initial={{ x: `${-direction * 100}%`, opacity: 1 }}
      animate={{ x: "0%" }}
      exit={{ x: `${direction * 100}%`, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-full aspect-3/4 flex items-center justify-evenly rounded-xl border-2 border-white/20 bg-purple/10 text-black lg:h-[98%]">
        {/* LEFT_COLUMN */}
        <div className="h-[96%] w-[35%] flex-col">
          <div className="relative h-1/4 flex flex-col items-start justify-center">
            <div className="relative h-10 aspect-square rounded-full bg-black/10">
              <div className="absolute inset-1 flex items-center justify-center bg-white rounded-full font-bold">1</div>
            </div>
            <h2 className="text-xs font-bold">Knowledge</h2>
            <div className="absolute w-full bottom-0 border-1 border-white/50 rounded-full"></div>
          </div>
          <div className="relative h-1/4 flex flex-col items-start justify-center">
            <div className="relative h-10 aspect-square rounded-full bg-black/10">
              <div className="absolute inset-1 flex items-center justify-center bg-white rounded-full font-bold">2</div>
            </div>
            <h2 className="text-xs font-bold">Achievement</h2>
            <div className="absolute w-full bottom-0 border-1 border-white/50 rounded-full"></div>
          </div>
          <div className="relative h-1/4 flex flex-col items-start justify-center">
            <div className="relative h-10 aspect-square rounded-full bg-black/10">
              <div className="absolute inset-1 flex items-center justify-center bg-white rounded-full font-bold">3</div>
            </div>
            <h2 className="text-xs font-bold">Quality</h2>
            <div className="absolute w-full bottom-0 border-1 border-white/50 rounded-full"></div>
          </div>
          <div className="h-1/4 flex flex-col items-start justify-center">
            <div className="relative h-10 aspect-square rounded-full bg-black/10">
              <div className="absolute inset-1 flex items-center justify-center bg-white rounded-full font-bold">4</div>
            </div>
            <h2 className="text-xs font-bold">Progress</h2>
          </div>
        </div>
        {/* MIDDLE_COLUMN */}
        <div className="h-[96%] w-[24%] flex-col">
          <div className="flex h-1/2">
            <img src={DNAImg} alt="" className="object-fill" />
          </div>
          <div className="flex h-1/2">
            <img src={DNAImg} alt="" className="object-fill rotate-x-180" />
          </div>
        </div>
        {/* RIGHT_COLUMN */}
        <div className="relative h-[100%] w-[30%] flex-col lg:h-[100%] lg:w-[35%]">
          <div className="flex flex-col justify-around h-full">
            <div className="aspect-6/5 rounded-lg bg-white/50 text-[2.6vw] p-1 lg:text-xs xl:text-base 2xl:p-2 2xl:text-lg">{info.knowledge}</div>
            <div className="aspect-6/5 rounded-lg bg-white/50 text-[2.6vw] p-1 lg:text-xs xl:text-base 2xl:p-2 2xl:text-lg">{info.achievement}</div>
            <div className="aspect-6/5 rounded-lg bg-white/50 text-[2.6vw] p-1 lg:text-xs xl:text-base 2xl:p-2 2xl:text-lg">{info.quality}</div>
            <div className="aspect-6/5 rounded-lg bg-white/50 text-[2.6vw] p-1 lg:text-xs xl:text-base 2xl:p-2 2xl:text-lg">{info.progress}</div>
          </div>
          {/* DIVISORS */}
          <div className="absolute inset-0">
            <div className="relative h-1/4">
              <div className="absolute w-full bottom-0 border-1 border-white/50 rounded-full"></div>
            </div>
            <div className="relative h-1/4">
              <div className="absolute w-full bottom-0 border-1 border-white/50 rounded-full"></div>
            </div>
            <div className="relative h-1/4">
              <div className="absolute w-full bottom-0 border-1 border-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      {/* AVATAR */}
      <div className="hidden lg:flex">
        <img src={info.avatarSrc} />
      </div>
    </motion.div>
  );
}
