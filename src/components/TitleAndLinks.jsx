import { motion } from "framer-motion";
import animationVariants from "../animation/animationVariants";

const TitleAndLinks = ({ title, anchor, delay, self }) => {
  const { containerVariants, opacityVariant } = animationVariants(delay);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={opacityVariant}>
        <p className="text-zinc-400 font-medium">{title}</p>
        {anchor.map((a) => (
          <div key={a.text} className="my-1.5">
            <a
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
