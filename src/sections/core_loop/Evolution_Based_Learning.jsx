import Icosahedron from "../../assets/icosahedron.png";

export default function Evolution_Based_Learning() {
  return (
    <div className="w-full p-5">
      <div className="flex flex-col gap-2 w-full bg-foreground rounded-lg p-5">
        <h1 className="text-3xl text-purple font-bold">Introducing Evolution-Based Learning (EBL)</h1>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2 text-black text-2xl font-bold">
            <img src={Icosahedron} alt="" className="h-8 inline" />
            <span>Real-time diagnostics</span>
          </li>
          <li className="flex items-center gap-2 text-black text-2xl font-bold">
            <img src={Icosahedron} alt="" className="h-8 inline" />
            <span>Verified identity-based growth</span>
          </li>
          <li className="flex items-center gap-2 text-black text-2xl font-bold">
            <img src={Icosahedron} alt="" className="h-8 inline" />
            <span>Adaptive skill evolution</span>
          </li>
        </ul>
        <p className="text-2xl text-lightpurple italic">Into one seamless, gamified system.</p>
      </div>
    </div>
  );
}
