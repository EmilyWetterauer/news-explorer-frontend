import React, { useState } from "react";

import "./NewsCard.css";

const NewsCard = ({
  card,
  isLoggedIn,
  setSearchResults,
  USER,
  handleSignInButtonClick,
  isSaved,
  savedArticles,
  setSavedArticles,
  keyword,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [leaveTimer, setLeaveTimer] = useState(null);

  const isLiked = savedArticles.some((article) => {
    return article.title === card.title;
  });
  const handleSaveClick = () => {
    if (isLoggedIn) {
      if (!isLiked) {
        console.log(card);
        setSavedArticles((prevSavedArticles) => {
          card.keyword = keyword;
          return [...prevSavedArticles, card];
        });
      } else {
        setSavedArticles((prevSavedArticles) => {
          const updatedSavedArticles = prevSavedArticles.slice();
          console.log({ updatedSavedArticles });
          return updatedSavedArticles.filter((currentArticle) => {
            console.log({ currentArticle, card });
            console.log(currentArticle.title === card.title);
            return currentArticle.title !== card.title;
          });
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

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(card.publishedAt).toLocaleDateString(
    undefined,
    options
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="newsCard__cardContainer">
      <div
        className="newsCard__imageContainer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isLoggedIn && isSaved && (
          <div className="newsCard__keywordLabel">
            <p className="newsCard__keywordLableText">{card.keyword}</p>
          </div>
        )}
        <div className="newsCard__imageSaveButtonContainer">
          <div
            className={newsCard__imageSaveButtonClassName}
            onClick={handleSaveClick}
          >
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
        </div>
        <img className="newsCard__image" src={card.urlToImage}></img>
      </div>
      <div className="newsCard__textContainer">
        <p className="newsCard__dateText" type="text">
          {formattedDate}
        </p>

        <h2 className="newsCard__headerText" type="text">
          {card.title}
        </h2>
        <p className="newsCard__paragraphText" type="text">
          {card.description}
        </p>
        <p className="newsCard__footerText" type="text">
          {card.source.name.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
