import React, { useContext, useState, useEffect } from "react";

import { StylesContext } from "../../../store/styles-context";
import { FetchRecipesContext } from "../../../store/fetch-recipes-context";
import { ErrorContext } from "../../../store/error-context";

import classes from "./FoundRecipes.module.css";

import Recipe from "./Recipe/Recipe";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LinearProgress from "@mui/material/LinearProgress";
import useFetchRecipes from "../../../hooks/useFetchRecipes";

const FoundRecipes = () => {
  const stylesCtx = useContext(StylesContext);
  const fetchCtx = useContext(FetchRecipesContext);
  const errorCtx = useContext(ErrorContext);

  const fetchedRecipes = useFetchRecipes();

  const isLoading = stylesCtx.state.foundRecipesLoadingState;
  const hasError = errorCtx.fetchRecipesStatus;
  const errorMessage = errorCtx.fetchRecipesErrorMessage;
  const hasEnteredText = fetchCtx.inputText;
  const isFoundRecipesControllerOpen =
    stylesCtx.state.foundRecipesControllerState;

  const hideShowFoundRecipesHandler = () => {
    if (isFoundRecipesControllerOpen)
      stylesCtx.changeFoundRecipesControllerState(false);
    if (!isFoundRecipesControllerOpen)
      stylesCtx.changeFoundRecipesControllerState(true);
  };

  return (
    <section
      className={`${classes["found-recipes"]} ${
        isFoundRecipesControllerOpen &&
        !hasError &&
        classes["show-found-recipes"]
      }`}
    >
      {hasError && (
        <span className={classes["error-message"]}>{errorMessage}</span>
      )}
      <div
        className={`${classes["found-recipe-controller-buttons"]} ${
          hasEnteredText !== "" || (!hasError && classes["no-recipes-searched"])
        }`}
      >
        {!isFoundRecipesControllerOpen ? (
          <ChevronRightIcon
            className={classes["found-recipes-controller"]}
            onClick={hideShowFoundRecipesHandler}
          />
        ) : (
          <ChevronLeftIcon
            className={classes["found-recipes-controller"]}
            onClick={hideShowFoundRecipesHandler}
          />
        )}
      </div>
      {isLoading ? (
        <LinearProgress className={classes.loading} />
      ) : (
        <div className={classes.recipes}>
          {!hasError &&
            fetchedRecipes.map(
              (recipe: {
                image_url: string;
                publisher: string;
                title: string;
                id: string;
                key: string;
              }) => {
                return (
                  <Recipe
                    key={recipe.id}
                    image={recipe.image_url}
                    title={recipe.title}
                    publisher={recipe.publisher}
                    id={recipe.id}
                    recipeKey={recipe.key}
                  />
                );
              }
            )}
        </div>
      )}
    </section>
  );
};

export default FoundRecipes;
