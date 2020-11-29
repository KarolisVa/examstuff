import React from "react";
//components
import Navbar from "../components/Navbar";
import PaslaugosComp from "../components/PaslaugosComp";
//style
import "../styles/paslaugos.css";
const Paslaugos = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="box-shadow-paslaugos">
        <PaslaugosComp />
      </div>
    </React.Fragment>
  );
};

export default Paslaugos;
