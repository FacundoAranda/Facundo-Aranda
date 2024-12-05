import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
  <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Developer Full-Stack</span>
          <h1 className="h1 mb-6">Hola, <br /> mi nombre es <br /><span className="text-orange-400">Facundo Aranda</span>.</h1>
          <p className="max-w-[500px] mb-9 text-white/80">Gracias por visitar mi portafolio este fue creado utilizando Next JS, Tailwind CSS & Framer Motion.</p>
          {/* btn and socials*/}
          <div className="flex flex-col xl:flex-row items-center gap-8">
          <a href="https://drive.google.com/file/d/1U1FOIbnqHFJ_gAwRbB3FIJJDqorL4PZP/view?usp=sharing">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 text-orange-400">
              <span>Descargar CV</span>
              <FiDownload className="text-xl" />
            </Button>
            </a>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-12 h-12 border border-orange-400 rounded-full flex justify-center items-center text-orange-400 text-base hover:bg-orange-400 hover:text-primary hover:transition-all duration-500"/>
            </div>
          </div>
        </div>
        {/* photo */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
  </section>
  );
};

export default Home;
