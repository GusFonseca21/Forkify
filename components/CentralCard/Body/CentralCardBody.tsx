import classes from "./CentralCardBody.module.css";

import FoundRecipes from "./FoundRecipes/FoundRecipes";
import SelectedRecipe from "./SelectedRecipe/SelectedRecipe";

const CentralCardBody = () => {
  return (
    <div className={classes.body}>
      <FoundRecipes />
      <SelectedRecipe />
    </div>
  );
};

export default CentralCardBody;
