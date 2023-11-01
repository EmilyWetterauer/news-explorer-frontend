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

  const navigationHeader__homeClassName = isSavedNews
    ? "navigationHeader__homeSavedNews"
    : "navigationHeader__home";

  const navigationHeader__profileButtonClassName = isSavedNews
    ? "navigationHeader__profileButtonSavedNews"
    : "navigationHeader__profileButton";

  const navigationHeader__profileButtonTextClassName = isSavedNews
    ? "navigationHeader__profileButtonTextSavedNews"
    : "navigationHeader__profileButtonText";

  const navigationHeader__savedArticlesClassName = isSavedNews
    ? "navigationHeader__savedArticlesSavedNews"
    : "navigationHeader__savedArticles";

  const renderAuthorizedUsers = () => {
    const iconSrc = isSavedNews ? homeNewsIcon : savedNewsIcon;

    return screenWidth > 498 ? (
      <>
        <Link to="/" className={navigationHeader__homeClassName}>
          Home
        </Link>
        <Link
          to="/saved-news"
          className={navigationHeader__savedArticlesClassName}
        >
          Saved Articles
        </Link>
        <Link to="/">
          <button
            className={navigationHeader__profileButtonClassName}
            onClick={handleLogout}
          >
            <span className={navigationHeader__profileButtonTextClassName}>
              Emma
            </span>
            <span className="navigationHeader__profileButtonIcon">
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
          className="navigationHeader__hamburgerIcon"
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
        <Link to="/" className={navigationHeader__homeClassName}>
          Home
        </Link>
        <button
          className="navigationHeader__signInButton"
          onClick={handleSignInButtonClick}
        >
          <span className="navigationHeader__signInButtonText">Sign In</span>
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
