import React, { useState } from "react";
//components
import Kirpimas from "../components/kirpimas";
//mini api
import { kirpimai } from "../kirpimai";
//style
import "../styles/paslaugos.css";
const PaslaugosComp = () => {
  const [select, setSelect] = useState("both");

  const renderPaslaugos = () => {
    if (select === "both") {
      return kirpimai.map((kirpimas, index) => (
        <Kirpimas
          key={index} //XD ez
          img={kirpimas.img}
          kirpimas={kirpimas.kirpimas}
          tipas={kirpimas.tipas}
          kaina={kirpimas.kaina}
        />
      ));
    } else if (select === "men") {
      const kirpimaiF = kirpimai.filter(
        (kirpimas) => kirpimas.tipas === "Vyram"
      );
      return kirpimaiF.map((kirpimas, index) => (
        <Kirpimas
          key={index} //XD ez
          img={kirpimas.img}
          kirpimas={kirpimas.kirpimas}
          tipas={kirpimas.tipas}
          kaina={kirpimas.kaina}
        />
      ));
    } else if (select === "women") {
      const kirpimaiF = kirpimai.filter(
        (kirpimas) => kirpimas.tipas === "Moterim"
      );
      return kirpimaiF.map((kirpimas, index) => (
        <Kirpimas
          key={index} //XD ez
          img={kirpimas.img}
          kirpimas={kirpimas.kirpimas}
          tipas={kirpimas.tipas}
          kaina={kirpimas.kaina}
        />
      ));
    }
  };
  return (
    <React.Fragment>
      <div className="choose-who">
        <button
          onClick={() => {
            setSelect("men");
          }}
        >
          Vyram
        </button>

        <button
          onClick={() => {
            setSelect("both");
          }}
        >
          Abiem
        </button>

        <button
          onClick={() => {
            setSelect("women");
          }}
        >
          Moterim
        </button>
      </div>
      <div className="paslaugos">{renderPaslaugos()}</div>
    </React.Fragment>
  );
};

export default PaslaugosComp;
