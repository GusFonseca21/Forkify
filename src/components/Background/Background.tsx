import React, { useContext } from "react";

import { StylesContext } from "../store/styles-context";

import classes from "./Background.module.css";

import AddRecipeModal from "./AddRecipeModal/AddRecipeModal";

const Background: React.FC<{ children: React.ReactNode }> = (props) => {
  const stylesCtx = useContext(StylesContext)

  const teste: boolean = false;
  return (
    <>
      <AddRecipeModal />
      <div className={classes.body}>{props.children}</div>
    </>
  );
};

export default Background;
