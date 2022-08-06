import React, { useContext, useState } from "react";

import { StylesContext } from "../../../../../store/styles-context";

import classes from "./RecipeDetails.module.css";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill, BsClock } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { FetchRecipesContext } from "../../../../../store/fetch-recipes-context";
const RecipeDetails: React.FC<{
  cookingTime: number;
  servings: number;
  image: string;
  publisher: string;
  title: string;
  id: string;
  recipeKey: string;
  changeServings: (servings: {
    newServings: number;
    oldServings: number;
  }) => void;
}> = (props) => {
  const stylesCtx = useContext(StylesContext);

  const bookmarkedRecipesData = JSON.parse(
    localStorage.getItem("data") || "[]"
  );

  const isRecipeBookmarked: boolean = bookmarkedRecipesData.find(
    (recipe: any) => recipe.id === props.id
  );

  const isBookmarked = stylesCtx.state.bookmarkRecipeState;

  if (isRecipeBookmarked !== undefined) {
    stylesCtx.functions.changeBookmarkedRecipeState(true);
  } else {
    stylesCtx.functions.changeBookmarkedRecipeState(false);
  }
  const bookmarkButtonHandler = () => {
    const recipe = {
      title: props.title,
      image: props.image,
      id: props.id,
      publisher: props.publisher,
      ...(props.recipeKey && { key: props.recipeKey }),
    };

    if (isBookmarked) {
      const dataWithRemovedRecipe = bookmarkedRecipesData.filter(
        (recipe: any) => recipe.id !== props.id
      );
      localStorage.setItem("data", JSON.stringify(dataWithRemovedRecipe));
      stylesCtx.functions.changeBookmarkedRecipeState(false);
    }

    if (!isBookmarked) {
      if (props.id) {
        bookmarkedRecipesData.push(recipe);
        localStorage.setItem("data", JSON.stringify(bookmarkedRecipesData));
        stylesCtx.functions.changeBookmarkedRecipeState(true);
      }
    }
  };

  const addServings = () => {
    if (props.servings < 20) {
      props.changeServings({
        newServings: props.servings + 1,
        oldServings: props.servings,
      });
    }
  };

  const removeServings = () => {
    if (props.servings > 1) {
      props.changeServings({
        newServings: props.servings - 1,
        oldServings: props.servings,
      });
    }
  };
  return (
    <div className={classes["recipe-details"]}>
      <div className={classes["timing-and-servings"]}>
        <div className={classes.timing}>
          <BsClock className={classes["timing-icon"]} />
          <span>
            <b className={classes["text-highlighted"]}>{props.cookingTime}</b>{" "}
            minutes
          </span>
        </div>
        <div className={classes.servings}>
          <span className={classes["servings-span"]}>
            <IoPeopleOutline className={classes["servings-icon"]} />
            <b className={classes["text-highlighted"]}>{props.servings}</b>{" "}
            servings
          </span>
          <div className={classes["servings-buttons"]}>
            <AiOutlinePlusCircle
              className={classes.plus}
              onClick={addServings}
            />
            <AiOutlineMinusCircle
              className={classes.minus}
              onClick={removeServings}
            />
          </div>
        </div>
      </div>
      <div className={classes.bookmark} onClick={bookmarkButtonHandler}>
        {isBookmarked ? <BsFillBookmarkFill /> : <BsBookmark />}
      </div>
    </div>
  );
};

export default RecipeDetails;
