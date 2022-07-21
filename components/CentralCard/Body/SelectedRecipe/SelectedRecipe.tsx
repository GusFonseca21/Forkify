import { useState } from "react";

import classes from "./SelectedRecipe.module.css";

import ImageAndTitle from "./ImageAndTitle/ImageAndTitle";
import RecipeDetails from "./RecipeDetails/RecipeDetails";
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients";
import StartingMessage from "./StartingMessage/StartingMessage";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const SelectedRecipe = () => {
  const [foundRecipesHidden, setFoundRecipesHidden] = useState(false);

  const hideShowFoundRecipesHandler = () => {
    if (!foundRecipesHidden) {
      setFoundRecipesHidden(true);
    }
    if (foundRecipesHidden) {
      setFoundRecipesHidden(false);
    }
  };

  return (
    <div className={classes.body}>
      {/* <StartingMessage /> */}
      {!foundRecipesHidden ? (
        <AiFillCaretLeft
          className={classes["hide-show-found-recipes-button"]}
          onClick={hideShowFoundRecipesHandler}
        />
      ) : (
        <AiFillCaretRight
          className={classes["hide-show-found-recipes-button"]}
          onClick={hideShowFoundRecipesHandler}
        />
      )}
      <ImageAndTitle />
      <RecipeDetails />
      <RecipeIngredients />
    </div>
  );
};

export default SelectedRecipe;
