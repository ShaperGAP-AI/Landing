import HeroCharacter from "../../assets/hero-character.png";
import BgObject1 from "../../assets/core-loop-bg-object1.png";
import BgObject2 from "../../assets/core-loop-bg-object2.png";
import BgObject3 from "../../assets/core-loop-bg-object3.png";

export default function Shaper_Gap_Here() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-between py-20">
      <h1 className="text-black text-4xl font-bold text-center px-20 z-10 sm:text-5xl lg:text-6xl">
        <span className="whitespace-nowrap">
          Shaper GAP<sup>&reg;</sup>{" "}
        </span>
        <br className="sm:hidden" />
        <span className="whitespace-nowrap">Is Here</span>
        <br />
        <span className="text-darkpurple">To Change </span>
        <br className="sm:hidden" />
        <span className="text-darkpurple">That</span>
      </h1>
      <div className="h-[80%] aspect-square relative flex justify-center">
        <div className="bg-purple absolute bottom-0 h-[10%] w-[60%] rounded-[100%] blur-sm"></div>
        <img src={HeroCharacter} alt="" className="z-10" />
      </div>
      <img src={BgObject1} alt="" className="absolute left-[15vw] top-[32vh] h-20 blur-[1px] sm:top-[40vh] sm:h-40" />
      <img src={BgObject1} alt="" className="hidden absolute right-[20vw] top-[3vh] h-40 blur-[1px] sm:block" />
      <img
        src={BgObject2}
        alt=""
        className="absolute right-[15vw] top-[12vh] h-25 blur-[2px] sm:-left-[2vw] sm:h-50 sm:top-[5vh] sm:blur-[1px]"
      />
      <img
        src={BgObject3}
        alt=""
        className="absolute -right-[5vw] top-[40vh] h-30 blur-[3px] sm:-right-[3vw] sm:h-50 sm:blur-[1px]"
      />
    </div>
  );
}
