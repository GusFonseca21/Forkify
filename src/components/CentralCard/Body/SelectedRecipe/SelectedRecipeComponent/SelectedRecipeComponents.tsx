import React from "react";

import ImageAndTitle from "./ImageAndTitle/ImageAndTitle";
import RecipeDetails from "./RecipeDetails/RecipeDetails";
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients";

import useFetchSelectedRecipe from "../../../../hooks/useFetchSelectedRecipe";

const SelectedRecipeComponents = () => {
  const selectedRecipeData = useFetchSelectedRecipe();

  return (
    <>
      {selectedRecipeData.image !== "" && (
        <>
          <ImageAndTitle
            image={selectedRecipeData.image}
            title={selectedRecipeData.title}
          />
          <RecipeDetails
            cookingTime={selectedRecipeData.cookingTime}
            servings={selectedRecipeData.servings}
            image={selectedRecipeData.image}
            publisher={selectedRecipeData.publisher}
            title={selectedRecipeData.title}
            id={selectedRecipeData.id}
          />
          <RecipeIngredients
            ingredients={selectedRecipeData.ingredients}
            id={selectedRecipeData.id}
            source={selectedRecipeData.source}
          />
        </>
      )}
    </>
  );
};

export default SelectedRecipeComponents;
