import React from "react";
//style
import "../styles/background.css";
//motion
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="background">
      <div className="background-box">
        <h1>Kirpėja, stilistė</h1>
        <h2>Diana</h2>
      </div>
      <motion.i
        onClick={() => {
          window.scrollTo(0, document.body.scrollHeight);
        }}
        whileHover={{ rotate: 180, transition: { duration: 0.5 } }}
        className="fas fa-arrow-circle-down fa-3x"
      ></motion.i>
    </div>
  );
};

export default Background;
