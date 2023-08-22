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
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isLiked = savedArticles.some((article) => {
    return article.title === card.title;
  });
  const handleSaveClick = () => {
    if (isLoggedIn) {
      if (!isLiked) {
        setSavedArticles((prevSavedArticles) => {
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
        <img className="newsCard__image" src={card.urlToImage}></img>
      </div>
      <div className="newsCard__textContainer">
        <p
          className="newsCard__dateText"
          type="text"
          //   value={searchResults.date}
        >
          {formattedDate}
        </p>

        <h2
          className="newsCard__headerText"
          type="text"
          //   value={searchResults.title}
        >
          {card.title}
        </h2>
        <p
          className="newsCard__paragraphText"
          type="text"
          //   value={searchResults.content}
        >
          {card.description}
        </p>
        <p
          className="newsCard__footerText"
          type="text"
          //   value={searchResults.tags}
          // value={card.source.name}
        >
          {card.source.name}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
