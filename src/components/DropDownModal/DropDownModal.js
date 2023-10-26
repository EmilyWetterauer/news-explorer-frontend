import React from "react";

import { Link, useLocation } from "react-router-dom";

import closeButton from "../../images/close.svg";

import homeNewsIcon from "../../images/Union.svg";

import savedNewsIcon from "../../images/logout.svg";

import "./DropDownModal.css";

const DropDownModal = ({
  onClose,
  handleSignInButtonClick,
  isLoggedIn,
  handleLogout,
  handleSavedArticlesClick,
  screenWidth,
}) => {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";
  const dropDownModal__homeClassName = isSavedNews
    ? "dropDownModal__homeSavedNews"
    : "dropDownModal__homeLoggedIn";

  const dropDownModal__savedArticlesClassName = isSavedNews
    ? "dropDownModal__savedArticlesSavedNews"
    : "dropDownModal__savedArticles";

  const dropDownModal__profileButtonClassName = isSavedNews
    ? "dropDownModal__profileButtonSavedNews"
    : "dropDownModal__profileButton";

  console.log(dropDownModal__profileButtonClassName);

  const dropDownModal__profileButtonTextClassName = isSavedNews
    ? "dropDownModal__profileButtonTextSavedNews"
    : "dropDownModal__profileButtonText";

  const iconSrc =
    isSavedNews && screenWidth > 620 ? homeNewsIcon : savedNewsIcon;

  return isLoggedIn ? (
    <div className="dropDownModal__wrapper" onClick={onClose}>
      <div className="dropDownModal__container">
        <div className="dropDownModal__header">
          <Link to="/" className="dropDownModal__logoLink">
            <p className="dropDownModal__newsExplorer" onClick={onClose}>
              NewsExplorer
            </p>
          </Link>
          <img
            className="dropDownModal__closeButton"
            src={closeButton}
            onClick={onClose}
            alt="close button"
          ></img>
        </div>
        <Link to="/" className="dropDownModal__homeLinkLoggedIn">
          <p className={dropDownModal__homeClassName} onClick={onClose}>
            Home
          </p>
        </Link>
        <Link
          to="/saved-news"
          className="savedNewsLinkSavedArticles"
          onClick={handleSavedArticlesClick}
        >
          <p className={dropDownModal__savedArticlesClassName}>
            Saved Articles
          </p>
        </Link>
        <Link to="/" className="dropDownModal__buttonLink">
          <button
            className={dropDownModal__profileButtonClassName}
            onClick={handleLogout}
          >
            <span className={dropDownModal__profileButtonTextClassName}>
              Emma
            </span>
            <span className="dropDownModal__profileButtonIcon">
              <img src={iconSrc} alt="arrowImage" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="dropDownModal__wrapper" onClick={onClose}>
      <div className="dropDownModal__container">
        <div className="dropDownModal__header">
          <p className="dropDownModal__newsExplorer">NewsExplorer</p>
          <img
            className="dropDownModal__closeButton"
            src={closeButton}
            onClick={onClose}
            alt="close button"
          ></img>
        </div>
        <div className="dropDownModal__body">
          <p className="dropDownModal__home" onClick={onClose}>
            Home
          </p>
          <button
            className="dropDownModal__signInButton"
            onClick={handleSignInButtonClick}
          >
            <span className="dropDownModal__signInButtonText">Sign In</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropDownModal;
