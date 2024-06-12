import { motion } from "framer-motion";
import animationVariants from "../animation/animationVariants";
import { useState } from "react";

const AboutMe = ({ delay, data }) => {
  const { opacityVariant } = animationVariants(delay);
  const [isSeeMore, setSeeMore] = useState();
  const handleSeeMore = () => {
    setSeeMore((prev) => !prev);
  };
  return (
    <>
      <motion.span
        variants={opacityVariant}
        className="flex  flex-col lg:justify-start  justify-center md:justify-start mr-8"
      >
        <p
          className={`${
            isSeeMore ? "" : "line-clamp-3"
          } 3xl:line-clamp-none text-[clamp(.9rem,10vw,.7vw)] font-light italic leading-[clamp(1.6rem,10vw,1.2vw)]`}
        >
          {data}
        </p>
        <div>
          <button
            onClick={handleSeeMore}
            className={`${
              isSeeMore ? "hidden" : ""
            } 3xl:hidden text-left  underline underline-offset-4 text-[clamp(.8rem,10vw,.7vw)]`}
          >
            see more
          </button>
        </div>
      </motion.span>
    </>
  );
};
export default AboutMe;
