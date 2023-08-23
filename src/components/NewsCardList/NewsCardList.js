import React, { useState } from "react";

import "./NewsCardList.css";

import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = ({
  searchResults,
  handleSignInButtonClick,
  isLoggedIn,
  setSearchResults,
  USER,
  savedArticles,
  setSavedArticles,
  keyword,
}) => {
  const [cardsToShow, setCardsToShow] = useState(3);

  const cardsToShowIncrement = 3;

  const handleShowMoreClick = () => {
    setCardsToShow(cardsToShow + cardsToShowIncrement);
  };

  return (
    <div className="newsCardList__container">
      <p className="newsCardList__header">Search Results</p>
      <div className="newsCardList__newsCardsContainer">
        {searchResults.map((result, index) => {
          if (index >= cardsToShow) {
            return null;
          }
          return (
            <NewsCard
              card={result}
              key={result.id}
              isLoggedIn={isLoggedIn}
              setSearchResults={setSearchResults}
              handleSignInButtonClick={handleSignInButtonClick}
              USER={USER}
              savedArticles={savedArticles}
              setSavedArticles={setSavedArticles}
              keyword={keyword}
            />
          );
        })}
      </div>
      {cardsToShow < searchResults.length && (
        <button
          className="newsCardList__showMoreButton"
          onClick={handleShowMoreClick}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default NewsCardList;
