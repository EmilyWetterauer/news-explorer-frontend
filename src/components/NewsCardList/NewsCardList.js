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
      <h2 className="newsCardList__header">Search Results</h2>
      <ul className="newsCardList__newsCardsContainer">
        {searchResults.map((result, index) => {
          if (index >= cardsToShow) {
            return null;
          }
          const uniqueKey = result.source.id + result.url;
          return (
            <li className="newsCardList__newsCardListItem">
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
            </li>
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
    </div>
  );
};

export default NewsCardList;
