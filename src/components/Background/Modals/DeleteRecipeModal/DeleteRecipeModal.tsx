import { useContext } from "react";

import { useRouter } from "next/router";

import { StylesContext } from "../../../store/styles-context";

import classes from "./DeleteRecipeModal.module.css";

import { BsCheckCircle } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";
import { FetchRecipesContext } from "../../../store/fetch-recipes-context";

const DeleteRecipeModal = () => {

  const { query, replace } = useRouter() || { query: { text: "" } };

  const recipeId = query.id;

  const stylesCtx = useContext(StylesContext);
  const fetchCtx = useContext(FetchRecipesContext);

  const wasDeleteButtonClicked = stylesCtx.state.deleteRecipeButtonState;

  const closeModalHandler = () => {
    stylesCtx.functions.changeDeleteRecipeButton(false);
  };

  const declineButtonHandler = () => {
    stylesCtx.functions.changeDeleteRecipeButton(false);
  };

  const accpetButtonHandler = async () => {
    replace("/");
    await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}?key=4871af3e-9c8a-4b50-b116-b7298ada9115`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    stylesCtx.functions.changeDeleteRecipeButton(false);

    if (typeof window !== "undefined") {
      const bookmarkedRecipesData = JSON.parse(
        localStorage.getItem("data") || "[]"
      );

      const dataWithRemovedRecipe = bookmarkedRecipesData.filter(
        (recipe: any) => recipe.id !== recipeId
      );

      localStorage.setItem("data", JSON.stringify(dataWithRemovedRecipe));
      stylesCtx.functions.changeBookmarkedRecipeState(false);
    }
    const inputText = fetchCtx.getSearchBarInputText;
    fetchCtx.sendSearchBarInputText(inputText)

    stylesCtx.functions.showConfirmDeleteRecipe();
  };

  return (
    <>
      <div
        className={`${classes["delete-recipe-overlay"]} ${
          wasDeleteButtonClicked && classes["show-card"]
        }`}
        onClick={closeModalHandler}
      ></div>
      <div
        className={`${classes["delete-recipe-card"]} ${
          wasDeleteButtonClicked && classes["show-card"]
        }`}
      >
        <div className={classes["delete-card-content"]}>
          <h2>Are you sure you want to delete this recipe? </h2>
          <div className={classes["delete-card-buttons"]}>
            <BsCheckCircle
              className={classes["button"]}
              onClick={accpetButtonHandler}
            />
            <BsXCircle
              className={`${classes["button"]}  ${classes["decline-button"]}`}
              onClick={declineButtonHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteRecipeModal;
