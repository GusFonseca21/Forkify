import React, { useContext, useState } from "react";

import { StylesContext } from "../../../store/styles-context";

import classes from "./AddRecipeModal.module.css";

import { AiOutlineCloudUpload, AiOutlineClose } from "react-icons/ai";
import { uploadNewRecipe } from "../../../../helpers/helpers";

const initialRecipeValues = {
  title: "",
  url: "",
  imageUrl: "",
  publisher: "",
  prepTime: "",
  servings: "",
  ingredient1: "",
  ingredient2: "",
  ingredient3: "",
  ingredient4: "",
  ingredient5: "",
  ingredient6: "",
};

const AddRecipeModal = () => {
  const [newRecipeState, setNewRecipeState] = useState(initialRecipeValues);
  const [uploadStatus, setUploadStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState(initialRecipeValues);
  const [newRecipeObj, setNewRecipeObj] = useState({});

  const stylesCtx = useContext(StylesContext);

  const addRecipeButtonState = stylesCtx.state.addRecipeHeaderState;
  const uploadButtonState = stylesCtx.state.uploadRecipeButtonState;

  const closeModalHandler = () => {
    stylesCtx.changeState("addRecipeHeader");
    setUploadStatus(false);
    setErrorMessage("");
    setInputValue(initialRecipeValues);
  };

  const formButtonClickHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    stylesCtx.clickAnimationUploadButton();

    const uploadRecipe = await uploadNewRecipe(newRecipeObj);

    if (uploadRecipe.status === "fail") {
      setUploadStatus(false);
      setErrorMessage("Please, fill all the input fields correctly.");
    }

    if (uploadRecipe.status === "success") {
      setUploadStatus(true);
      setNewRecipeObj({});
    }
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setInputValue({ ...inputValue, [name]: value });

    setNewRecipeState({ ...newRecipeState, [name]: value });

    const prevNewRecipeIngredients = [
      transformIngredients(newRecipeState.ingredient1),
      transformIngredients(newRecipeState.ingredient2),
      transformIngredients(newRecipeState.ingredient3),
      transformIngredients(newRecipeState.ingredient4),
      transformIngredients(newRecipeState.ingredient5),
      transformIngredients(newRecipeState.ingredient6),
    ];

    const newRecipeIngredients = prevNewRecipeIngredients.filter(
      (ingredient) => {
        return (
          ingredient.description !== "" && ingredient.description !== undefined
        );
      }
    );

    const newRecipe = {
      title: newRecipeState.title,
      source_url: newRecipeState.url,
      image_url: newRecipeState.imageUrl,
      publisher: newRecipeState.publisher,
      cooking_time: +newRecipeState.prepTime,
      servings: +newRecipeState.servings,
      ingredients: newRecipeIngredients,
    };

    setNewRecipeObj(newRecipe);
  };

  const transformIngredients = (input: string) => {
    const arrayOfIngredients = input!.replaceAll(" ", "").split(",");

    const objectOfIngredients = {
      quantity: arrayOfIngredients[0],
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
        {uploadStatus ? (
          <div className={classes["successfull-upload"]}>
            <AiOutlineClose
              className={classes["close-card-icon"]}
              onClick={closeModalHandler}
            />
            <span>Your recipe has been uploaded successfully!</span>
          </div>
        ) : (
          <>
            {!uploadStatus && (
              <span className={classes["error-message"]}>{errorMessage}</span>
            )}

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
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Ex: Pepperoni Pizza"
                  value={inputValue.title}
                  onChange={inputChangeHandler}
                />
                <label htmlFor="url">Recipe URL</label>
                <input
                  type="text"
                  id="url"
                  name="url"
                  placeholder="Ex: https://www.recipes.com"
                  value={inputValue.url}
                  onChange={inputChangeHandler}
                />
                <label htmlFor="imageUrl">Image URL</label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Ex: https:// ... /image.jpg"
                  value={inputValue.imageUrl}
                  onChange={inputChangeHandler}
                />
                <label htmlFor="publisher">Publisher</label>
                <input
                  type="text"
                  id="publisher"
                  name="publisher"
                  placeholder="Ex: Good Recipes"
                  value={inputValue.publisher}
                  onChange={inputChangeHandler}
                />
                <label htmlFor="prepTime">Prep Time</label>
                <input
                  type="number"
                  id="prepTime"
                  name="prepTime"
                  placeholder="Ex: 60 (in minutes)"
                  value={inputValue.prepTime}
                  onChange={inputChangeHandler}
                />
                <label htmlFor="servings">Servings</label>
                <input
                  type="number"
                  id="servings"
                  name="servings"
                  placeholder="Ex: 4 (persons)"
                  value={inputValue.servings}
                  onChange={inputChangeHandler}
                />
              </div>
              <div className={classes["form-column"]}>
                <h3 className={classes.heading}>INGREDIENTS</h3>

                <label htmlFor="ingredient1">Ingredient 1</label>
                <input
                  type="text"
                  id="ingredient1"
                  name="ingredient1"
                  placeholder="Quantity, Unit, Description"
                  value={inputValue.ingredient1}
                  onChange={inputChangeHandler}
                />
                <label htmlFor="ingredient2">Ingredient 2</label>
                <input
                  type="text"
                  id="ingredient2"
                  name="ingredient2"
                  placeholder="Ex: 4, cups, of water"
                  value={inputValue.ingredient2}
                  onChange={inputChangeHandler}
                />
                <label htmlFor="ingredient3">Ingredient 3</label>
                <input
                  type="text"
                  id="ingredient3"
                  name="ingredient3"
                  placeholder="Or: 4, , eggs"
                  value={inputValue.ingredient3}
                  onChange={inputChangeHandler}
                />
                <label htmlFor="ingredient4">Ingredient 4</label>
                <input
                  type="text"
                  id="ingredient4"
                  name="ingredient4"
                  placeholder="Or: , , salt"
                  value={inputValue.ingredient4}
                  onChange={inputChangeHandler}
                />
                <label htmlFor="ingredient5">Ingredient 5</label>
                <input
                  type="text"
                  id="ingredient5"
                  name="ingredient5"
                  placeholder="Must have a description"
                  value={inputValue.ingredient5}
                  onChange={inputChangeHandler}
                />
                <label htmlFor="ingredient6">Ingredient 6</label>
                <input
                  type="text"
                  id="ingredient6"
                  name="ingredient6"
                  placeholder="Blank input to ignore ingredient"
                  value={inputValue.ingredient6}
                  onChange={inputChangeHandler}
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
          </>
        )}
      </div>
    </>
  );
};

export default AddRecipeModal;
