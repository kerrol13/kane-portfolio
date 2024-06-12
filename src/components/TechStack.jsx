import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import animationVariants from "../animation/animationVariants";
import TECH_STACK from "../data/TECH_STACK";

const TechStack = () => {
  const { containerVariants, normalVariant } = animationVariants(0.6);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-2 font-semibold space-y-4 col-start-2 overflow-hidden"
    >
      <motion.p variants={normalVariant} className="col-span-full">
        Tech Stack
      </motion.p>
      <div className="col-span-full lg:col-span-2 text-[clamp(.9rem,10vw,.7vw)] leading-[clamp(1.6rem,10vw,1.2vw)] normal-case whitespace-nowrap">
        <div className="flex gap-5 flex-wrap text-[clamp(.7rem,10vw,.5vw)] font-medium">
          {TECH_STACK.map((tech) => (
            <motion.div
              key={tech.name}
              variants={normalVariant}
              className="flex flex-col items-center"
            >
              {tech.icon}
              <p>{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechStack;
