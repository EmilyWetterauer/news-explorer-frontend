import React, { useState } from "react";

import "./NewsCard.css";

const NewsCard = ({
  result,
  isLoggedIn,
  setSearchResults,
  USER,
  handleSignInButtonClick,
  isSaved,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isLiked = result.likes.includes(USER._id);
  const handleSaveClick = () => {
    console.log({ isLoggedIn });
    if (isLoggedIn) {
      console.log({ isNotLiked: !isLiked });
      if (!isLiked) {
        setSearchResults((prevSearchResults) => {
          const updatedSearchResults = prevSearchResults.slice();
          updatedSearchResults.forEach((currentResult) => {
            if (currentResult._id === result._id) {
              currentResult.likes.push(USER._id);
            }
          });
          console.log({ prevSearchResults });
          return updatedSearchResults;
        });
      } else {
        setSearchResults((prevSearchResults) => {
          const updatedSearchResults = prevSearchResults.slice();
          updatedSearchResults.forEach((currentResult) => {
            if (currentResult._id === result._id) {
              currentResult.likes = currentResult.likes.filter((currentId) => {
                return currentId !== USER._id;
              });
            }
          });
          console.log({ prevSearchResults });
          return updatedSearchResults;
        });
      }
    }
  };

  let newsCard__imageSaveButtonClassName = "newsCard__imageSaveButton";
  if (isLiked) {
    newsCard__imageSaveButtonClassName = "newsCard__imageSaveButtonIsLiked";
  }

  if (isSaved) {
    newsCard__imageSaveButtonClassName = "newsCard__imageTrashCanButton";
  }

  return (
    <div className="newsCard__cardContainer">
      <div className="newsCard__imageContainer">
        {isLoggedIn && isSaved && (
          <div className="newsCard__keywordLabel">
            <p className="newsCard__keywordLableText">Nature</p>
          </div>
        )}
        <div
          className="newsCard__imageSaveButtonContainer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={newsCard__imageSaveButtonClassName}
            onClick={handleSaveClick}
          ></div>

          {!isLoggedIn && isHovered && (
            <button
              className="newsCardList__signInButton"
              onClick={handleSignInButtonClick}
            >
              Sign in to save articles
            </button>
          )}
          {isLoggedIn && isSaved && isHovered && (
            <button
              className="newsCardList__signInButton"
              onClick={handleSaveClick}
            >
              Remove from saved
            </button>
          )}
        </div>
        <div className="newsCard__image" src={result.image}></div>
      </div>
      <div className="newsCard__textContainer">
        <p
          className="newsCard__dateText"
          type="text"
          //   value={searchResults.date}
        >
          {result.date}
        </p>

        <h2
          className="newsCard__headerText"
          type="text"
          //   value={searchResults.title}
        >
          {result.title}
        </h2>
        <p
          className="newsCard__paragraphText"
          type="text"
          //   value={searchResults.content}
        >
          {result.content}
        </p>
        <p
          className="newsCard__footerText"
          type="text"
          //   value={searchResults.tags}
        >
          {result.tags}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
