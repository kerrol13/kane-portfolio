import { motion } from "framer-motion";
import animationVariants from "../animation/animationVariants";
import myPhoto from "../assets/images/small_me.webp";
import AboutMe from "./AboutMe";
import ABOUT_ME from "../data/ABOUT_ME";

const HeroSecAboutMe = () => {
  const { containerVariants, opacityVariant } = animationVariants(1);

  return (
    <motion.div
      id="aboutMe"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="lg:h-[32vh] grid md:grid-rows-2 md:gap-y-5  md:grid-cols-2 grid-rows-3 mb-5"
    >
      <div className="md:col-span-2 overflow-hidden ">
        <motion.img
          variants={opacityVariant}
          className=" bg-zinc-200 h-[clamp(8rem,17vh,17vh)] "
          src={myPhoto}
          alt="Kane Errol Photo"
          width="auto"
          height="auto"
          title="Kane Errol Photo"
          loading="lazy"
        />
      </div>
      {ABOUT_ME.map((a, index) => (
        <AboutMe key={index} data={a} delay={1.1 + index / 5} />
      ))}
    </motion.div>
  );
};
export default HeroSecAboutMe;
