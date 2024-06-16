import { motion } from "framer-motion";
import animationVariants from "../animation/animationVariants";

const HeroSecNamePosition = () => {
  const { variants, containerVariants, variantsSmallDevice } =
    animationVariants();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-[clamp(3.9rem,10vw,8vw)] xl:col-span-2 uppercase mt-0 3xl:-mt-[2.7vh] "
    >
      <div className="h-[clamp(3.5rem,10vw,8.8vw)] overflow-hidden">
        <motion.p variants={variants}>K. Angeles</motion.p>
      </div>
      <div className="h-[clamp(3.5rem,10vw,8.8vw)] overflow-hidden">
        <motion.p
          variants={variants}
          className="-translate-y-[clamp(1rem,5vw,2.5vw)]"
        >
          Portfolio.
        </motion.p>
      </div>
      <div className="h-[clamp(1.9rem,10vw,4.5vw)] overflow-hidden">
        <motion.h1
          variants={variantsSmallDevice}
          className="text-[clamp(2rem,10vw,4.07vw)] font-light text-zinc-500 ml-[clamp(0rem,2vw,.4vw)]"
        >
          Software Developer
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default HeroSecNamePosition;
