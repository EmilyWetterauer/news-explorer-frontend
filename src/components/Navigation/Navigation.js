import React from "react";

import "./Navigation.css";

import { Link, useLocation } from "react-router-dom";

import homeNewsIcon from "../../images/Union.svg";

import savedNewsIcon from "../../images/logout.svg";

const Navigation = ({ isLoggedIn, handleSignInButtonClick, handleLogout }) => {
  const location = useLocation();

  const isSavedNews = location.pathname === "/saved-news";

  const header__homeClassName = isSavedNews
    ? "header__homeSavedNews"
    : "header__home";

  const header__profileButtonClassName = isSavedNews
    ? "header__profileButtonSavedNews"
    : "header__profileButton";

  const header__profileButtonTextClassName = isSavedNews
    ? "header__profileButtonTextSavedNews"
    : "header__profileButtonText";

  const header__savedArticlesClassName = isSavedNews
    ? "header__savedArticlesSavedNews"
    : "header__savedArticles";

  const renderAuthorizedUsers = () => {
    const iconSrc = isSavedNews ? homeNewsIcon : savedNewsIcon;

    return (
      <>
        <Link to="/" className="homepageLinkHome">
          <p className={header__homeClassName}>Home</p>
        </Link>
        <Link to="/saved-news" className="savedNewsLinkSavedArticles">
          <p className={header__savedArticlesClassName}>Saved Articles</p>
        </Link>
        <Link to="/">
          <button
            className={header__profileButtonClassName}
            onClick={handleLogout}
          >
            <span className={header__profileButtonTextClassName}>Emma</span>
            <span className="header__profileButtonIcon">
              <img src={iconSrc} alt="arrowImage" />
            </span>
          </button>
        </Link>
      </>
    );
  };

  const renderNonAuthorizedUsers = () => {
    return (
      <>
        <p className="header__home">Home</p>
        <button
          className="header__signInButton"
          onClick={handleSignInButtonClick}
        >
          <span className="header__signInButtonText">Sign In</span>
        </button>
      </>
    );
  };

  return (
    <>{isLoggedIn ? renderAuthorizedUsers() : renderNonAuthorizedUsers()}</>
  );
};

export default Navigation;
