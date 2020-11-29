import React from "react";
import { motion } from "framer-motion";

const scissors = {
  hidden: {
    rotateZ: 270,
    y: 125,
  },
  visible: {
    rotateZ: 270,
    y: 0,
    transition: { duration: 3 },
  },
};

const Scissors = () => {
  return (
    <motion.i
      className="fas fa-cut fa-2x"
      variants={scissors}
      initial="hidden"
      animate="visible"
    ></motion.i>
  );
};

export default Scissors;
