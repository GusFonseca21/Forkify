
import classes from "./SelectedRecipe.module.css";

import ImageAndTitle from "./ImageAndTitle/ImageAndTitle";
import RecipeDetails from "./RecipeDetails/RecipeDetails";
import RecipeIngredients from "./RecipeIngredients/RecipeIngredients";
import StartingMessage from "./StartingMessage/StartingMessage";



const SelectedRecipe = () => {


  return (
    <div className={classes.body}>
      {/* <StartingMessage /> */}
        <ImageAndTitle />
        <RecipeDetails />
        <RecipeIngredients />
    </div>
  );
};

export default SelectedRecipe;
