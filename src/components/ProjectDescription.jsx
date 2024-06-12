import { AnimatePresence, motion } from "framer-motion";
import ArrowIcon from "./icons/ArrowIcon";
import animationVariants from "../animation/animationVariants";
import Item from "./Item";
import { Link } from "react-router-dom";

const ProjectDescription = ({ displayedProject, isFixed }) => {
  return (
    <>
      <motion.div
        variants={animationVariants(1.7).opacityVariant}
        initial="hidden"
        animate="visible"
        className=" text-white fixed text-[clamp(1rem,1vw,.6vw)] p-5 xl:p-7 z-10 font-semibold flex items-center"
      >
        <Link to="/" className="flex items-center space-x-1">
          <ArrowIcon />
          <p className="uppercase font-medium">Home</p>
        </Link>
        <p className="text-sm mx-2 font-extralight">|</p>
        <i className="font-normal">Projects</i>
      </motion.div>

      <motion.div
        variants={animationVariants(0.6).opacityVariant}
        initial="hidden"
        animate="visible"
        className="w-[25vw] h-[120vh] right-0 absolute mt-20 z-20 hidden xl:block"
      >
        <div className="h-[30vh]" />
        <AnimatePresence mode="wait">
          <Item key={displayedProject} isFixed={isFixed} displayedProject={displayedProject} />
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ProjectDescription;
