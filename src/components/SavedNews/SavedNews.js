import React from "react";

import "./SavedNews.css";

import NewsCard from "../NewsCard/NewsCard";

const SavedNews = ({ searchResults, setSearchResults, isLoggedIn, USER }) => {
  return (
    <div className="savedNews__container">
      <div className="savedNews__newsCardsContainer">
        {searchResults
          .filter((result) => {
            if (result.likes.includes(USER._id)) {
              return true;
            }
          })
          .map((result) => {
            return (
              <NewsCard
                isLoggedIn={isLoggedIn}
                setSearchResults={setSearchResults}
                result={result}
                key={result._id}
                isSaved={true}
                USER={USER}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SavedNews;
