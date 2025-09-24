import StudentPortrait from "../assets/For_Professionals_Teams_Leaders/student-portrait.png";
import StudentAvatar from "../assets/For_Professionals_Teams_Leaders/student-avatar.png";
import ProfessionalPortrait from "../assets/For_Professionals_Teams_Leaders/professional-portrait.png";
import ProfessionalAvatar from "../assets/For_Professionals_Teams_Leaders/professional-avatar.png";
import CareerShifterPortrait from "../assets/For_Professionals_Teams_Leaders/career-shifter-portrait.png";
import CareerShifterAvatar from "../assets/For_Professionals_Teams_Leaders/career-shifter-avatar.png";
import EmployerPortrait from "../assets/For_Professionals_Teams_Leaders/employer-portrait.png";
import EmployerAvatar from "../assets/For_Professionals_Teams_Leaders/employer-avatar.png";

const publicTargets = [
  {
    id: Math.random().toString(16).slice(2),
    name: "Student",
    portraitSrc: StudentPortrait,
    avatarSrc: StudentAvatar,
    knowledge: "Building foundational soft skills such as communication, collaboration, time management",
    achievement: "Completing interactive challenges and diagnostic loops",
    quality: "Learning to express ideas clearly and solve problems creatively",
    progress: "Becoming confident, self-aware, and career-ready",
  },
  {
    id: Math.random().toString(16).slice(2),
    name: "Professional",
    portraitSrc: ProfessionalPortrait,
    avatarSrc: ProfessionalAvatar,
    knowledge: "Sharpening emotional intelligence, leadership, and decision-making",
    achievement: "Applying skills in real scenarios and tough team dynamics",
    quality: "Elevating clarity under pressure and trust in communication",
    progress: "Growing into a stronger leader and better collaborator daily",
  },
  {
    id: Math.random().toString(16).slice(2),
    name: "Career Shifter",
    portraitSrc: CareerShifterPortrait,
    avatarSrc: CareerShifterAvatar,
    knowledge: "Rebuilding confidence in new skills: adaptability, time mgmt, critical thinking",
    achievement: "Navigating unfamiliar situations with guided simulations",
    quality: "Relearning how to lead, communicate, and perform in a new role",
    progress: "Transitioning with confidence and verifiable, real growth",
  },
  {
    id: Math.random().toString(16).slice(2),
    name: "Employer",
    portraitSrc: EmployerPortrait,
    avatarSrc: EmployerAvatar,
    knowledge: "Seeing real behavioral data, not self-reported traits",
    achievement: "Tracking growth through challenges, not just test scores",
    quality: "Measuring clarity, resilience, empathy & leadership in action",
    progress: "Making smarter hiring, L&D, and team-building decisions based on verified skills",
  },
];

export default publicTargets;
