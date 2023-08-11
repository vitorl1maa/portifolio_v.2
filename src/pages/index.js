import Image from "next/image";
import { Poppins } from "next/font/google";
import InitialInfo from "@/components/InitialInfo";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ProjectShow from "@/components/ProjectShow";
import Footer from "@/components/Footer";
import React, { useState } from "react";

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);

  const handleProjectClick = (project, index) => {
    setActiveProject({ ...project, index });
  };

  const handleBackClick = () => {
    setActiveProject(null);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <InitialInfo />
      <About />
      {activeProject && activeProject.index !== undefined ? (
        <ProjectShow {...activeProject} onBackClick={handleBackClick} />
      ) : (
        <Projects onProjectClick={handleProjectClick} />
      )}
      <Footer />
    </div>
  );
}
