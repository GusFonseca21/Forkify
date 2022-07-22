import classes from "./RecipeIngredients.module.css";

import HowToCookIt from "./HowToCookIt/HowToCookIt";

import { AiOutlineCheck } from "react-icons/ai";

const DUMMY_INGREDIENTS = [
  { quantity: "1 1/2 tsp. ", description: "dry active yeast" },
  { quantity: "1 1/2 tsp. ", description: "dry active yeast" },
  { quantity: "1 1/2 tsp. ", description: "dry active yeast" },
  { quantity: "1 1/2 tsp. ", description: "dry active yeast" },
  { quantity: "1 1/2 tsp. ", description: "dry active yeast" },
  { quantity: "1 1/2 tsp. ", description: "dry active yeast" },
  { quantity: "1 1/2 tsp. ", description: "dry active yeast" },
  { quantity: "1 1/2 tsp. ", description: "dry active yeast" },
  { quantity: "1 1/2 tsp. ", description: "dry active yeast" },
  { quantity: "1 1/2 tsp. ", description: "dry active yeast" },
  { quantity: "1 1/2 tsp. ", description: "dry active yeast" },
  { quantity: "1 1/2 tsp. ", description: "dry active yeast" },
  { quantity: "1 1/2 tsp. ", description: "dry active yeast" },
  { quantity: "1 1/2 tsp. ", description: "dry active yeast" },
  { quantity: "20 latas", description: "de sal" },
  { quantity: "112 pacotes", description: "de fandangos" },
];


const RecipeIngredients = () => {
  return (
    <div className={classes.body}>
      <h2 className={classes["recipe-ingredients-title"]}>
        RECIPE INGREDIENTS
      </h2>
      <div className={classes["ingredients"]}>
        <div key={Date()} className={classes["ingredients-list"]}>
          {DUMMY_INGREDIENTS.map((ingredient) => (
            <div className={classes["single-ingredient"]}>
              <div className={classes["check-icon"]}>
                <AiOutlineCheck />
              </div>
              <div className={classes["ingredient-quantity"]}>
                {ingredient.quantity}
              </div>
              &nbsp;
              <div className={classes["ingredient-description"]}>
                {ingredient.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <HowToCookIt />
    </div>
  );
};

export default RecipeIngredients;
