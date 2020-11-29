import React from "react";
import { motion } from "framer-motion";

const BarLeft = ({ delay }) => {
  const svgVariants = {
    hidden: {
      width: 50.5 + "%",
    },
    visible: {
      width: 0,
      transition: { duration: 2, delay: delay },
    },
  };

  return (
    <motion.div
      variants={svgVariants}
      initial="hidden"
      animate="visible"
      className="BarLeft"
    ></motion.div>
  );
};

export default BarLeft;
