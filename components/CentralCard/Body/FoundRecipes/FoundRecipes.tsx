import React from "react";

import classes from "./FoundRecipes.module.css";
import Recipe from "./Recipe";
import Footer from "../Footer/Footer";

const FoundRecipes = () => {
  return (
    <div className={classes["found-recipes"]}>
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
