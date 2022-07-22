
import classes from "./CentralCardHeader.module.css";

import logo from "../../../images/logo.png";
import logoSimples from "../../../images/logo-simples.svg.png";

import SearchBar from "./HeaderComponents/SearchBar";
import AddRecipe from "./HeaderComponents/AddRecipe";
import Bookmarks from "./HeaderComponents/Bookmarks";

const CentralCardHeader = () => {
  return (
    <header className={classes.header}>

      <img src={logo.src} className={classes.logo} alt="Forkify logo" />
      <img
        src={logoSimples.src}
        className={classes["logo-simples"]}
        alt="Forkify logo"
      />
      <SearchBar />
      <div className={classes["header-buttons"]}>
        <AddRecipe />
        <Bookmarks />
      </div>
    </header>
  );
};

export default CentralCardHeader;
