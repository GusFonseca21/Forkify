import { useState, useEffect, useContext } from "react";

import { FetchRecipesContext } from "../components/store/fetch-recipes-context";

export default function useFetchRecipes() {
  const [recipesArr, setRecipesArr] = useState([]);

  const fetchCtx = useContext(FetchRecipesContext);

  const searchInput = fetchCtx.inputText;

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchInput}&key=1794716d-599e-4637-835a-42631282ff65`
      );

      const data = await response.json();

      const recipes = data.data.recipes;

      setRecipesArr(recipes);
    };
    fetchRecipes();
  }, [searchInput]);
  return recipesArr;
}
