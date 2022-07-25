import React, { useContext } from "react";

import { StylesContext } from "../../../store/styles-context";

import classes from "./FoundRecipes.module.css";
import Recipe from "./Recipe/Recipe";

import useFetchRecipes from "../../../../Helpers/useFetchRecipes";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FetchRecipesContext } from "../../../store/fetch-recipes-context";

const FoundRecipes = () => {
  const stylesCtx = useContext(StylesContext);

  const fetchCtx = useContext(FetchRecipesContext);

  const hideShowFoundRecipesHandler = () => {
    stylesCtx.changeState("foundRecipesController");
  };

  const fetchedRecipes = useFetchRecipes();

  return (
    <div
      className={`${classes["found-recipes"]} ${
        stylesCtx.state.foundRecipesControllerState &&
        classes["show-found-recipes"]
      }`}
    >
      <div
        className={`${classes["found-recipe-controller-buttons"]} ${
          !fetchCtx.inputText && classes["no-recipes-searched"]
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
      </div>
      <div className={classes.recipes}>
        {fetchedRecipes.map(
          (recipe: {
            image_url: string;
            publisher: string;
            title: string;
            id: string;
          }) => {
            return (
              <Recipe
                key={recipe.id}
                image={recipe.image_url}
                title={recipe.title}
                publisher={recipe.publisher}
                id={recipe.id}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default FoundRecipes;
