import React, { useContext } from "react";

import { StateContext } from "../../../store/state-context";

import classes from "./SelectedRecipe.module.css";

import ImageAndTitle from "./ImageAndTitle/ImageAndTitle";
import RecipeDetails from "./RecipeDetails/RecipeDetails";
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients";
import StartingMessage from "./StartingMessage/StartingMessage";

const SelectedRecipe = () => {
  const stateCtx = useContext(StateContext);

  return (
    <div
      className={`${classes.body} ${
        stateCtx.state.foundRecipesControllerState &&
        classes["show-found-recipes"]
      }`}
    >
      {/* <StartingMessage /> */}
      <ImageAndTitle />
      <RecipeDetails />
      <RecipeIngredients />
    </div>
  );
};

export default SelectedRecipe;
