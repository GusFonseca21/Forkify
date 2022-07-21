import classes from "./Background.module.css";

import AddRecipeModal from "./AddRecipeModal/AddRecipeModal";

const Background: React.FC<{ children: React.ReactNode }> = (props) => {
  const teste: boolean = false;
  return (
    <>
      {teste ? <AddRecipeModal /> : ""}
      <div className={classes.body}>{props.children}</div>
    </>
  );
};

export default Background;
