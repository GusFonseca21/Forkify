import { useState, useEffect, useContext } from "react";

import { ErrorContext } from "../store/error-context";

import { useRouter } from "next/router";

import { StylesContext } from "../store/styles-context";

export default function useFetchSelectedRecipe() {
  const [recipeObj, setRecipeObj] = useState({
    title: "",
    image: "",
    ingredients: [{ quantity: 0, unit: "", description: "" }],
    publisher: "",
    id: "",
    source: "",
    cookingTime: 0,
    servings: 0,
  });

  const errorCtx = useContext(ErrorContext);
  const stylesCtx = useContext(StylesContext);

  const { query } = useRouter() || { query: { text: "" } };

  const recipeId = query.id;

  useEffect(() => {
    if (recipeId !== undefined) {
      // stylesCtx.changeSelectedRecipeLoadingState(true);
      errorCtx.changeFetchSelectedRecipeStatus(true);
      errorCtx.changeFetchRecipesStatus(true);
      const fetchRecipe = async () => {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`
        );

        if (!response.ok) {
          errorCtx.getFetchSelectedRecipeErrorMessage(
            `Something went wrong! Error: ${response.statusText}. Status Code: ${response.status}`
          );
          errorCtx.changeFetchSelectedRecipeStatus(response.ok);
          return;
        }

        const data = await response.json();

        // stylesCtx.changeSelectedRecipeLoadingState(false);

        setRecipeObj({
          title: data.data.recipe.title,
          image: data.data.recipe.image_url,
          ingredients: data.data.recipe.ingredients,
          publisher: data.data.recipe.publisher,
          id: recipeId,
          source: data.data.recipe.source_url,
          cookingTime: data.data.recipe.cooking_time,
          servings: data.data.recipe.servings,
          ...(data.data.recipe.key && { key: data.data.recipe.key }),
        });
      };
      fetchRecipe();
    }
  }, [recipeId]);
  return recipeObj;
}
