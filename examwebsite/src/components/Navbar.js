import React, { useState } from "react";
import { Link } from "react-router-dom";
//style
import "../styles/Navbar.css";
//components
import BarLeft from "../animations/barLeft";
import Scissors from "../animations/scissors";
import { motion } from "framer-motion";
import { MenuItems } from "../MenuItems";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <BarLeft delay={1.6} />
      <BarLeft delay={0.8} />
      <BarLeft delay={0} />

      <BarLeft delay={1.6} />
      <BarLeft delay={0.8} />
      <BarLeft delay={0} />
      <Scissors />

      <div className="logo">HAIR SALON</div>
      <ul style={{ transform: open ? "translate(-8px)" : "" }}>
        {MenuItems.map((item, index) => {
          return (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 4 } }}
              key={index}
              className={item.name}
            >
              <Link to={item.url}>{item.title}</Link>
            </motion.li>
          );
        })}
      </ul>
      <i onClick={() => setOpen(!open)} className="fas fa-bars fa-2x"></i>
    </nav>
  );
};
export default Navbar;

// const [width, setWidth] = useState(window.innerWidth);

// useEffect(() => {
//   function handleResize() {
//     setWidth(window.innerWidth);
//   }
//   window.addEventListener("resize", handleResize);
//   console.log(width);
// });

// const hamburger = () => {
//   console.log("boom");
// };
