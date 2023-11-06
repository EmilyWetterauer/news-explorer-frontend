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
    <section className="newsCardList">
      <h2 className="newsCardList__header">Search Results</h2>
      <ul className="newsCardList__newsCardsContainer">
        {searchResults.map((result, index) => {
          if (index >= cardsToShow) {
            return null;
          }
          const uniqueKey = result.source.id + result.url;
          return (
            <NewsCard
              card={result}
              key={uniqueKey}
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
      </ul>
      {cardsToShow < searchResults.length && (
        <button
          className="newsCardList__showMoreButton"
          onClick={handleShowMoreClick}
        >
          Show more
        </button>
      )}
    </section>
  );
};

export default NewsCardList;
