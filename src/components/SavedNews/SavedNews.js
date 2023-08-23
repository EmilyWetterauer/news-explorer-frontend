import React from "react";

import "./SavedNews.css";

import NewsCard from "../NewsCard/NewsCard";

const SavedNews = ({
  searchResults,
  setSearchResults,
  isLoggedIn,
  USER,
  savedArticles,
  setSavedArticles,
  keyword,
}) => {
  return (
    <div className="savedNews__container">
      <div className="savedNews__newsCardsContainer">
        {savedArticles.map((result) => {
          return (
            <NewsCard
              isLoggedIn={isLoggedIn}
              setSearchResults={setSearchResults}
              card={result}
              key={result._id}
              isSaved={true}
              USER={USER}
              savedArticles={savedArticles}
              setSavedArticles={setSavedArticles}
              keyword={keyword}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SavedNews;
