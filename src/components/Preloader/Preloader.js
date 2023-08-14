import React from "react";

import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader__container">
      <div className="preloader__contentContainer">
        <div className="preloader__circle-preloader"></div>
        <div className="preloader__text">Searching for news...</div>
      </div>
    </div>
  );
};

export default Preloader;
