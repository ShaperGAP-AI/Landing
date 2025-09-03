import Diagnosis_to_mastery from "./sections/Diagnosis_to_mastery";
import Core_Loop_Section from "./sections/core_loop/Core_Loop_Section";
import Hero from "./sections/Hero";
import Why_Exist from "./sections/Why_Exist";
import "./App.css";

function App() {
  return (
    <>
      <Hero />
      <Why_Exist />
      <Core_Loop_Section />
      <Diagnosis_to_mastery />
    </>
  );
}

export default App;
