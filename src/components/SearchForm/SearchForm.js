import React, { useState } from "react";

import useInputWithState from "../../utils/customHooks";

import "./SearchForm.css";

const SearchForm = ({ handleSearchButtonSubmit, showError }) => {
  const [queryString, setQueryString] = useInputWithState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearchButtonSubmit(queryString);
  };

  return (
    <form className="searchForm__container" onSubmit={handleSubmit}>
      <div>
        <h1 className="searchForm__headerQuestion">
          What's going on in the world?
        </h1>
        <p className="searchForm__statement">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <div className="searchForm__searchBarWrapper">
        <input
          // type="text"
          className="searchForm__searchBar"
          placeholder={showError ? "Please enter a keyword" : "Enter Topic"}
          // value={queryString}
          onChange={setQueryString}
        />
        <button
          // onClick={() => {
          //   handleSearchButtonSubmit(queryString);
          // }}
          className="searchForm__searchBarButton"
          // type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};
export default SearchForm;
