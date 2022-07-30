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
  const fetchSelectedRecipesHasError = errorCtx.fetchSelectedRecipeStatus;
  const fetchFoundRecipesHasError = errorCtx.fetchRecipesStatus;
  const fetchSelectedRecipesErrorMessage =
    errorCtx.fetchSelectedRecipeErrorMessage;
  const fetchFoundRecipesErrorMessage = errorCtx.fetchRecipesErrorMessage;

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
          !fetchFoundRecipesHasError &&
          classes["found-recipes-open"]
        }`}
      >
        {fetchSelectedRecipesHasError && (
          <span
            className={`${classes["fetch-selected-recipe-error-message"]} ${classes["error-message"]}`}
          >
            {fetchSelectedRecipesErrorMessage}
          </span>
        )}
        {fetchFoundRecipesHasError && (
          <span
            className={`${classes["fetch-found-recipes-error-message"]} ${classes["error-message"]}`}
          >
            {fetchFoundRecipesErrorMessage}
          </span>
        )}
        {recipeId === undefined && (
          <span className={classes["starting-message"]}>
            <BsEmojiSmile className={classes["starting-message-emoji"]} />
            Start by searching for a recipe or an ingredient. Have fun!
          </span>
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
