import { useState } from "react";

import classes from "./RecipeDetails.module.css";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill, BsClock } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";

const RecipeDetails = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const bookmarkButtonHandler = () => {
    if (!isBookmarked) {
      setIsBookmarked(true);
    }
    if (isBookmarked) {
      setIsBookmarked(false);
    }
  };
  return (
    <div className={classes["recipe-details"]}>
      <div className={classes["timing-and-servings"]}>
        <div className={classes.timing}>
          <BsClock className={classes["timing-icon"]} />
          <span>
            <b className={classes["text-highlighted"]}>75</b> minutes
          </span>
        </div>
        <div className={classes.servings}>
          <span className={classes["servings-span"]}>
          <IoPeopleOutline className={classes["servings-icon"]} />
            <b className={classes["text-highlighted"]}>4</b> servings
          </span>
          <div className={classes["servings-buttons"]}>
            <AiOutlinePlusCircle className={classes.plus} />
            <AiOutlineMinusCircle className={classes.minus} />
          </div>
        </div>
      </div>
      <div className={classes.bookmark} onClick={bookmarkButtonHandler}>
        {isBookmarked ? <BsFillBookmarkFill /> : <BsBookmark />}
      </div>
    </div>
  );
};

export default RecipeDetails;
