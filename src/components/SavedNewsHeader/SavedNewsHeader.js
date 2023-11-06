import React from "react";

import { useLocation } from "react-router-dom";

import "./SavedNewsHeader.css";

const SavedNewsHeader = ({ USER, keyword, savedArticles }) => {
  const getKeywords = () => {
    const keywords = savedArticles.map((currentArticle) => {
      return currentArticle.keyword;
    });
    console.log({ keywords });
    const keywordSet = new Set(keywords);
    console.log({ keywordSet });
    const uniqueKeywords = [...keywordSet];
    const plural = keywords.length - 2 > 1 ? "s" : "";
    console.log({ uniqueKeywords });
    return uniqueKeywords.length > 2
      ? uniqueKeywords.slice(0, 2).join(", ") +
          ` and ${uniqueKeywords.length - 2} other${plural}`
      : uniqueKeywords.join(", ");
  };

  const location = useLocation();

  const isSavedNews = location.pathname === "/saved-news";

  const renderSavedNewsHeader = () => {
    return (
      <section className="savedNewsHeader">
        <div className="savedNewsHeader__contentContainer">
          <p className="savedNewsHeader__title">Saved articles</p>
          <h1 className="savedNewsHeader__titleName">
            {USER.name}, you have {savedArticles.length} saved articles
          </h1>
          <p className="savedNewsHeader__keywordsText">
            By keywords: {getKeywords()}
          </p>
        </div>
      </section>
    );
  };

  return <>{isSavedNews ? renderSavedNewsHeader() : null}</>;
};

export default SavedNewsHeader;
