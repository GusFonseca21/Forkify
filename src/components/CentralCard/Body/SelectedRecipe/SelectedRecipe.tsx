import React, { useContext, useEffect, useState, useReducer } from "react";
import { useRouter } from "next/router";

import { StylesContext } from "../../../store/styles-context";
import { ErrorContext } from "../../../store/error-context";

import classes from "./SelectedRecipe.module.css";

import ImageAndTitle from "./SelectedRecipeComponent/ImageAndTitle/ImageAndTitle";
import RecipeDetails from "./SelectedRecipeComponent/RecipeDetails/RecipeDetails";
import RecipeIngredients from "./SelectedRecipeComponent/RecipeIngredients/RecipeIngredients";

import useFetchSelectedRecipe from "../../../hooks/useFetchSelectedRecipe";

import { BsEmojiSmile } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import LinearProgress from "@mui/material/LinearProgress";
import HowToCookIt from "./SelectedRecipeComponent/HowToCookIt/HowToCookIt";
import Head from "next/head";

const SelectedRecipe = () => {
  let pageTitle: string = "Forkify | Search over 1.000 recipes!";

  const [servings, setServings] = useState({ newServings: 0, oldServings: 0 });
  const [ingredients, setIngredients] = useState([
    {
      quantity: 0,
      unit: "",
      description: "",
    },
  ]);

  const stylesCtx = useContext(StylesContext);
  const errorCtx = useContext(ErrorContext);

  const { query } = useRouter() || { query: { text: "" } };

  const recipeId = query.id;

  const foundRecipesControllerState =
    stylesCtx.state.foundRecipesControllerState;
  const isSelectedRecipeLoading = stylesCtx.state.selectedRecipeLoadingState;
  const fetchSelectedRecipesHasError = errorCtx.states.fetchSelectedRecipeStatus;
  const fetchFoundRecipesHasError = errorCtx.states.fetchRecipesStatus;
  const fetchSelectedRecipesErrorMessage =
    errorCtx.states.fetchSelectedRecipeErrorMessage;
  const fetchFoundRecipesErrorMessage = errorCtx.states.fetchRecipesErrorMessage;

  const closeFoundRecipes = () => {
    if (foundRecipesControllerState) {
      stylesCtx.functions.changeFoundRecipesControllerState(false);
    }
  };

  const recipeData = useFetchSelectedRecipe();

  if (recipeId !== undefined) {
    pageTitle = `Forkify | ${recipeData.title}`;
  }

  // @ts-ignore
  const isRecipeFromUser = recipeData.key !== undefined;

  useEffect(() => {
    const transformedIngredients = ingredients.map((ingredient) => {
      return {
        ...ingredient,
        quantity: (ingredient.quantity =
          (ingredient.quantity * servings.newServings) / servings.oldServings),
      };
    });
    setIngredients(transformedIngredients);
  }, [servings]);

  useEffect(() => {
    setServings({
      newServings: recipeData.servings,
      oldServings: recipeData.servings,
    });
    setIngredients(recipeData.ingredients);
  }, [recipeData.servings, recipeData.ingredients]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <section
        className={`${classes.body} ${
          foundRecipesControllerState &&
          !fetchFoundRecipesHasError &&
          classes["found-recipes-open"]
        }`}
        onClick={closeFoundRecipes}
      >
        {fetchSelectedRecipesHasError && (
          <span
            className={`${classes["fetch-selected-recipe-error-message"]} ${classes["error-message"]}`}
          >
            {fetchSelectedRecipesErrorMessage}
          </span>
        )}
        {fetchFoundRecipesHasError && (
          <span
            className={`${classes["fetch-found-recipes-error-message"]} ${classes["error-message"]}`}
          >
            {fetchFoundRecipesErrorMessage}
          </span>
        )}
        {recipeId === undefined && (
          <span className={classes["starting-message"]}>
            <BsEmojiSmile className={classes["starting-message-emoji"]} />
            Start by searching for a recipe or an ingredient. Have fun!
          </span>
        )}
        {isSelectedRecipeLoading && !fetchSelectedRecipesHasError && (
          <LinearProgress className={classes["loading-bar"]} />
        )}

        {recipeData.image !== "" && recipeId !== undefined && (
          <>
            {isRecipeFromUser && (
              <BiUserCircle className={classes["user-recipe-mark"]} />
            )}
            <ImageAndTitle image={recipeData.image} title={recipeData.title} />
            <RecipeDetails
              cookingTime={recipeData.cookingTime}
              servings={servings.newServings}
              image={recipeData.image}
              publisher={recipeData.publisher}
              title={recipeData.title}
              id={recipeData.id}
              // @ts-ignore
              recipeKey={recipeData.key}
              changeServings={(servings: {
                newServings: number;
                oldServings: number;
              }) =>
                setServings({
                  newServings: servings.newServings,
                  oldServings: servings.oldServings,
                })
              }
            />
            <RecipeIngredients
              ingredients={ingredients}
              id={recipeData.id}
              source={recipeData.source}
            />
            <HowToCookIt
              source={recipeData.source}
              recipeKey={isRecipeFromUser}
            />
          </>
        )}
      </section>
    </>
  );
};

export default SelectedRecipe;
