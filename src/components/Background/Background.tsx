import React, { useContext } from "react";

import { StateContext } from "../store/state-context";

import classes from "./Background.module.css";

import AddRecipeModal from "./AddRecipeModal/AddRecipeModal";

const Background: React.FC<{ children: React.ReactNode }> = (props) => {
  const stateCtx = useContext(StateContext)

  const teste: boolean = false;
  return (
    <>
      <AddRecipeModal />
      <div className={classes.body}>{props.children}</div>
    </>
  );
};

export default Background;
