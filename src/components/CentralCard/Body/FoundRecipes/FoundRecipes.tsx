import React, { useContext } from "react";

import { StateContext } from "../../../store/state-context";

import classes from "./FoundRecipes.module.css";
import Recipe from "./Recipe";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const FoundRecipes = () => {
  const stateCtx = useContext(StateContext);

  const hideShowFoundRecipesHandler = () => {
    stateCtx.changeState("foundRecipesController");
  };
  return (
    <div
      className={`${classes["found-recipes"]} ${
        stateCtx.state.foundRecipesControllerState &&
        classes["show-found-recipes"]
      }`}
    >
      {!stateCtx.state.foundRecipesControllerState ? (
        <AiFillCaretRight
          className={classes["found-recipes-controller"]}
          onClick={hideShowFoundRecipesHandler}
        />
      ) : (
        <AiFillCaretLeft
          className={classes["found-recipes-controller"]}
          onClick={hideShowFoundRecipesHandler}
        />
      )}
      <div className={classes.recipes}>
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
    </div>
  );
};

export default FoundRecipes;
