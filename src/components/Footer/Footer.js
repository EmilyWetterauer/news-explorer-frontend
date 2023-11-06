import React from "react";

import { Link } from "react-router-dom";

import "./Footer.css";

import githubIcon from "../../images/github.svg";

import facebookIcon from "../../images/fb.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__leftSideContainer">
        <a
          href="https://newsapi.org/"
          className="footer__newsApiLink"
          target="_blank"
          rel="noreferrer"
        >
          © 2023 SuperSite, Powered by NewsAPI
        </a>
      </div>
      <div className="footer__rightSideContainer">
        <ul className="footer__textLinks">
          <li className="footer__rightTextListItem">
            <Link to="/" className="footer__rightTextLink">
              Home
            </Link>
          </li>
          <li className="footer__rightTextListItem">
            <a
              href="https://www.tripleten.com"
              className="footer__rightTextLink"
              target="_blank"
              rel="noreferrer"
            >
              TripleTen
            </a>
          </li>
        </ul>
        <ul className="footer__imageLinks">
          <li>
            <a
              href="https://github.com"
              className="footer__rightImageLink"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="Github" />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com"
              className="footer__rightImageLink"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
