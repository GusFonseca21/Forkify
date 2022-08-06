import React from "react";

import classes from "./Body.module.css";
import FoundRecipes from "./FoundRecipes/FoundRecipes";
import SelectedRecipe from "./SelectedRecipe/SelectedRecipe";

const Body: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <main className={classes.body}>
      <FoundRecipes />
      <SelectedRecipe />
    </main>
  );
};

export default Body;
