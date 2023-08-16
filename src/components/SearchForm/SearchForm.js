import React from "react";

import "./SearchForm.css";

const SearchForm = ({ handleSearchButtonSubmit }) => {
  return (
    <div className="searchForm__container">
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
          type="text"
          className="searchForm__searchBar"
          placeholder="Enter Topic"
        />
        <button
          className="searchForm__searchBarButton"
          onClick={handleSearchButtonSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default SearchForm;
