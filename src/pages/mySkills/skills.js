import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  SiHtml5, SiCss3, SiSass, SiJavascript, SiReact, 
  SiRedux, SiTypescript, SiTailwindcss, SiAntdesign, SiPython 
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
  { name: 'SASS', icon: SiSass, color: 'text-pink-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'React', icon: SiReact, color: 'text-cyan-500' },
  { name: 'Redux', icon: SiRedux, color: 'text-purple-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'Design', icon: SiAntdesign, color: 'text-blue-400' },
  { name: 'Python', icon: SiPython, color: 'text-yellow-400' }
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="w-full flex ml-6 flex-col items-center justify-center py-10 px-6 text-center">
      <h2 className="text-3xl font-bold">
        My <span className="text-blue-600">Skills</span>
      </h2>
      <div className="w-full max-w-5xl mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              data-aos="fade-up"
              className="flex flex-col justify-center items-center p-4 bg-red-50 w-24 h-24 rounded-full shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-50">
                <Icon className={`text-3xl ${skill.color}`} />
              </div>
              <p className="text-md font-medium mt-2">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
