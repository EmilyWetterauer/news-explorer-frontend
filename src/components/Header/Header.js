import React from "react";

import "./Header.css";

import { Link, useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

const Header = ({ handleSignInButtonClick, isLoggedIn, handleLogout }) => {
  const location = useLocation();

  const isSavedNews = location.pathname === "/saved-news";

  const header__titleClassName = isSavedNews
    ? "header__titleSavedNews"
    : "header__title";

  return (
    <header className="header__container">
      <div className="header__leftSideContainer">
        <Link to="/" className="homepageLinkNewsExplorer">
          <p className={header__titleClassName}>NewsExplorer</p>
        </Link>
      </div>
      <div className="header__rightSideContainer">
        <Navigation
          handleSignInButtonClick={handleSignInButtonClick}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
      </div>
    </header>
  );
};

export default Header;
