import React, { useState } from "react";

import "./NewsCardList.css";

import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = ({
  searchResults,
  handleSignInButtonClick,
  isLoggedIn,
  setSearchResults,
  USER,
}) => {
  const [showAllCards, setShowAllCards] = useState(false);

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  };

  const buttonText = showAllCards ? "Show less" : "Show more";

  return (
    <div className="newsCardList__container">
      <p className="newsCardList__header">Search Results</p>
      <div className="newsCardList__newsCardsContainer">
        {searchResults.map((result, index) => {
          if (!showAllCards && index >= 3) {
            return null;
          }
          return (
            <NewsCard
              result={result}
              key={result.id}
              isLoggedIn={isLoggedIn}
              setSearchResults={setSearchResults}
              handleSignInButtonClick={handleSignInButtonClick}
              USER={USER}
            />
          );
        })}
      </div>
      <button
        className="newsCardList__showMoreButton"
        onClick={toggleShowAllCards}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default NewsCardList;
