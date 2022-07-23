import classes from "./CentralCard.module.css";

import CentralCardHeader from "./Header/CentralCardHeader";
import CentralCardBody from "./Body/CentralCardBody";

const CentralCard = () => {

  return (
    <div className={classes.card}>
      <CentralCardHeader />
      <CentralCardBody />
    </div>
  );
};

export default CentralCard;
