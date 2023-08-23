import React, { useState } from "react";

import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";

import RegisterModal from "../RegisterModal/RegisterModal";
import SignInModal from "../SignInModal/SignInModal";
import RegisterSuccessModal from "../RegisterSuccessModal/RegisterSuccessModal";

import { getNewsCardList } from "../../utils/newsApi";
import { apiKey } from "../../utils/constants";

import "./Main.css";

const DEFAULT_SEARCH_RESULTS = [
  {
    _id: "0",
    image: "../../images/image_08.png",
    date: "Nov 4, 2020",
    title: "Everyone needs a special sit spot in nature",
    content:
      "Ever since I read this book about nature with owls and worms and everything in between, i have been enthused by the natural rythym.  effortless and chaotic.  stressful but not.  ",
    tags: ["TREEHUGGER"],
    likes: [],
  },
  {
    _id: "1",
    image: "url",
    date: "Feb 19, 2019",
    title: "Nature makes you better",
    content:
      "We all know how good nature can make us feel.  We have known it for millenia.  The sound of the ocean.  The sound of the desert at night.",
    tags: ["TREEHUGGER"],
    likes: [],
  },
  {
    _id: "2",
    image: "url",
    date: "Oct 19, 2020",
    title: "Grand Teton renews historic Crest Trail",
    content:
      "The linking together of the crest and the death trails, at their head took place in 1933.  And marked the first step in the realization of a plan whereby...",
    tags: ["TREEHUGGER"],
    likes: [],
  },
  {
    _id: "3",
    image: "url",
    date: "Oct 31, 2020",
    title: "Every..",
    content: "Ever since..",
    tags: ["TREEHUGGER"],
    likes: [],
  },
];
const USER_ID = 1;
const USER = {
  _id: 1,
  name: "emma",
};

const Main = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showNothingFound, setShowNothingFound] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleSignInButtonClick = () => {
    setActiveModal("signIn");
  };

  const closeAllModals = (evt) => {
    if (
      evt.key === "Escape" ||
      (evt.target === evt.currentTarget && evt.type === "click")
    ) {
      return setActiveModal("");
    }
  };

  const handleRegisterSubmit = () => {
    //have to make the api call here
    setActiveModal("registerSuccess");
  };

  const handleSignInSubmit = () => {
    //have to make the api call here
    setIsLoggedIn(true);
    setActiveModal("");
  };

  const handleSearchButtonSubmit = (queryString) => {
    if (queryString.trim() === "") {
      setShowError(true);
    } else {
      setShowError(false);
      var currentDate = new Date();
      var sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(currentDate.getDate() - 7);
      console.log(queryString);
      setIsLoading(true);
      getNewsCardList({
        q: queryString,
        apiKey,
        from: sevenDaysAgo,
        to: currentDate,
        pageSize: 100,
      })
        .then((result) => {
          setSearchResults(result.articles);
          // setIsLoading(false);
          setShowNothingFound(result.articles.length === 0);
        })
        .catch((error) => {
          setErrorMessage(
            "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
          );
        })
        .finally(() => {
          setIsLoading(false);
          setKeyword(queryString);
        });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSearchResults(DEFAULT_SEARCH_RESULTS);
  };

  return (
    <div className="main__wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div className="main__backgroundImage">
              <Header
                handleSignInButtonClick={handleSignInButtonClick}
                isLoggedIn={isLoggedIn}
                handleLogout={handleLogout}
              />
              <SearchForm
                handleSearchButtonSubmit={handleSearchButtonSubmit}
                showError={showError}
              />
            </div>
            {errorMessage && (
              <p className="main__serverErrorMessage">{errorMessage}</p>
            )}
            {searchResults.length !== 0 && (
              <NewsCardList
                setSearchResults={setSearchResults}
                searchResults={searchResults}
                handleSignInButtonClick={handleSignInButtonClick}
                isLoggedIn={isLoggedIn}
                USER={USER}
                savedArticles={savedArticles}
                setSavedArticles={setSavedArticles}
                keyword={keyword}
              />
            )}
            {isLoading && <Preloader />}
            {showNothingFound && <NothingFound />}
            <About />
          </Route>
          <Route path="/saved-news">
            <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            <SavedNewsHeader USER={USER} keyword={keyword}></SavedNewsHeader>
            <SavedNews
              isLoggedIn={isLoggedIn}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              USER={USER}
              savedArticles={savedArticles}
              setSavedArticles={setSavedArticles}
              keyword={keyword}
            ></SavedNews>
          </Route>
        </Switch>

        <Footer />

        {activeModal === "register" && (
          <RegisterModal
            onClose={closeAllModals}
            handleAlternateButtonClick={handleSignInButtonClick}
            handleSubmit={handleRegisterSubmit}
          />
        )}
        {activeModal === "signIn" && (
          <SignInModal
            onClose={closeAllModals}
            handleSignInButtonClick={handleSignInButtonClick}
            handleAlternateButtonClick={handleRegisterClick}
            handleSubmit={handleSignInSubmit}
          />
        )}
        {activeModal === "registerSuccess" && (
          <RegisterSuccessModal
            onClose={closeAllModals}
            handleSignInButtonClick={handleSignInButtonClick}
          />
        )}
      </BrowserRouter>
    </div>
  );
};

export default Main;
