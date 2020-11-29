import React from "react";

const Kirpimas = ({ kirpimas, img, tipas, kaina }) => {
  return (
    <div className="paslaugos-box">
      <img className="image" src={img} alt="nuotrauka pabego :(" />
      <h1>{kirpimas}</h1>
      <h2>{tipas}</h2>
      <h3>{kaina}</h3>
    </div>
  );
};

export default Kirpimas;
