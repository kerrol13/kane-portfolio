import { motion, useInView } from "framer-motion";
import animationVariants from "../animation/animationVariants";
import WORK_EXP from "../data/WORK_EXP";
import { useRef } from "react";
const WorkExp = () => {
  const { containerVariants, normalVariant } = animationVariants(0.6);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-2  font-semibold space-y-4 col-start-2 overflow-hidden  "
    >
      <motion.p variants={normalVariant} className="col-span-full ">
        Work Experience
      </motion.p>
      {WORK_EXP.map((w) => (
        <motion.div
          variants={normalVariant}
          key={w.company + w.position}
          className=" col-span-full font-medium text-[clamp(.9rem,10vw,.7vw)] leading-[clamp(1.6rem,10vw,1.2vw)] normal-case  break-words"
        >
          <p>{`${w.position} - ${w.company}`}</p>
          <p className="font-light  ">{`${w.startDate} - ${w.endDate}`}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};
export default WorkExp;
