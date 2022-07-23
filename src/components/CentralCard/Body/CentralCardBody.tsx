import classes from "./CentralCardBody.module.css";

import Footer from "./Footer/Footer";
import FoundRecipes from "./FoundRecipes/FoundRecipes";
import SelectedRecipe from "./SelectedRecipe/SelectedRecipe";

const CentralCardBody = () => {

  return (
    <div className={classes.body}>
      <FoundRecipes />
      <SelectedRecipe />
      <Footer />
    </div>
  );
};

export default CentralCardBody;
