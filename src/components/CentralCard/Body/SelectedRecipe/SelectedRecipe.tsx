import React, { useContext, useState, useEffect, useCallback } from "react";

import { StylesContext } from "../../../store/styles-context";

import classes from "./SelectedRecipe.module.css";

import ImageAndTitle from "./ImageAndTitle/ImageAndTitle";
import RecipeDetails from "./RecipeDetails/RecipeDetails";
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients";
import StartingMessage from "./StartingMessage/StartingMessage";
import { memoryUsage } from "process";

const SelectedRecipe = () => {
  const [recipeObj, setRecipeObj] = useState({
    title: "",
    image: "",
    ingredients: [
      {
        quantity: 0,
        unit: "",
        description: "",
      },
    ],
    publisher: "",
    id: "",
    source: "",
    cookingTime: 0,
    servings: 0,
  });

  const stylesCtx = useContext(StylesContext);

  const fetchRecipes = async () => {
    const response = await fetch(
      "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=9d43166c-2dbe-4ccd-8ea0-63a4e2e63f4e"
    );

    const data = await response.json();

    setRecipeObj({
      title: data.data.recipe.title,
      image: data.data.recipe.image_url,
      ingredients: data.data.recipe.ingredients,
      publisher: data.data.recipe.publisher,
      id: data.data.recipe.recipe_id,
      source: data.data.recipe.source_url,
      cookingTime: data.data.recipe.cooking_time,
      servings: data.data.recipe.servings,
    });

  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div
      className={`${classes.body} ${
        stylesCtx.state.foundRecipesControllerState &&
        classes["show-found-recipes"]
      }`}
    >
      {/* <StartingMessage /> */}
      <ImageAndTitle image={recipeObj.image} title={recipeObj.title} />
      <RecipeDetails
        cookingTime={recipeObj.cookingTime}
        servings={recipeObj.servings}
      />
      <RecipeIngredients
        source={recipeObj.source}
        ingredients={recipeObj.ingredients}
        id={recipeObj.id}
      />
    </div>
  );
};

export default SelectedRecipe;
