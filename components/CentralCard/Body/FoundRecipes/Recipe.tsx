import classes from "./Recipe.module.css";

import pizza from "../../../../images/teste/teste.jpg";

const Recipe = () => {
  return (
    <div className={classes.recipe}>
      <img src={pizza.src} className={classes["recipe-photo"]} />
      <div>
        <h3 className={classes["recipe-name"]}>CAULIFLOWER PIZZA CRUST (WITH BBQ CHICKEN PIZZA)</h3>
        <p className={classes["recipe-origin"]}>Class Recipe</p>
      </div>
    </div>
  );
};

export default Recipe;
