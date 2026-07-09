import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import CodingProfiles from "@/components/sections/CodingProfiles";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 px-4 sm:px-6 md:px-8 py-24 max-w-[1400px] mx-auto w-full overflow-hidden">
      <div id="home" className="scroll-mt-24 rounded-[2.5rem] overflow-hidden glass-strong border border-[rgba(99,102,241,0.15)] relative shadow-2xl">
        <Hero />
      </div>
      
      <div id="about" className="scroll-mt-24 rounded-[2.5rem] overflow-hidden glass border border-[rgba(99,102,241,0.1)] relative shadow-xl">
        <About />
      </div>
      
      <div id="skills" className="scroll-mt-24 rounded-[2.5rem] overflow-hidden glass border border-[rgba(99,102,241,0.1)] relative shadow-xl">
        <Skills />
      </div>
      
      <div id="projects" className="scroll-mt-24 rounded-[2.5rem] overflow-hidden glass border border-[rgba(99,102,241,0.1)] relative shadow-xl">
        <Projects />
      </div>
      
      <div id="experience" className="scroll-mt-24 rounded-[2.5rem] overflow-hidden glass border border-[rgba(99,102,241,0.1)] relative shadow-xl">
        <Experience />
      </div>
      
      <div id="coding" className="scroll-mt-24 rounded-[2.5rem] overflow-hidden glass border border-[rgba(99,102,241,0.1)] relative shadow-xl">
        <CodingProfiles />
      </div>
      
      <div id="resume" className="scroll-mt-24 rounded-[2.5rem] overflow-hidden glass border border-[rgba(99,102,241,0.1)] relative shadow-xl">
        <Resume />
      </div>
      
      <div id="contact" className="scroll-mt-24 rounded-[2.5rem] overflow-hidden glass border border-[rgba(99,102,241,0.1)] relative shadow-xl">
        <Contact />
      </div>
    </div>
  );
}