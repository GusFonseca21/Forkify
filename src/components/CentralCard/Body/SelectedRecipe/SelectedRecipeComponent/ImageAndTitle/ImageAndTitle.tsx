import Image from "next/image";

import classes from "./ImageAndTitle.module.css";

const ImageAndTitle: React.FC<{ image: string; title: string }> = (props) => {
  const defaultImage =
    "https://images.unsplash.com/photo-1499028203764-8669cfd05719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

  const imgError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = defaultImage;
  };
  return (
    <div className={classes["image-and-title"]}>
      <img
        className={`${classes["recipe-image"]} ${classes["image-overlay"]} `}
        src={props.image}
        onError={imgError}
        alt="Recipe Photo"
      />
      <h2 className={classes["recipe-title"]}>{props.title}</h2>
    </div>
  );
};

export default ImageAndTitle;
