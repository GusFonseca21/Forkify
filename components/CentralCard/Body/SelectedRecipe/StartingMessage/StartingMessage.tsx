import classes from "./StartingMessage.module.css";

import { BsEmojiSmile } from "react-icons/bs";

const StartingMessage = () => {
  return (
    <div className={classes["starting-message"]}>
      <BsEmojiSmile className={classes["starting-message-emoji"]} />
      <p>
        Start by searching for a recipe or an ingredient.
        <br /> Have fun!
      </p>
    </div>
  );
};

export default StartingMessage;
