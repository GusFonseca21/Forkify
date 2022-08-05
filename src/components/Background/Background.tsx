import React, { useContext } from "react";

import classes from "./Background.module.css";

import AddRecipeModal from "./Modals/AddRecipeModal/AddRecipeModal";
import DeleteRecipeModal from "./Modals/DeleteRecipeModal/DeleteRecipeModal";

const Background: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <>
      <AddRecipeModal />
      <DeleteRecipeModal />
      <div className={classes.body}>{props.children}</div>
    </>
  );
};

export default Background;
