const animationVariants = (delay = 0) => {
  const transition = {
    type: "spring",
    stiffness: 100,
    damping: 25, // Adjusted damping to reduce bouncing effect
    duration: 1.5, // Transition duration in seconds
    ease: "easeInOut",
  };

  const createVariant = (hiddenY, visibleY, additionalTransition = {}) => ({
    hidden: { opacity: 0.001, y: hiddenY },
    visible: {
      opacity: 1,
      y: visibleY,
      transition: { ...transition, ...additionalTransition },
    },
    exit: {
      opacity: 0.001,
      transition: { ...transition, ...additionalTransition },
    },
  });

  return {
    variants: createVariant(5000, -22),
    variantsSmallDevice: createVariant(300, -10),
    normalVariant: createVariant(200, 0),
    opacityVariant: createVariant(100, 0, { delay }),
    projectImgVariant: createVariant(30, 0, { damping: 30, type: "tween" }),
    initialProjectImgVariant: createVariant(0, 0, {
      damping: 15,
      type: "tween",
      duration: 2,
    }),
    projectDescVartiant: createVariant(300, 0, { damping: 50 }),
    itemVariants: createVariant(0, 0, { duration: 0.5, type: "tween" }),
    containerVariants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delay,
        },
      },
    },
  };
};

export default animationVariants;
