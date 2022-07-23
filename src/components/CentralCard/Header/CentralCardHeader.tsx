import classes from "./CentralCardHeader.module.css";

import SearchBar from "./HeaderComponents/SearchBar";
import AddRecipe from "./HeaderComponents/AddRecipe";
import Bookmarks from "./HeaderComponents/Bookmarks";

const CentralCardHeader = () => {
  return (
    <header className={classes.header}>
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
  );
};

export default CentralCardHeader;
