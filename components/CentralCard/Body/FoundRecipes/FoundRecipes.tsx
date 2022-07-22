import React, { useState } from "react";

import classes from "./FoundRecipes.module.css";
import Recipe from "./Recipe";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const FoundRecipes = () => {
  const [foundRecipesHidden, setFoundRecipesHidden] = useState(false);

  const hideShowFoundRecipesHandler = () => {
    if (!foundRecipesHidden) {
      setFoundRecipesHidden(true);
    }
    if (foundRecipesHidden) {
      setFoundRecipesHidden(false);
    }
  };
  return (
    <div className={classes["found-recipes"]}>
      {!foundRecipesHidden ? (
        <AiFillCaretLeft
          className={classes["hide-show-found-recipes-button"]}
          onClick={hideShowFoundRecipesHandler}
        />
      ) : (
        <AiFillCaretRight
          className={classes["hide-show-found-recipes-button"]}
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
