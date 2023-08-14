import React from "react";

import "./SavedNewsHeader.css";

const SavedNewsHeader = ({ USER }) => {
  return (
    <div className="savedNewsHeader__container">
      <div className="savedNewsHeader__contentContainer">
        <p className="savedNewsHeader__title">Saved articles</p>
        <h1 className="savedNewsHeader__titleName">
          {USER.name}, you have 5 saved articles
        </h1>
        <p className="savedNewsHeader__keywordsText">
          By keywords: Nature, Yellowstone, and 2 others
        </p>
      </div>
    </div>
  );
};

export default SavedNewsHeader;
