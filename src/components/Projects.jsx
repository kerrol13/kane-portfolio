import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import animationVariants from "../animation/animationVariants";
import PROJECT_INFO, { PROJECT_INTRO } from "../data/PROJECT_INFO";

const Projects = ({ onFixedInfo, onDisplayedProject }) => {
  const {
    containerVariants,
    projectImgVariant,
    variants,
    initialProjectImgVariant,
  } = animationVariants();

  const refs = PROJECT_INFO.map(() => useRef(null));
  const isInView = refs.map((ref) => useInView(ref, { margin: "-35%" }));

  useEffect(() => {
    onFixedInfo(isInView[0]);
  }, [isInView[0], onFixedInfo]);

  useEffect(() => {
    isInView.forEach((view, index) => {
      if (view) {
        onDisplayedProject(index);
      }
    });
  }, [isInView, onDisplayedProject]);

  return (
    <div className="pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="xl:w-[75vw]  "
      >
        <div className="h-[30vh] overflow-hidden">
          <motion.h1
            variants={variants}
            className="w-full md:w-[85vw] xl:w-[70vw] mt-[clamp(0,0,0)] xs:mt-[clamp(2rem,10vw,1.7vw)] flex items-center font-extralight p-5 xl:p-8 text-[clamp(1.4rem,5vw,4vw)] lg:text-[clamp(1.4rem,5vw,2.1vw)] lg:leading-[clamp(1.8rem,10vw,3vw)] leading-[clamp(1.8rem,10vw,5vw)] italic text-white"
          >
            {PROJECT_INTRO}
          </motion.h1>
        </div>
        <motion.div className="space-y-16 last:pb-10 xl:last:pb-0">
          {PROJECT_INFO.map((project, index) => (
            <motion.div
              ref={refs[index]}
              key={index}
              initial="hidden"
              animate={isInView[index] ? "visible" : "hidden"}
              variants={
                index === 0 ? initialProjectImgVariant : projectImgVariant
              }
            >
              <img
                className="w-full object-contain h-auto"
                src={project.src}
                alt={project.alt}
                title={project.alt}
                height="auto"
                width="auto"
                loading="lazy"
              />
              <div className="uppercase text-[clamp(.9rem,10vw,.7vw)] text-white block xl:hidden p-5  space-y-8">
                <p className="font-medium space-y-2 text-[clamp(1.5rem,10vw,1.5vw)] break-words">
                  {project.title}
                </p>
                <div className="font-medium space-y-2">
                  <p>About</p>
                  <p className="text-[clamp(.9rem,10vw,.55vw)] font-light leading-[clamp(1.6rem,10vw,1.2vw)] normal-case break-words">
                    {project.about}
                  </p>
                </div>
                <div className="font-medium space-y-2">
                  <p>Tools</p>
                  <div className=" text-[clamp(.9rem,10vw,.55vw)] flex-wrap gap-4 flex font-light leading-[clamp(1.6rem,10vw,1.2vw)] ">
                    {project.tools.map((detail, index) => (
                      <div key={index}>{detail}</div>
                    ))}
                  </div>
                </div>
                <div className="font-medium space-y-2">
                  <p>Details</p>
                  <ul className="text-[clamp(.9rem,10vw,.55vw)]  font-light leading-[clamp(1.6rem,10vw,1.2vw)] normal-case break-words list-[square] ml-5">
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
