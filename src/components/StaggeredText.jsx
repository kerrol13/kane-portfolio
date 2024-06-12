import React from "react";
import { motion } from "framer-motion";

// Define variants for the letters
const letterVariants = {
  hidden: { y: 10 },
  visible: { y: 0 },
};

// Define the container variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const StaggeredText = ({ text }) => {
  return (
    <motion.div
      variants={containerVariants}
      className="flex h-4 overflow-hidden"
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default StaggeredText;
