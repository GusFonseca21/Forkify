import { useContext } from "react";

import Link from "next/link";

import { StylesContext } from "../../store/styles-context";

import classes from "./Header.module.css";

import SearchBar from "./HeaderComponents/SearchBar";
import AddRecipe from "./HeaderComponents/AddRecipe";
import Bookmarks from "./HeaderComponents/Bookmarks";

import LinearProgress from "@mui/material/LinearProgress";
import { ErrorContext } from "../../store/error-context";
const Header = () => {
  const stylesCtx = useContext(StylesContext);

  const foundRecipesControllerState =
    stylesCtx.state.foundRecipesControllerState;

  const isFoundRecipesLoading = stylesCtx.state.foundRecipesLoadingState;
  const closeFoundRecipes = () => {
    if (foundRecipesControllerState) {
      stylesCtx.changeFoundRecipesControllerState(false);
    }
  };

  return (
    <div onClick={closeFoundRecipes}>
      <header className={classes.header}>
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
        {isFoundRecipesLoading && (
          <LinearProgress className={classes["loading-bar"]} />
        )}
      </header>
    </div>
  );
};

export default Header;
