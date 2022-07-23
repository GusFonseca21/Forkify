import React, { useContext, useRef, useState } from "react";

import { StylesContext } from "../../../store/styles-context";

import classes from "./SearchBar.module.css";

import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  const [enteredText, setEnteredText] = useState("");
  const stylesCtx = useContext(StylesContext);

  const searchBarTextInputRef = useRef<HTMLInputElement>(null);

  const searchButtonClickHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = searchBarTextInputRef.current!.value;

    stylesCtx.changeState("searchButton");

    if (enteredText.trim().length === 0) {
      return;
    }

    setEnteredText(enteredText);
  };

  return (
    <form
      onSubmit={searchButtonClickHandler}
      className={`${classes.form} ${
        stylesCtx.state.searchButtonState
          ? classes["search-button-click-animation"]
          : ""
      }`}
    >
      <input
        className={classes["search-bar"]}
        placeholder="Search over 1,000,000 recipes..."
        ref={searchBarTextInputRef}
      />
      <button className={classes["search-button"]}>
        <GoSearch className={classes["search-icon"]} />
        <span className={classes["search-button-text"]}>SEARCH</span>
      </button>
    </form>
  );
};

export default SearchBar;
