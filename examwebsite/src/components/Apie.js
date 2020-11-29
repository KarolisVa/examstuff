import React from "react";
import "../styles/Apie.css";
import { ApieInfo } from "../ApieInfo";
import { motion } from "framer-motion";
const Apie = () => {
  return (
    <div className="apie">
      <h1>Apie mane</h1>
      <motion.div
        whileHover={{ scale: 1.2, transition: { duration: 1 } }}
        className="person-box"
      ></motion.div>
      <div className="info-box">
        {ApieInfo.map((item, index) => {
          return (
            <div key={index} className="text-box">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Apie;
