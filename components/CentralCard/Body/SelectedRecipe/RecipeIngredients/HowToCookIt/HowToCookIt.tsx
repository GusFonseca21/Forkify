import classes from "./HowToCookIt.module.css";

import { GiClick } from "react-icons/gi";

const HowToCookIt = () => {
  return (
    <div className={classes["how-to-cook-it"]}>
      <h3 className={classes["how-to-title"]}>HOW TO COOK IT</h3>

      <p className={classes["how-to-paragraph"]}>
        This recipe was carefully designed and tested by <b>Simply Recipes</b>.
      </p>
      <p className={classes["how-to-paragraph"]}>
        {" "}
        Please check out directions at their website.
      </p>
      <a
        className={classes["directions-button"]}
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        DIRECTIONS
        <i className={classes["directions-icon"]}>
          {" "}
          <GiClick />
        </i>
      </a>
    </div>
  );
};

export default HowToCookIt;
