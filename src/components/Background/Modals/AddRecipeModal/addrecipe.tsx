import React, { useContext, useRef } from "react";

import { StylesContext } from "../../../store/styles-context";

import classes from "./AddRecipeModal.module.css";

import { AiOutlineCloudUpload, AiOutlineClose } from "react-icons/ai";

const AddRecipeModal = () => {
  const stylesCtx = useContext(StylesContext);

  const titleRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const imageUrlRef = useRef<HTMLInputElement>(null);
  const publisherRef = useRef<HTMLInputElement>(null);
  const prepTimeRef = useRef<HTMLInputElement>(null);
  const servingsRef = useRef<HTMLInputElement>(null);

  const ingredient1Ref = useRef<HTMLInputElement>(null);
  const ingredient2Ref = useRef<HTMLInputElement>(null);
  const ingredient3Ref = useRef<HTMLInputElement>(null);
  const ingredient4Ref = useRef<HTMLInputElement>(null);
  const ingredient5Ref = useRef<HTMLInputElement>(null);
  const ingredient6Ref = useRef<HTMLInputElement>(null);

  const addRecipeButtonState = stylesCtx.state.addRecipeHeaderState;
  const uploadButtonState = stylesCtx.state.uploadRecipeButtonState;

  const closeModalHandler = () => {
    stylesCtx.changeState("addRecipeHeader");
  };

  const formButtonClickHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    

    stylesCtx.clickAnimationUploadButton();

    const newRecipe = {
      title: titleRef.current?.value,
      url: urlRef.current?.value,
      imageUrl: imageUrlRef.current?.value,
      publisher: publisherRef.current?.value,
      prepTime: prepTimeRef.current?.value,
      servings: servingsRef.current?.value,
      ingredients: {
        ingredient1: transformIngredients(ingredient1Ref.current?.value),
        ingredient2: transformIngredients(ingredient2Ref.current?.value),
        ingredient3: transformIngredients(ingredient3Ref.current?.value),
        ingredient4: transformIngredients(ingredient4Ref.current?.value),
        ingredient5: transformIngredients(ingredient5Ref.current?.value),
        ingredient6: transformIngredients(ingredient6Ref.current?.value),
      },
    };


  };

  const transformIngredients = (input: string | undefined) => {
    const arrayOfIngredients = input!.split(",");

    const objectOfIngredients = {
      quantity: +arrayOfIngredients[0],
      unit: arrayOfIngredients[1],
      description: arrayOfIngredients[2],
    };
    return objectOfIngredients;
  };

  return (
    <>
      <div
        className={`${classes["add-recipe-overlay"]} ${
          addRecipeButtonState && classes["show-card"]
        }`}
        onClick={closeModalHandler}
      ></div>
      <div
        className={`${classes["add-recipe-card"]} ${
          addRecipeButtonState && classes["show-card"]
        }`}
      >
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
            <input type="text" id="title" name="title" ref={titleRef} />
            <label htmlFor="url">Recipe URL</label>
            <input type="text" id="url" name="url" ref={urlRef} />
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              ref={imageUrlRef}
            />
            <label htmlFor="publisher">Publisher</label>
            <input
              type="text"
              id="publisher"
              name="publisher"
              ref={publisherRef}
            />
            <label htmlFor="prepTime">Prep Time</label>
            <input
              type="number"
              id="prepTime"
              name="prepTime"
              ref={prepTimeRef}
            />
            <label htmlFor="servings">Servings</label>
            <input
              type="number"
              id="servings"
              name="servings"
              ref={servingsRef}
            />
          </div>
          <div className={classes["form-column"]}>
            <h3 className={classes.heading}>INGREDIENTS</h3>

            <label htmlFor="ingredient1">Ingredient 1</label>
            <input
              type="text"
              id="ingredient1"
              name="ingredient1"
              ref={ingredient1Ref}
            />
            <label htmlFor="ingredient2">Ingredient 2</label>
            <input
              type="text"
              id="ingredient2"
              name="ingredient2"
              ref={ingredient2Ref}
            />
            <label htmlFor="ingredient3">Ingredient 3</label>
            <input
              type="text"
              id="ingredient3"
              name="ingredient3"
              ref={ingredient3Ref}
            />
            <label htmlFor="ingredient4">Ingredient 4</label>
            <input
              type="text"
              id="ingredient4"
              name="ingredient4"
              ref={ingredient4Ref}
            />
            <label htmlFor="ingredient5">Ingredient 5</label>
            <input
              type="text"
              id="ingredient5"
              name="ingredient5"
              ref={ingredient5Ref}
            />
            <label htmlFor="ingredient6">Ingredient 6</label>
            <input
              type="text"
              id="ingredient6"
              name="ingredient6"
              ref={ingredient6Ref}
            />
          </div>
          <button
            className={`${classes["form-button"]} ${
              uploadButtonState && classes["form-button-click-animation"]
            }`}
          >
            <AiOutlineCloudUpload className={classes["form-button-icon"]} />
            UPLOAD
          </button>
        </form>
      </div>
    </>
  );
};

export default AddRecipeModal;
