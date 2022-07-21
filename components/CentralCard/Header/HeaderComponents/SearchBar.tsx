import React, { useState } from "react";

import classes from "./SearchBar.module.css";

import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const searchButtonClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!isButtonClicked) {
      setIsButtonClicked(true);
      setTimeout(() => {
        setIsButtonClicked(false);
      }, 1 * 1000);
    }
  };

  return (
    <form
      className={`${classes.form} ${
        isButtonClicked ? classes["search-button-click-animation"] : ""
      }`}
    >
      <input
        className={classes["search-bar"]}
        placeholder="Search over 1,000,000 recipes..."
      />
      <button
        className={classes["search-button"]}
        onClick={searchButtonClickHandler}
      >
        <GoSearch className={classes["search-icon"]} />
        <span className={classes["search-button-text"]}>SEARCH</span>
      </button>
    </form>
  );
};

export default SearchBar;
