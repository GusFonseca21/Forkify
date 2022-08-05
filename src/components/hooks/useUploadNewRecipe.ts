import React, { useContext, useEffect } from "react";

import { FetchRecipesContext } from "../store/fetch-recipes-context";

export default function useUploadNewRecipe() {
  const fetchCtx = useContext(FetchRecipesContext);
  let newRecipeObj = fetchCtx.newRecipe;

  useEffect(() => {
    const uploadNewRecipe = async () => {
      const response = await fetch(
        "https://forkify-api.herokuapp.com/api/v2/recipes?key=4871af3e-9c8a-4b50-b116-b7298ada9115",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newRecipeObj),
        }
      );
      newRecipeObj = {};
      const data = await (await response).json();
    };
    uploadNewRecipe();
  }, [newRecipeObj]);
}
