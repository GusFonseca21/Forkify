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

  const router = useRouter();

  const recipeId: any = router.query.id;

  useEffect(() => {
    if (recipeId !== undefined) {
      errorCtx.changeFetchSelectedRecipeStatus(true);
      stylesCtx.changeSelectedRecipeLoadingState(true);
      const fetchRecipe = async () => {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`
        );

        if (!response.ok) {
          errorCtx.getFetchSelectedRecipeErrorMessage(
            `Something went wrong! Error: ${response.statusText}. Status Code: ${response.status}`
          );
          errorCtx.changeFetchSelectedRecipeStatus(response.ok);
        }

        const data = await response.json();

        setRecipeObj({
          title: data.data.recipe.title,
          image: data.data.recipe.image_url,
          ingredients: data.data.recipe.ingredients,
          publisher: data.data.recipe.publisher,
          id: recipeId,
          source: data.data.recipe.source_url,
          cookingTime: data.data.recipe.cooking_time,
          servings: data.data.recipe.servings,
        });
        stylesCtx.changeSelectedRecipeLoadingState(false);
      };
      fetchRecipe();
    }
  }, [recipeId]);
  return recipeObj;
}
