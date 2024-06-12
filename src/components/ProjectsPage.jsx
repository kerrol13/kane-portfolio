import { useEffect, useState } from "react";
import ProjectDescription from "./ProjectDescription";
import Projects from "./Projects";
import PageTransition from "./PageTransition";

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
  );
};

export default ProjectsPage;
