import React from "react";

import "./SavedNewsHeader.css";

const SavedNewsHeader = ({ USER, keyword, savedArticles }) => {
  const getKeywords = () => {
    const keywords = savedArticles.map((currentArticle) => {
      return currentArticle.keyword;
    });
    console.log(keywords);
    const uniqueKeywords = Object.values(new Set(keywords));
    const plural = keywords.length - 2 > 1 ? "s" : "";
    console.log(uniqueKeywords);
    return keywords.length > 2
      ? keywords.slice(0, 2).join(", ") +
          ` and ${keywords.length - 2} other${plural}`
      : keywords.join(", ");
  };

  return (
    <div className="savedNewsHeader__container">
      <div className="savedNewsHeader__contentContainer">
        <p className="savedNewsHeader__title">Saved articles</p>
        <h1 className="savedNewsHeader__titleName">
          {USER.name}, you have 5 saved articles
        </h1>
        <p className="savedNewsHeader__keywordsText">
          By keywords: {getKeywords()}
        </p>
      </div>
    </div>
  );
};

export default SavedNewsHeader;
