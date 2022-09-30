export const modalContentVariants = {
  initial: {
    y: "500px",
    transition: { type: "keyframes" },
  },
  animate: {
    y: 0,
    transition: { type: "keyframes" },
  },
  exit: {
    y: "500px",
    transition: { type: "keyframes" },
  },
};

export const modalVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterchildren",
      duration: 0.2,
    },
  },
};
