import React, { useContext } from "react";

import { StylesContext } from "../../../store/styles-context";

import classes from "./FoundRecipes.module.css";
import Recipe from "./Recipe";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const FoundRecipes = () => {
  const stylesCtx = useContext(StylesContext);

  const hideShowFoundRecipesHandler = () => {
    stylesCtx.changeState("foundRecipesController");
  };
  return (
    <div
      className={`${classes["found-recipes"]} ${
        stylesCtx.state.foundRecipesControllerState &&
        classes["show-found-recipes"]
      }`}
    >
      {!stylesCtx.state.foundRecipesControllerState ? (
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
