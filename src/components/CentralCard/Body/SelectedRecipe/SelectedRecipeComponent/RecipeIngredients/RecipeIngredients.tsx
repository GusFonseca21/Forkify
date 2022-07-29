import classes from "./RecipeIngredients.module.css";

import HowToCookIt from "./HowToCookIt/HowToCookIt";

import { AiOutlineCheck } from "react-icons/ai";

const RecipeIngredients: React.FC<{
  ingredients: {
    quantity: number;
    unit: string;
    description: string;
  }[];
  source: string;
  id: string;
}> = (props) => {
  return (
    <div className={classes.body}>
      <h2 className={classes["recipe-ingredients-title"]}>
        RECIPE INGREDIENTS
      </h2>
      <div className={classes["ingredients"]}>
        <div key={props.id} className={classes["ingredients-list"]}>
          {props.ingredients.map((ingredient) => (
            <div key={props.id} className={classes["single-ingredient"]}>
              <i className={classes["check-icon"]}>
                <AiOutlineCheck />
              </i>
              <span className={classes["ingredient"]}>
                {`${
                  ingredient.quantity !== null ? ` ${ingredient.quantity}` : ""
                } ${ingredient.unit} ${ingredient.description}`}
              </span>
            </div>
          ))}
        </div>
      </div>
      <HowToCookIt source={props.source} />
    </div>
  );
};

export default RecipeIngredients;
