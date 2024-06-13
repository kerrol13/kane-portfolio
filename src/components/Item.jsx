import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PROJECT_INFO from "../data/PROJECT_INFO";
import animationVariants from "../animation/animationVariants";

const Item = ({ isFixed, displayedProject }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const project = PROJECT_INFO[displayedProject];
  if (!project) return null;

  const { containerVariants, projectDescVariant, itemVariants } =
    animationVariants();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex h-[130vh] text-white"
      exit="hidden"
    >
      <motion.div
        ref={ref}
        animate={isInView ? "visible" : "hidden"}
        variants={projectDescVariant}
        className="w-full"
      >
        <figure className={`${isFixed ? "sticky" : "fixed"} top-20`}>
          <motion.div
            className="w-[25vw] uppercase text-[clamp(.9rem,10vw,.6vw)] space-y-8 px-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p className="font-medium space-y-2 text-[clamp(1rem,10vw,1.5vw)] break-words">
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
              <div className="text-[clamp(.9rem,10vw,.55vw)] flex-wrap gap-4 flex font-light leading-[clamp(1.6rem,10vw,1.2vw)] ">
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
          </motion.div>
        </figure>
      </motion.div>
    </motion.div>
  );
};

export default Item;
