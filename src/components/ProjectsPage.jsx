import { useEffect, useState } from "react";
import ProjectDescription from "./ProjectDescription";
import Projects from "./Projects";
import PageTransition from "./PageTransition";
import ReactLenis from "lenis/react";

const ProjectsPage = () => {
  const [isFixed, setIsFixed] = useState(true);
  const [displayedProject, setDisplayedProject] = useState(null);

  const handleFixedInfo = (isInView1) => {
    setIsFixed(isInView1);
  };

  const handleDisplayedProject = (displayed) => {
    setDisplayedProject(displayed);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root options={{ wheelMultiplier: 1.2, duration: 2 }}>
      <div className="bg-zinc-900">
        <PageTransition />
        <ProjectDescription
          displayedProject={displayedProject}
          isFixed={isFixed}
        />
        <Projects
          onFixedInfo={handleFixedInfo}
          onDisplayedProject={handleDisplayedProject}
        />
      </div>
    </ReactLenis>
  );
};

export default ProjectsPage;
