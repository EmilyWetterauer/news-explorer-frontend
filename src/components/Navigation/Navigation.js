import React from "react";

import "./Navigation.css";

import { Link, useLocation } from "react-router-dom";

import homeNewsIcon from "../../images/Union.svg";

import savedNewsIcon from "../../images/logout.svg";

import hamburgerIconWhite from "../../images/hamburgerIconWhite.svg";

import hamburgerIconBlack from "../../images/hamburgerIconBlack.svg";

import closeButton from "../../images/close.svg";

const Navigation = ({
  isLoggedIn,
  handleSignInButtonClick,
  handleLogout,
  showDropDown,
  setShowDropDown,
  handleDropDownClick,
  activeModal,
  screenWidth,
}) => {
  const location = useLocation();

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  const isSavedNews = location.pathname === "/saved-news";

  const navigation__homeClassName = isSavedNews
    ? "navigation__homeSavedNews"
    : "navigation__home";

  const navigation__profileButtonClassName = isSavedNews
    ? "navigation__profileButtonSavedNews"
    : "navigation__profileButton";

  const navigation__profileButtonTextClassName = isSavedNews
    ? "navigation__profileButtonTextSavedNews"
    : "navigation__profileButtonText";

  const navigation__savedArticlesClassName = isSavedNews
    ? "navigation__savedArticlesSavedNews"
    : "navigation__savedArticles";

  const renderAuthorizedUsers = () => {
    const iconSrc = isSavedNews ? homeNewsIcon : savedNewsIcon;

    return screenWidth > 498 ? (
      <>
        <Link to="/" className={navigation__homeClassName}>
          Home
        </Link>
        <Link to="/saved-news" className={navigation__savedArticlesClassName}>
          Saved Articles
        </Link>
        <Link to="/">
          <button
            className={navigation__profileButtonClassName}
            onClick={handleLogout}
          >
            <span className={navigation__profileButtonTextClassName}>Emma</span>
            <span className="navigation__profileButtonIcon">
              <img src={iconSrc} alt="arrowImage" />
            </span>
          </button>
        </Link>
      </>
    ) : (
      renderDropDownButton()
    );
  };

  const renderDropDownButton = () => {
    return showDropDown ? (
      <div>
        <button onClick={handleClick} src={closeButton} alt="Close Button" />
      </div>
    ) : activeModal !== "signIn" &&
      activeModal !== "register" &&
      activeModal !== "registerSuccess" ? (
      <div>
        <img
          className="navigation__hamburgerIcon"
          onClick={handleDropDownClick}
          src={isSavedNews ? hamburgerIconBlack : hamburgerIconWhite}
          alt="Drop Down Button"
        />
      </div>
    ) : null;
  };

  const renderNonAuthorizedUsers = () => {
    return screenWidth > 498 ? (
      <>
        <Link to="/" className={navigation__homeClassName}>
          Home
        </Link>
        <button
          className="navigation__signInButton"
          onClick={handleSignInButtonClick}
        >
          <span className="navigation__signInButtonText">Sign In</span>
        </button>
      </>
    ) : (
      renderDropDownButton()
    );
  };

  return (
    <>{isLoggedIn ? renderAuthorizedUsers() : renderNonAuthorizedUsers()}</>
  );
};

export default Navigation;
