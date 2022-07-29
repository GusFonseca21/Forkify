import classes from "./HowToCookIt.module.css";

import { GiClick } from "react-icons/gi";

const HowToCookIt: React.FC<{ source: string }> = (props) => {
  return (
    <div className={classes["how-to-cook-it"]}>
      <h3 className={classes["how-to-title"]}>HOW TO COOK IT</h3>

      <p className={classes["how-to-paragraph"]}>
        This recipe was carefully designed and tested by <b>Simply Recipes</b>.
        Please check out directions at their website.
      </p>
      <p className={classes["how-to-paragraph"]}> </p>
      <a
        className={classes["directions-button"]}
        href={props.source}
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
