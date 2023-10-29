import React from "react";

import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__leftSideContainer">
        <a href="https://newsapi.org/" className="newsApiLink" target="_blank">
          © 2023 SuperSite, Powered by NewsAPI
        </a>
      </div>
      <div className="footer__rightSideContainer">
        <Link to="/" className="footer_home">
          Home
        </Link>
        <a
          href="https://www.tripleten.com"
          className="footer_tripleTen"
          target="_blank"
        >
          TripleTen
        </a>
        <a
          href="https://github.com"
          className="footer__githubIcon"
          target="_blank"
        ></a>
        <a
          href="https://facebook.com"
          className="footer__facebookIcon"
          target="_blank"
        ></a>
      </div>
    </footer>
  );
};

export default Footer;
