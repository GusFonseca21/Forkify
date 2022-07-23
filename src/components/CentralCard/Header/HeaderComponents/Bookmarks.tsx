import React, { useContext } from "react";

import { StateContext } from "../../../store/state-context";

import classes from "./Bookmarks.module.css";

import { BsFillBookmarkFill } from "react-icons/bs";

import Recipe from "../../Body/FoundRecipes/Recipe";

const Bookmarks = () => {
  const stateCtx = useContext(StateContext);

  const bookmarkClickHandler = () => {
    stateCtx.changeState("bookmarksHeader");
  };

  return (
    <>
      {
        <button
          className={`${classes["bookmarks-button"]} ${
            stateCtx.state.bookmarksHeaderState
              ? classes["bookmarks-button-clicked"]
              : ""
          }`}
          onClick={bookmarkClickHandler}
        >
          <BsFillBookmarkFill className={classes["bookmark-icon"]} />
          <span className={classes["bookmarks-text"]}>BOOKMARKS</span>
        </button>
      }
      {
        <div
          className={`${classes["bookmarked-recipes"]} ${
            stateCtx.state.bookmarksHeaderState ? classes["teste"] : ""
          }`}
        >
          <div className={classes["recipes-list"]}>
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
          </div>
        </div>
      }
    </>
  );
};

export default Bookmarks;
