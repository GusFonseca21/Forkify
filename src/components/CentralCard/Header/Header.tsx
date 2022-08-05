import { useContext, useEffect } from "react";

import Link from "next/link";

import { StylesContext } from "../../store/styles-context";

import classes from "./Header.module.css";

import SearchBar from "./HeaderComponents/SearchBar";
import AddRecipe from "./HeaderComponents/AddRecipe";
import Bookmarks from "./HeaderComponents/Bookmarks";

import LinearProgress from "@mui/material/LinearProgress";
const Header = () => {
  const stylesCtx = useContext(StylesContext);

  let isWidthLessThan1000px: boolean = false;

  if (typeof window !== "undefined") {
    const { innerWidth } = window;
    isWidthLessThan1000px = innerWidth < 1000;
  }

  const foundRecipesControllerState =
    stylesCtx.state.foundRecipesControllerState;

  const isFoundRecipesLoading = stylesCtx.state.foundRecipesLoadingState;
  const closeFoundRecipes = () => {
    if (foundRecipesControllerState) {
      stylesCtx.changeFoundRecipesControllerState(false);
    }
  };

  return (
    <header className={classes.header} onClick={closeFoundRecipes}>
      <Link href="/">
        <img src="/logo.png" className={classes.logo} alt="Forkify logo" />
      </Link>
      <Link href="/">
        <img
          src="logo-simples.png"
          className={classes["logo-simples"]}
          alt="Forkify logo"
        />
      </Link>
      <SearchBar />
      <div className={classes["header-buttons"]}>
        <AddRecipe />
        <Bookmarks />
      </div>
      {isFoundRecipesLoading && isWidthLessThan1000px && (
        <LinearProgress className={classes["loading-bar"]} />
      )}
    </header>
  );
};

export default Header;
