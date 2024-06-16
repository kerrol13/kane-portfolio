import { motion, useInView } from "framer-motion";
import animationVariants from "../animation/animationVariants";
import { useRef } from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "./icons/ArrowIcon";
import PROJECT_INFO from "../data/PROJECT_INFO";

const allProjectNames = PROJECT_INFO.map((p) => p.title).join(", ");
const ProjectList = () => {
  const { containerVariants, normalVariant } = animationVariants(0.5);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-2  font-semibold space-y-4 col-start-2   "
    >
      <motion.p variants={normalVariant} className="col-span-full">
        Projects
      </motion.p>
      <motion.ul
        variants={normalVariant}
        className="col-span-full text-[clamp(.9rem,10vw,.7vw)] font-light italic leading-[clamp(1.6rem,10vw,1.2vw)] normal-case space-y-3  break-words"
      >
        {allProjectNames}.
      </motion.ul>
      <Link
        to="/projects"
        className=" whitespace-nowrap min-w-[185px] underline-offset-4 flex items-center gap-x-2 underline font-semibold text-[clamp(1rem,2vw,.8vw)] "
      >
        View All Projects <ArrowIcon rotate={180} color="#27272a" />
      </Link>
    </motion.div>
  );
};
export default ProjectList;
