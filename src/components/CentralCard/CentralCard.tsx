import classes from "./CentralCard.module.css";

import CentralCardHeader from "./Header/Header";
import CentralCardBody from "./Body/Body";
import React from "react";

const CentralCard: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default CentralCard;
