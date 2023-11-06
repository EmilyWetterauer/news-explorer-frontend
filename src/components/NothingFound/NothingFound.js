import React from "react";

import "./NothingFound.css";

import imageNotFoundFrowningFace from "../../images/not-found_v1.svg";

const NothingFound = () => {
  return (
    <div className="nothingFound">
      <div className="nothingFound__contentContainer">
        <img
          className="nothingFound__image"
          src={imageNotFoundFrowningFace}
          alt="Frowning Face"
        ></img>
        <h1 className="nothingFound__header">Nothing found</h1>
        <p className="nothingFound__paragraphText">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </div>
  );
};

export default NothingFound;
