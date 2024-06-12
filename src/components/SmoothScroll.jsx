import React, { useRef, useState, useCallback, useLayoutEffect, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { useScroll, useTransform, useSpring, motion, animate } from "framer-motion";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback(() => {
    if (scrollRef.current) {
      setPageHeight(scrollRef.current.scrollHeight);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(resizePageHeight);
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [resizePageHeight]);

  useEffect(() => {
    resizePageHeight();
  }, [children, resizePageHeight]);

  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const spring = useSpring(transform, { damping: 110, mass: 0.27, stiffness: 700 });

  const scrollToTarget = (target) => {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      animate(scrollY, targetPosition, { damping: 110, mass: 0.27, stiffness: 700 }).then(() => {
        window.scrollTo(0, targetPosition);
      });
    }
  };

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        scrollToTarget(href);
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className="will-change-transform overflow-hidden w-full fixed top-0 left-0"
      >
        {children}
      </motion.div>
      <div style={{ height: `${pageHeight-31}px` }} />
    </>
  );
};

export default SmoothScroll;
