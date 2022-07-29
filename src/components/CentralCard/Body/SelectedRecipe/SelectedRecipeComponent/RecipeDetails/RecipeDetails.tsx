import React, { useContext, useState } from "react";

import { StylesContext } from "../../../../../store/styles-context";

import classes from "./RecipeDetails.module.css";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill, BsClock } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";

const RecipeDetails: React.FC<{
  cookingTime: number;
  servings: number;
  image: string;
  publisher: string;
  title: string;
  id: string;
}> = (props) => {
  const stylesCtx = useContext(StylesContext);

  const bookmarkedRecipesData = JSON.parse(
    localStorage.getItem("data") || "[]"
  );

  const isRecipeBookmarkedFound: boolean = bookmarkedRecipesData.find(
    (recipe: any) => recipe.id === props.id
  );

  const isBookmarked = stylesCtx.state.bookmarkRecipeState;

  if (isRecipeBookmarkedFound !== undefined) {
    stylesCtx.changeBookmarkedRecipeState(true);
  } else {
    stylesCtx.changeBookmarkedRecipeState(false);
  }
  const bookmarkButtonHandler = () => {
    const recipe = {
      title: props.title,
      image: props.image,
      id: props.id,
      publisher: props.publisher,
    };

    if (isBookmarked) {
      const dataWithRemovedRecipe = bookmarkedRecipesData.filter(
        (recipe: any) => recipe.id !== props.id
      );
      localStorage.setItem("data", JSON.stringify(dataWithRemovedRecipe));
      stylesCtx.changeBookmarkedRecipeState(false);
    }

    if (!isBookmarked) {
      if (props.id) bookmarkedRecipesData.push(recipe);
      localStorage.setItem("data", JSON.stringify(bookmarkedRecipesData));
      stylesCtx.changeBookmarkedRecipeState(true);
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
            <AiOutlinePlusCircle className={classes.plus} />
            <AiOutlineMinusCircle className={classes.minus} />
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
