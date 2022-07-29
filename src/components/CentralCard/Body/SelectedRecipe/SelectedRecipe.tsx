import React, { useContext } from "react";
import { useRouter } from "next/router";

import { StylesContext } from "../../../store/styles-context";
import { ErrorContext } from "../../../store/error-context";

import classes from "./SelectedRecipe.module.css";

import SelectedRecipeComponents from "./SelectedRecipeComponent/SelectedRecipeComponents";

import { BsEmojiSmile } from "react-icons/bs";
import LinearProgress from "@mui/material/LinearProgress";

const SelectedRecipe = () => {
  const stylesCtx = useContext(StylesContext);
  const errorCtx = useContext(ErrorContext);
  const router = useRouter();
  const recipeId = router.query.id;

  const foundRecipesControllerState =
    stylesCtx.state.foundRecipesControllerState;
  const isSelectedRecipeLoading = stylesCtx.state.selectedRecipeLoadingState;
  const hasError = errorCtx.fetchSelectedRecipeStatus;
  const foundRecipesHasError = errorCtx.fetchRecipesStatus;
  const errorMessage = errorCtx.fetchSelectedRecipeErrorMessage;

  const closeFoundRecipes = () => {
    if (foundRecipesControllerState) {
      stylesCtx.changeFoundRecipesControllerState(false);
    }
  };

  return (
    <div onClick={closeFoundRecipes}>
      <div
        className={`${classes.body} ${
          foundRecipesControllerState &&
          !foundRecipesHasError &&
          classes["found-recipes-open"]
        }`}
      >
        {hasError && (
          <span className={classes["error-message"]}>{errorMessage}</span>
        )}
        {recipeId === undefined && (
          <div className={classes["starting-message"]}>
            <BsEmojiSmile className={classes["starting-message-emoji"]} />
            <p>
              Start by searching for a recipe or an ingredient.
              <br /> Have fun!
            </p>
          </div>
        )}
        {isSelectedRecipeLoading && (
          <LinearProgress className={classes["loading-bar"]} />
        )}
        {recipeId !== undefined && <SelectedRecipeComponents />}
      </div>
    </div>
  );
};

export default SelectedRecipe;
