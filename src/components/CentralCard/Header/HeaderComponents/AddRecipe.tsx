import React, { useContext } from "react";

import { StylesContext } from "../../../store/styles-context";

import classes from "./AddRecipe.module.css";

import { GoPencil } from "react-icons/go";

const AddRecipe = () => {
  const stylesCtx = useContext(StylesContext);

  const addRecipeHandler = () => {
    stylesCtx.changeState("addRecipeHeader");
  };
  return (
    <button className={classes["add-recipe-button"]} onClick={addRecipeHandler}>
      <GoPencil className={classes["add-recipe-icon"]} />
      <span className={classes["add-recipe-text"]}>ADD RECIPE</span>
    </button>
  );
};

export default AddRecipe;
