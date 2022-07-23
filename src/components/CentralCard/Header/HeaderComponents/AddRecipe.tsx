import React, { useContext } from "react";

import { StateContext } from "../../../store/state-context";

import classes from "./AddRecipe.module.css";

import { GoPencil } from "react-icons/go";

const AddRecipe = () => {
  const stateCtx = useContext(StateContext);

  const addRecipeHandler = () => {
    stateCtx.changeState("addRecipeHeader");
  };
  return (
    <button className={classes["add-recipe-button"]} onClick={addRecipeHandler}>
      <GoPencil className={classes["add-recipe-icon"]} />
      <span className={classes["add-recipe-text"]}>ADD RECIPE</span>
    </button>
  );
};

export default AddRecipe;
