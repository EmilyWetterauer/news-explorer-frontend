import React from "react";

import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <a href="https://newsapi.org/" className="newsApiLink">
        <div className="footer__leftSideContainer">
          © 2023 SuperSite, Powered by NewsAPI
        </div>
      </a>
      <div className="footer__rightSideContainer">
        <Link to="/" className="homepageLinkHome">
          <p className="footer_home">Home</p>
        </Link>
        <a href="https://www.tripleten.com" className="tripleTenLink">
          <p className="footer_tripleTen">TripleTen</p>
        </a>
        <a href="https://github.com" className="githubLink">
          <div className="footer__githubIcon"></div>
        </a>
        <a href="https://facebook.com" className="facebookLink">
          <div className="footer__facebookIcon"></div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
