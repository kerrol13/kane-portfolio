import { motion } from "framer-motion";
import animationVariants from "../animation/animationVariants";
import Lenis from "lenis";

const TitleAndLinks = ({ title, anchor, delay, self, isOnclick }) => {
  const { containerVariants, opacityVariant } = animationVariants(delay);
  const lenis = new Lenis();
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={opacityVariant}>
        <p className="text-zinc-500 font-medium">{title}</p>
        {anchor.map((a) => (
          <div key={a.text} className="my-1.5">
            <a
              onClick={isOnclick ? lenis.scrollTo(a.href) : null}
              target={self ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="font-semibold"
              href={a.href}
            >
              {a.text}
            </a>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TitleAndLinks;
