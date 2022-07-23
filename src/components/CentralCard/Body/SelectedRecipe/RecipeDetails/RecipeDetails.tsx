import React, { useContext } from "react";

import { StylesContext } from "../../../../store/styles-context";

import classes from "./RecipeDetails.module.css";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill, BsClock } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";

const RecipeDetails: React.FC<{ cookingTime: number; servings: number }> = (
  props
) => {
  const stylesCtx = useContext(StylesContext);

  const bookmarkButtonHandler = () => {
    stylesCtx.changeState("bookmarkRecipeButton");
  };
  return (
    <div className={classes["recipe-details"]}>
      <div className={classes["timing-and-servings"]}>
        <div className={classes.timing}>
          <BsClock className={classes["timing-icon"]} />
          <span>
            <b className={classes["text-highlighted"]}>{props.cookingTime}</b>{" "}
            minutes
          </span>
        </div>
        <div className={classes.servings}>
          <span className={classes["servings-span"]}>
            <IoPeopleOutline className={classes["servings-icon"]} />
            <b className={classes["text-highlighted"]}>{props.servings}</b>{" "}
            servings
          </span>
          <div className={classes["servings-buttons"]}>
            <AiOutlinePlusCircle className={classes.plus} />
            <AiOutlineMinusCircle className={classes.minus} />
          </div>
        </div>
      </div>
      <div className={classes.bookmark} onClick={bookmarkButtonHandler}>
        {stylesCtx.state.bookmarkRecipeState ? (
          <BsFillBookmarkFill />
        ) : (
          <BsBookmark />
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
