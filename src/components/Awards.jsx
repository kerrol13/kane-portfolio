import AWARDS from "../data/AWARDS";
import { motion, useInView } from "framer-motion";
import animationVariants from "../animation/animationVariants";
import { useRef } from "react";
const Awards = () => {
  const { containerVariants, normalVariant } = animationVariants(0.6);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-2  font-semibold space-y-3 col-start-2 overflow-hidden"
    >
      <motion.p variants={normalVariant} className="col-span-full">
        Awards
      </motion.p>

      {AWARDS.map((a) => (
        <motion.div
          variants={normalVariant}
          key={a.title + a.organisation}
          className="col-span-full font-medium text-[clamp(.9rem,10vw,.7vw)] leading-[clamp(1.6rem,10vw,1.2vw)] normal-case  break-words"
        >
          <p>{`${a.title} - ${a.organisation}`}</p>
          <p className="font-light  ">{a.date}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};
export default Awards;
