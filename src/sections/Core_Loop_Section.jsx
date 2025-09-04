import Shaper_Gap_Here from "../components/core_loop/Shaper_Gap_Here";
import Evolution_Based_Learning from "../components/core_loop/Evolution_Based_Learning";
import Core_Loop from "../components/core_loop/Core_Loop";
import Skills_That_Matter from "../components/core_loop/Skills_That_Matter";

export default function Core_Loop_Section() {
  return (
    <div className="multi-gradient-bg overflow-x-hidden py-20 px-5 overflow-y-hidden">
      <Shaper_Gap_Here />
      <Core_Loop />
      <Evolution_Based_Learning />
      <Skills_That_Matter/>
    </div>
  );
}
