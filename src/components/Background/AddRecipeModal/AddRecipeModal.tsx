import React, { useContext } from "react";

import { StateContext } from "../../store/state-context";

import classes from "./AddRecipeModal.module.css";

import { AiOutlineCloudUpload, AiOutlineClose } from "react-icons/ai";

const AddRecipeModal = () => {
  const stateCtx = useContext(StateContext);

  const DUMMY_BOOLEAN = false;

  const closeModalHandler = () => {
    stateCtx.changeState("addRecipeHeader");
  };

  const formButtonClickHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className={`${classes["add-recipe-overlay"]} ${
        stateCtx.state.addRecipeHeaderState && classes["show-card"]
      }`}
    >
      <div className={classes["add-recipe-card"]}>
        <AiOutlineClose
          className={classes["close-card-icon"]}
          onClick={closeModalHandler}
        />
        <form
          className={classes["add-recipe-form"]}
          onSubmit={formButtonClickHandler}
        >
          <div className={classes["form-column"]}>
            <h3 className={classes.heading}>RECIPE DATA</h3>

            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
            <label htmlFor="url">Recipe URL</label>
            <input type="text" id="url" name="url" />
            <label htmlFor="imageUrl">Image URL</label>
            <input type="text" id="imageUrl" name="imageUrl" />
            <label htmlFor="publisher">Publisher</label>
            <input type="text" id="publisher" name="publisher" />
            <label htmlFor="prepTime">Prep Time</label>
            <input type="number" id="prepTime" name="prepTime" />
            <label htmlFor="servings">Servings</label>
            <input type="number" id="servings" name="servings" />
          </div>
          <div className={classes["form-column"]}>
            <h3 className={classes.heading}>INGREDIENTS</h3>

            <label htmlFor="ingredient1">Ingredient 1</label>
            <input type="text" id="ingredient1" name="ingredient1" />
            <label htmlFor="ingredient2">Ingredient 2</label>
            <input type="text" id="ingredient2" name="ingredient2" />
            <label htmlFor="ingredient3">Ingredient 3</label>
            <input type="text" id="ingredient3" name="ingredient3" />
            <label htmlFor="ingredient4">Ingredient 4</label>
            <input type="text" id="ingredient4" name="ingredient4" />
            <label htmlFor="ingredient5">Ingredient 5</label>
            <input type="text" id="ingredient5" name="ingredient5" />
            <label htmlFor="ingredient6">Ingredient 6</label>
            <input type="text" id="ingredient6" name="ingredient6" />
          </div>
          <button
            className={`${classes["form-button"]} ${
              DUMMY_BOOLEAN ? classes["form-button-click-animation"] : ""
            }`}
          >
            <AiOutlineCloudUpload className={classes["form-button-icon"]} />
            UPLOAD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeModal;
