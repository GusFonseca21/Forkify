import React, { useContext } from "react";

import { useRouter } from "next/router";

import { FetchRecipesContext } from "../../../../store/fetch-recipes-context";
import { StylesContext } from "../../../../store/styles-context";

import classes from "./Recipe.module.css";

import { BiUserCircle } from "react-icons/bi";

const Recipe: React.FC<{
  image: string;
  publisher: string;
  title: string;
  id: string;
  recipeKey: string;
}> = (props) => {
  const fetchCtx = useContext(FetchRecipesContext);
  const stylesCtx = useContext(StylesContext);

  const router = useRouter();

  const FetchSelectedRecipe = () => {
    fetchCtx.getId(props.id);
    router.push("/recipe/" + props.id);
    stylesCtx.changeFoundRecipesControllerState(false);
    stylesCtx.changeBookmarksHeaderState(false);
  };

  const defaultImage =
    "https://images.unsplash.com/photo-1499028203764-8669cfd05719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

  const imgError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = defaultImage;
  };


  return (
    <div className={classes.recipe} onClick={FetchSelectedRecipe}>
      <img
        src={props.image}
        className={classes["recipe-photo"]}
        onError={imgError}
        alt="Recipe Photo"
      />
      <div>
        <h3 className={classes["recipe-name"]}>{props.title}</h3>
        <p className={classes["recipe-origin"]}>{props.publisher}</p>
      </div>
      {props.recipeKey !== undefined && <BiUserCircle className={classes["user-recipe-mark"]} />}
    </div>
  );
};

export default Recipe;
