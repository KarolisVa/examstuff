import React from "react";
import { motion } from "framer-motion";
const ScrollArrow = () => {
  return (
    <motion.i
      whileHover={{ rotate: 180, transition: { duration: 0.5 } }}
      className="fas fa-arrow-circle-down fa-3x"
    ></motion.i>
  );
};
export default ScrollArrow;
