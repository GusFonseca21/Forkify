import { useEffect } from "react";

import classes from "./CentralCard.module.css";

import CentralCardHeader from "./Header/CentralCardHeader";
import CentralCardBody from "./Body/CentralCardBody";

const CentralCard = () => {
  useEffect(() => {
    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);

  return (
    <div className={classes.card}>
      <CentralCardHeader />
      <CentralCardBody />
    </div>
  );
};

export default CentralCard;
