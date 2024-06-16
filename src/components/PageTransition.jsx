import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransition = () => {
  const { pathname } = useLocation();
  const bgColor = pathname === "/" ? "bg-zinc-900" : "bg-white";
  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.9 }}
        className={`h-screen z-50 fixed w-screen origin-top ${bgColor}`}
      ></motion.div>
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className={`h-screen z-50 fixed w-screen origin-top ${bgColor}`}
      ></motion.div>
    </>
  );
};

export default PageTransition;
