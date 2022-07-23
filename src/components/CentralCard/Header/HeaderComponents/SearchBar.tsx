import React, { useContext } from "react";

import { StateContext } from "../../../store/state-context";

import classes from "./SearchBar.module.css";

import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  const stateCtx = useContext(StateContext);

  const searchButtonClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    stateCtx.changeState("searchButton")

  };

  return (
    <form
      className={`${classes.form} ${
        stateCtx.state.searchButtonState ? classes["search-button-click-animation"] : ""
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
