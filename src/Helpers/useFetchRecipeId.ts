import { useState, useEffect, useContext } from "react";
import { FetchRecipesContext } from "../components/store/fetch-recipes-context";

export default function useFetchRecipeId() {
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

  const fetchCtx = useContext(FetchRecipesContext);

  const recipeId = fetchCtx.id;

  useEffect(() => {
    const fetchRecipe = async () => {
      if (recipeId !== "") {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}?key=1794716d-599e-4637-835a-42631282ff65`
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
      }
      return;
    };
    fetchRecipe();
  }, [recipeId]);
  return recipeObj;
}
