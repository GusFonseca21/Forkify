import React, { useContext, useEffect, useState } from "react";

import { StylesContext } from "../../../store/styles-context";

import classes from "./Bookmarks.module.css";

import Recipe from "../../Body/FoundRecipes/Recipe/Recipe";

import { BsFillBookmarkFill } from "react-icons/bs";

const Bookmarks = () => {
  const [recipeData, setRecipeData] = useState([]);
  const stylesCtx = useContext(StylesContext);

  const bookmarksState = stylesCtx.state.bookmarksHeaderState;
  const recipeDetailsBookmarkClicked = stylesCtx.state.bookmarkRecipeState;

  useEffect(() => {
    if (localStorage.length > 0) {
      setRecipeData(JSON.parse(localStorage.getItem("data") || "[]"));
    }
  }, [recipeDetailsBookmarkClicked]);

  const bookmarkClickHandler = () => {
    stylesCtx.functions.changeBookmarksHeaderState(!bookmarksState);
  };
  return (
    <>
      {
        <button
          className={`${classes["bookmarks-button"]} ${
            bookmarksState && classes["bookmarks-button-clicked"]
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
            bookmarksState && classes["bookmark-clicked"]
          }`}
        >
          <div className={classes["recipes-list"]}>
            {recipeData !== [] &&
              recipeData.map((recipe: any) => {
                return (
                  <Recipe
                    key={recipe.id}
                    title={recipe.title}
                    image={recipe.image}
                    publisher={recipe.publisher}
                    id={recipe.id}
                    recipeKey={recipe.key}
                  />
                );
              })}
          </div>
        </div>
      }
    </>
  );
};

export default Bookmarks;
