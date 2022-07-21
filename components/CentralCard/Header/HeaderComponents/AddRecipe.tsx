import classes from "./AddRecipe.module.css";

import { GoPencil } from "react-icons/go";

const AddRecipe = () => {
  return (
    <button className={classes["add-recipe-button"]}>
      <GoPencil className={classes["add-recipe-icon"]} />
      <span className={classes["add-recipe-text"]}>ADD RECIPE</span>
    </button>
  );
};

export default AddRecipe;
