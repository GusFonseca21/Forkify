import React from "react";

import classes from "./Body.module.css";

const Body: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className={classes.body}>{props.children}</div>;
};

export default Body;
