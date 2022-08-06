import { useState, useEffect, useContext } from "react";
import { ErrorContext } from "../store/error-context";

import { FetchRecipesContext } from "../store/fetch-recipes-context";
import { StylesContext } from "../store/styles-context";

export default function useFetchRecipes() {
  const [recipesArr, setRecipesArr] = useState([]);

  const fetchCtx = useContext(FetchRecipesContext);
  const stylesCtx = useContext(StylesContext);
  const errorCtx = useContext(ErrorContext);

  const searchInput = fetchCtx.getSearchBarInputText;
  const deletedRecipeState = stylesCtx.state.confirmDeleteRecipeState;

  useEffect(() => {
    if (searchInput !== "") {
      errorCtx.functions.changeFetchRecipesStatus(true);
      stylesCtx.functions.changeFoundRecipesLoadingState(true);
      const fetchRecipes = async () => {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchInput}&key=4871af3e-9c8a-4b50-b116-b7298ada9115`
        );

        if (!response.ok) {
          errorCtx.functions.getFetchRecipesErrorMessage(
            `Something went wrong! Error: ${response.statusText}. Status Code: ${response.status}`
          );
          errorCtx.functions.changeFetchRecipesStatus(response.ok);
          stylesCtx.functions.changeFoundRecipesLoadingState(false);
          return;
        }
        const data = await response.json();

        if (data.results === 0) {
          errorCtx.functions.getFetchRecipesErrorMessage("No results were found!");
          errorCtx.functions.changeFetchRecipesStatus(false);
          stylesCtx.functions.changeFoundRecipesLoadingState(false);
          return;
        }

        const recipes = data.data.recipes;

        setRecipesArr(recipes);
        stylesCtx.functions.changeFoundRecipesLoadingState(false);
        stylesCtx.functions.changeFoundRecipesControllerState(true);
      };
      fetchRecipes();
    }
  }, [searchInput, deletedRecipeState]);

  return recipesArr;
}
