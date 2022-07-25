import { useContext, useEffect } from "react";

import { StylesContext } from "../../store/styles-context";

import classes from "./CentralCardHeader.module.css";

import SearchBar from "./HeaderComponents/SearchBar";
import AddRecipe from "./HeaderComponents/AddRecipe";
import Bookmarks from "./HeaderComponents/Bookmarks";
const CentralCardHeader = () => {
  const stylesCtx = useContext(StylesContext);

  const closeFoundRecipes = () => {
    if (stylesCtx.state.foundRecipesControllerState) {
      stylesCtx.changeState("foundRecipesController");
    }
  };

  return (
    <div onClick={closeFoundRecipes}>
      <header
        className={`${classes.header} ${
          stylesCtx.state.foundRecipesControllerState &&
          classes["found-recipes-open"]
        }`}
      >
        <img src="/logo.png" className={classes.logo} alt="Forkify logo" />
        <img
          src="logo-simples.png"
          className={classes["logo-simples"]}
          alt="Forkify logo"
        />
        <SearchBar />
        <div className={classes["header-buttons"]}>
          <AddRecipe />
          <Bookmarks />
        </div>
      </header>
    </div>
  );
};

export default CentralCardHeader;
