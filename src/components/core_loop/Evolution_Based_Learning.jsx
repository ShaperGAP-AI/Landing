import Icosahedron from "../../assets/Core_Loop_Section/icosahedron.png";

export default function Evolution_Based_Learning() {
  return (
    <div
      className="flex justify-center w-full
                lg:w-[90%] lg:mx-auto xl:w-[80%] xl:mx-auto"
    >
      <div className="flex flex-col gap-5 w-full bg-foreground rounded-lg p-5 lg:rounded-xl lg:p-10 lg:gap-10">
        <h1 className="text-2xl text-purple font-bold md:text-3xl xl:text-4xl 2xl:text-5xl">
          Introducing Evolution-Based Learning (EBL)
        </h1>
        <ul
          className="flex flex-col gap-2 text-black text-xl
                    md:text-2xl xl:text-3xl 2xl:text-4xl"
        >
          <li className="flex items-center gap-2 font-bold lg:gap-5">
            <img src={Icosahedron} alt="" className="h-8 inline" />
            <span>Real-time diagnostics</span>
          </li>
          <li className="flex items-center gap-2 font-bold lg:gap-5">
            <img src={Icosahedron} alt="" className="h-8 inline" />
            <span>Verified identity-based growth</span>
          </li>
          <li className="flex items-center gap-2 font-bold lg:gap-5">
            <img src={Icosahedron} alt="" className="h-8 inline" />
            <span>Adaptive skill evolution</span>
          </li>
        </ul>
        <p
          className="text-xl text-lightpurple italic
                    md:text-2xl xl:text-3xl 2xl:text-4xl"
        >
          Into one seamless, gamified system.
        </p>
      </div>
    </div>
  );
}
