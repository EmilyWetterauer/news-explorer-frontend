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
    <section className="savedNews">
      <ul className="savedNews__newsCardsContainer">
        {savedArticles.map((result) => {
          const uniqueKey = result.source._id + result.url;

          return (
            <NewsCard
              isLoggedIn={isLoggedIn}
              setSearchResults={setSearchResults}
              card={result}
              key={uniqueKey}
              isSaved={true}
              USER={USER}
              savedArticles={savedArticles}
              setSavedArticles={setSavedArticles}
              keyword={keyword}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default SavedNews;
