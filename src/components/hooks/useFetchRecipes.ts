import { useState, useEffect, useContext } from "react";
import { ErrorContext } from "../store/error-context";

import { FetchRecipesContext } from "../store/fetch-recipes-context";
import { StylesContext } from "../store/styles-context";

export default function useFetchRecipes() {
  const [recipesArr, setRecipesArr] = useState([]);

  const fetchCtx = useContext(FetchRecipesContext);
  const stylesCtx = useContext(StylesContext);
  const errorCtx = useContext(ErrorContext);

  const searchInput = fetchCtx.inputText;
  const deletedRecipeState = stylesCtx.state.wasRecipeDeletedState;

  useEffect(() => {
    if (searchInput !== "") {
      errorCtx.changeFetchRecipesStatus(true);
      stylesCtx.changeFoundRecipesLoadingState(true);
      const fetchRecipes = async () => {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchInput}&key=4871af3e-9c8a-4b50-b116-b7298ada9115`
        );

        if (!response.ok) {
          errorCtx.getFetchRecipesErrorMessage(
            `Something went wrong! Error: ${response.statusText}. Status Code: ${response.status}`
          );
          errorCtx.changeFetchRecipesStatus(response.ok);
          stylesCtx.changeFoundRecipesLoadingState(false);
          return;
        }
        const data = await response.json();

        if (data.results === 0) {
          errorCtx.getFetchRecipesErrorMessage("No results were found!");
          errorCtx.changeFetchRecipesStatus(false);
          stylesCtx.changeFoundRecipesLoadingState(false);
          return;
        }

        const recipes = data.data.recipes;

        setRecipesArr(recipes);
        stylesCtx.changeFoundRecipesLoadingState(false);
        stylesCtx.changeFoundRecipesControllerState(true);
      };
      fetchRecipes();
    }
  }, [searchInput, deletedRecipeState]);

  return recipesArr;
}
