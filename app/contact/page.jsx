"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,  } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope,  FaMapMarkerAlt, FaMicrophoneAlt} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+54) 1122531998"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "facundoarandajoaquin@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "GBA - Zona Norte",
  }
]

import { motion } from "@/framer-motion";
import Social from "@/components/Social";

const Contact = () => {
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
  }}
  className="py-6"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        {/* form */}
        <div className="xl:w-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-orange-400">Trabajemos Juntos!</h3>
            <p className="text-white/60">Soy un joven entusiasta de la tecnología que sabe perfectamente cómo agregar valor a tu empresa, idea o proyecto.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="firstname" placeholder="Nombre"/>
              <Input type="lastname" placeholder="Apellido"/>
              <Input type="email" placeholder="Email"/>
              <Input type="phone" placeholder="Numero de telefono"/>
            </div>
            {/* select */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un Asunto/Puesto:"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>
                  Selecciona un Asunto/Puesto:
                  </SelectLabel>
                  <SelectItem value="est">Full-Stack</SelectItem>
                  <SelectItem value="cst">Front-End</SelectItem>
                  <SelectItem value="mst">Back-End</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* textarea*/}
            <Textarea className="h-[200px]" placeholder="Enviame un mensaje." />
          {/* btn */}
          <Button size="md" className="max-w-50 text-primary text-lg rounded-full">Quiero contactarme con Facu!</Button>
          </form>
        </div>
        {/* info */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
          
          <ul className="flex flex-col gap-10">
            {info.map((item, index)=> {
              return (
                <li key={index} className="flex items-center gap-6 ">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-orange-400 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                </li>
              );
            })}
          <div className="mb-8 xl:mb-0">
          <Social containerStyles="flex gap-6" iconStyles="w-12 h-12 border border-orange-400 rounded-full flex justify-center items-center text-orange-400 text-base hover:bg-orange-400 hover:text-primary hover:transition-all duration-500"/>
        </div>
          </ul>
        </div>
      </div>
    </div>
  </motion.section>
  )
}

export default Contact