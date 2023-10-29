import React from "react";

import "./Header.css";

import { Link, useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

const Header = ({
  handleSignInButtonClick,
  isLoggedIn,
  handleLogout,
  handleDropDownClick,
  activeModal,
  showDropDown,
  setShowDropDown,
  screenWidth,
}) => {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  const header__titleClassName = isSavedNews
    ? "header__titleSavedNews"
    : "header__title";

  const header__titleClassName_hide =
    activeModal === "signIn" ||
    activeModal === "register" ||
    activeModal === "registerSuccess"
      ? `${header__titleClassName} header_title_hide`
      : `${header__titleClassName}`;

  return (
    <header className="header__container">
      <div className="header__leftSideContainer">
        <Link to="/" className={header__titleClassName_hide}>
          NewsExplorer
        </Link>
      </div>
      <div className="header__rightSideContainer">
        <Navigation
          handleSignInButtonClick={handleSignInButtonClick}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          showDropDown={showDropDown}
          setShowDropDown={setShowDropDown}
          handleDropDownClick={handleDropDownClick}
          activeModal={activeModal}
          screenWidth={screenWidth}
        />
      </div>
    </header>
  );
};

export default Header;
