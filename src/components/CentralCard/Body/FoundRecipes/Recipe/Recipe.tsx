import React, { useContext } from "react";

import { FetchRecipesContext } from "../../../../store/fetch-recipes-context";

import classes from "./Recipe.module.css";

const Recipe: React.FC<{
  image: string;
  publisher: string;
  title: string;
  id: string;
}> = (props) => {
  const fetchCtx = useContext(FetchRecipesContext);

  const sendRecipeId = () => {
    fetchCtx.getId(props.id);
  };

  return (
    <div className={classes.recipe} onClick={sendRecipeId}>
      <img src={props.image} className={classes["recipe-photo"]} />
      <div>
        <h3 className={classes["recipe-name"]}>{props.title}</h3>
        <p className={classes["recipe-origin"]}>{props.publisher}</p>
      </div>
    </div>
  );
};

export default Recipe;
