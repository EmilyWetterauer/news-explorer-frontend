import "./Header.css";

import icon from "../../images/Union.png";

const Header = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <div className="header__leftSideContainer">
        <p className="header__title">NewsExplorer</p>
      </div>
      <div className="header__rightSideContainer">
        <p className="header__home">Home</p>
        <p className="header__savedArticles">Saved Articles</p>
        {isLoggedIn ? (
          <button className="header__profileButton">
            <span className="header__profileButtonText">Emma</span>
            <span className="header__profileButtonIcon">
              <img src={icon} alt="arrowImage" />
            </span>
          </button>
        ) : (
          <button className="header__signInButton">
            <span className="header__signInButtonText">Sign In</span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
