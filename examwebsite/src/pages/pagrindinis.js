import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Background from "../components/background";
import Apie from "../components/Apie";
const pagrindinis = () => {
  //scroll

  return (
    <React.Fragment>
      <Navbar />
      <div className="box-shadow">
        <Background />
      </div>
      <Apie />
    </React.Fragment>
  );
};

export default pagrindinis;
