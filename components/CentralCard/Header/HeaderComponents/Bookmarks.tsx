import { useState } from "react";

import classes from "./Bookmarks.module.css";

import { BsFillBookmarkFill } from "react-icons/bs";

import Recipe from "../../Body/FoundRecipes/Recipe";

const Bookmarks = () => {
  const [bookmarkClicked, setBookmarkClicked] = useState(false);

  const bookmarkClickHandler = () => {
    if (!bookmarkClicked) {
      setBookmarkClicked(true);
    }
    if (bookmarkClicked) {
      setBookmarkClicked(false);
    }
  };

  return (
    <>
      {
        <button
          className={`${classes["bookmarks-button"]} ${
            bookmarkClicked ? classes["bookmarks-button-clicked"]
           : ""}`}
          onClick={bookmarkClickHandler}
        >
          <BsFillBookmarkFill className={classes["bookmark-icon"]} />
          <span className={classes["bookmarks-text"]}>BOOKMARKS</span>
        </button>
      }
      {
        <div
          className={`${classes["bookmarked-recipes"]} ${
            bookmarkClicked ? classes["teste"] : ""
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
