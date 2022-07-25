import React, { useContext, useEffect } from "react";

import { StylesContext } from "../../../store/styles-context";

import classes from "./SelectedRecipe.module.css";

import ImageAndTitle from "./ImageAndTitle/ImageAndTitle";
import RecipeDetails from "./RecipeDetails/RecipeDetails";
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients";
import StartingMessage from "./StartingMessage/StartingMessage";
import { FetchRecipesContext } from "../../../store/fetch-recipes-context";
import useFetchRecipeId from "../../../../Helpers/useFetchRecipeId";

const SelectedRecipe = () => {
  const stylesCtx = useContext(StylesContext);

  const fetchCtx = useContext(FetchRecipesContext);

  const closeFoundRecipes = () => {
    if (stylesCtx.state.foundRecipesControllerState) {
      stylesCtx.changeState("foundRecipesController");
    }
  };

  const recipeData = useFetchRecipeId();
  
  return (
    <div onClick={closeFoundRecipes}>
      <div
        className={`${classes.body} ${
          stylesCtx.state.foundRecipesControllerState &&
          classes["found-recipes-open"]
        }`}
      >
        {fetchCtx.id === "" && <StartingMessage />}
        {fetchCtx.id !== "" && (
          <ImageAndTitle image={recipeData.image} title={recipeData.title} />
        )}
        {fetchCtx.id !== "" && (
          <RecipeDetails
            cookingTime={recipeData.cookingTime}
            servings={recipeData.servings}
          />
        )}
        {fetchCtx.id !== "" && (
          <RecipeIngredients
            ingredients={recipeData.ingredients}
            id={recipeData.id}
            source={recipeData.source}
          />
        )}
      </div>
    </div>
  );
};

export default SelectedRecipe;
