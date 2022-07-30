import React, { useContext, useRef, useState } from "react";

import { StylesContext } from "../../../store/styles-context";
import { FetchRecipesContext } from "../../../store/fetch-recipes-context";

import classes from "./SearchBar.module.css";

import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  const stylesCtx = useContext(StylesContext);
  const fetchCtx = useContext(FetchRecipesContext);

  const searchBarTextInputRef = useRef<HTMLInputElement>(null);

  const searchButtonClickHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = searchBarTextInputRef.current!.value;

    stylesCtx.changeState("searchButton");

    if (enteredText.trim().length === 0) {
      return;
    }
    fetchCtx.getInputText(enteredText);
  };

  return (
    <form
      onSubmit={searchButtonClickHandler}
      className={`${classes.form} ${
        stylesCtx.state.searchButtonState &&
        classes["search-button-click-animation"]
      }`}
    >
      <input
        className={classes["search-bar"]}
        placeholder="Ex: cake, pizza, chicken..."
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
