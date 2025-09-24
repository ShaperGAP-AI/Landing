
import RadarChart from "../components/diagnostic_sistem/RadarChart";

import iconCard1 from '../assets/Diagnostic_Sistem/icon-card1.png'
import iconCard2 from '../assets/Diagnostic_Sistem/icon-card2.png'
import iconCard3 from '../assets/Diagnostic_Sistem/icon-card3.png'
import iconCard4 from '../assets/Diagnostic_Sistem/icon-card4.png'
import iconCard5 from '../assets/Diagnostic_Sistem/icon-card5.png'

import selector from '../assets/Diagnostic_Sistem/selector.png'
import skillCard1 from '../assets/Diagnostic_Sistem/skill-card1.png'
import skillCard2 from '../assets/Diagnostic_Sistem/skill-card2.png'
import skillCard3 from '../assets/Diagnostic_Sistem/skill-card3.png'
import skillCard4 from '../assets/Diagnostic_Sistem/skill-card4.png'
import skillCard5 from '../assets/Diagnostic_Sistem/skill-card5.png'

const icons = [iconCard1, iconCard2, iconCard3, iconCard4, iconCard5, iconCard5, iconCard5, iconCard5, iconCard5]

export const cardData = [
  {
    id: 'skill-radar-map',
    title: 'Skill Radar Map',
    component: <RadarChart />,
  },
  {
    id: 'highlights-and-growth-areas',
    title: 'Highlights & Growth Areas',
    content: (
      <>
        <div className="mb-4 ml-2 text-background">
          <h3 className="font-bold mx-auto rounded-xl justify-center bg-amber-100 w-full text-md lg:text-lg mb-2 flex items-center">
            Shines at 🔥
          </h3>
          <ul className="list-disc lg:text-lg text-xs space-x-2 ml-5">
            <li>Communication</li>
            <li>Critical Thinking</li>
            <li>Time Management</li>
            <li>Digital Literacy</li>
          </ul>
        </div>
        <div className="ml-2">
          <h3 className="font-bold mx-auto rounded-xl justify-center bg-red-100 w-full text-md lg:text-lg mb-2 flex items-center">
            Need Improvment 🚀
          </h3>
          <ul className="list-disc lg:text-lg text-xs space-x-2 ml-5">
            <li>Customer Service</li>
            <li>Leadership</li>
            <li>Emotional Intelligence</li>
            <li>Collaboration & Teamwork</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 'your-badges',
    title: 'Your Badges',
    content: (
      <div className="flex w-full h-full flex-wrap ">
        {icons.map((icon, i) => (
          <img key={i} src={icon} alt={`Badge ${i + 1}`} className="w-1/3 rounded-full" />
        ))}
      </div>
    ),
  },
  {
    id: 'track-skills-overtime',
    title: 'Track Skills Overtime',
    content: (
      <>
        <img src={selector} alt="selector" />
        <div className="mt-4 mx-0 w-full flex flex-col">
          <img src={skillCard1} alt="Skill Card 1" className="w-full h-fit rounded-lg" />
          <img src={skillCard2} alt="Skill Card 2" className="w-full h-fit rounded-lg" />
          <img src={skillCard3} alt="Skill Card 3" className="w-full h-fit rounded-lg" />
          <img src={skillCard4} alt="Skill Card 4" className="w-full h-fit rounded-lg" />
          <img src={skillCard5} alt="Skill Card 5" className="w-full h-fit rounded-lg" />
        </div>
      </>
    ),
  },
];