import React, { useContext } from "react";

import { StateContext } from "../../store/state-context";

import classes from "./CentralCardBody.module.css";
import Footer from "./Footer/Footer";

import FoundRecipes from "./FoundRecipes/FoundRecipes";
import SelectedRecipe from "./SelectedRecipe/SelectedRecipe";

const CentralCardBody = () => {
  const stateCtx = useContext(StateContext);

  return (
    <div className={classes.body}>
      {/* {stateCtx.state.foundRecipesControllerState && <FoundRecipes />} */}
      <FoundRecipes />
      <SelectedRecipe />
      <Footer />
    </div>
  );
};

export default CentralCardBody;
