"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs  } from "react-icons/fa";


//About data
const about = {
  title: 'Sobre mi:',
  description: 'Soy un desarrollador web apasionado por el diseño y la programación. Detallista y siempre con motivación de aprender algo nuevo. Me adapto fácilmente a las situaciones, al trabajo en equipo y a las nuevas problemáticas por mi tendencia a la buena predisposición ante todo. Busco una oportunidad para seguir aprendiendo y creciendo como desarrollador en una empresa innovadora y comprometida con la calidad.',
  info: [
    {
      fieldName: "Nombre:",
      fieldValue: "Facundo Aranda"
    },
    {
      fieldName: "Whatsapp:",
      fieldValue: "(+54) 1122531998"
    },
    {
      fieldName: "Edad:",
      fieldValue: "22 años"
    },
    {
      fieldName: "Email:",
      fieldValue: "Facundoarandajoaquin@gmail.com"
    }, 
  ]
};

//experiencie data
const experience = {
  icon: '/assets/',
  title: 'Mis experiencias',
  description: "Durante 6 meses, me capacité en la Fundación Pescar para desarrollar habilidades blandas esenciales para el entorno laboral. Me enfoqué en gestionar el tiempo, controlar emociones, trabajar en equipo, diplomacia laboral, toma de decisiones, seguridad en mí mismo y espíritu emprendedor. Además, participé en proyectos de equipo para simular situaciones cotidianas del entorno corporativo, fortaleciendo así mis habilidades prácticas y mi adaptabilidad.",
  items: [
    {
      company: "PCCentro srl",
      position: "Soporte Tecnico N1",
      duration: "2024 (Enero - Febrero)",
    },
    {
      company: "JPMorgan + Artech + Fundación Pescar",
      position: "Full Stack Trainee",
      duration: "2024 (Abril - Octubre)",
    }
  ]
};

//Education
const education = {
  icon: '/assets/',
  title: 'Mi educacion Formal:',
  description: "Gracias a la UNGS y al curso de Oracle, tuve la oportunidad de iniciarme en el campo de las tecnologías de la información.",
  items: [
    {
      institution: "Universidad Nacional de General Sarmiento",
      position: "Licenciatura en Sistemas",
      duration: "2023 (Agosto - Actual)",
    },
    {
      institution: "Oracle Next Education + Alura Latam",
      position: "Principiante en Full-Stack Web",
      duration: "Julio 2022 - Marzo 2023",
    },
  ]
}

//skills data
const skills = {
  title: "Mis Skills: ",
  description: "Tengo amplio conocimiento y comprensión profunda de las tecnologías más avanzadas para el desarrollo web, abarcando desde frameworks front-end y back-end hasta herramientas de gestión de versiones y metodologías ágiles, con el objetivo de asegurar un desarrollo web eficiente y de alta calidad.",
  skillList:[
    {
      icon: <FaHtml5 />,
      name: "HTML5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS3"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaReact />,
      name: "React.JS"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.JS"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.CSS"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.JS"
    },
    {
      icon: <FaFigma />,
      name: "Figma"
    },
  ]
};

import { Tabs ,TabsContent, TabsList, TabsTrigger} from "@radix-ui/react-tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import  { motion } from "@/framer-motion";
import { Item } from "@radix-ui/react-select";
import { SiTailwindcss,  SiNextdotjs  } from "react-icons/si";

const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay:2.4, duration: 0.4, ease: "easeIn"},
  }}
  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience" className="inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap text-white p-3 text-base font-medium ring-offset-white transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-orange-400 data-[state=active]:text-primary data-[state=active]:font-bold data-[state=active]:shadow-sm rounded-full">Experiencia</TabsTrigger>
          <TabsTrigger value="education" className="inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap text-white p-3 text-base font-medium ring-offset-white transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-orange-400 data-[state=active]:text-primary data-[state=active]:font-bold data-[state=active]:shadow-sm rounded-full">Educacion</TabsTrigger>
          <TabsTrigger value="skills" className="inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap text-white p-3 text-base font-medium ring-offset-white transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-orange-400 data-[state=active]:text-primary data-[state=active]:font-bold data-[state=active]:shadow-sm rounded-full">Skills</TabsTrigger>
          <TabsTrigger value="about" className="inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap text-white p-3 text-base font-medium ring-offset-white transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-orange-400 data-[state=active]:text-primary data-[state=active]:font-bold data-[state=active]:shadow-sm rounded-full">Sobre mi</TabsTrigger>
        </TabsList>
        {/*content*/}
        <div className="min-h-[70vh] w-full">
          {/*experience*/}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left ">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                      <span className="text-orange-400">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3 ">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-orange-400"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                    })}
                  </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/*education*/}
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                      <span className="text-orange-400">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3 ">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-orange-400"></span>
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </li>
                    })}
                  </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/*skills*/}
          <TabsContent value="skills" className="w-full h-full">
          <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:xm-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                {skills.skillList.map((skill, index)=>{
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-orange-400 transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize ">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>
          {/*About*/}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white mx-auto xl:mx-0 ">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[650px] mx-auto xl:mx-0 ">{about.info.map((item, index)=>{
                return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">{item.fieldName}</span>
                    <span className="text-xl ">{item.fieldValue}</span>
                </li>
              })}</ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>
  );
}

export default Resume