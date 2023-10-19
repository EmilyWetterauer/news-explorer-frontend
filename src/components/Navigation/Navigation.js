import React, { useState, useEffect } from "react";

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

    return screenWidth > 320 ? (
      <>
        <Link to="/" className="homepageLinkHome">
          <p className={navigationHeader__homeClassName}>Home</p>
        </Link>
        <Link
          to="/saved-news"
          className={navigationHeader__savedArticlesClassName}
        >
          <p>Saved Articles</p>
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
        <img onClick={handleClick} src={closeButton} alt="Close Button" />
      </div>
    ) : activeModal !== "signIn" && activeModal !== "register" ? (
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
    return screenWidth > 320 ? (
      <>
        <p className="navigationHeader__home">Home</p>
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
