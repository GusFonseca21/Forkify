import React from "react";
import classes from "./ImageAndTitle.module.css";

const ImageAndTitle: React.FC<{image: string, title: string}> = (props) => {
  return (
    <div className={classes["image-and-title"]}>
      <img
        className={`${classes["recipe-image"]} ${classes["image-overlay"]} `}
        src={props.image}
        alt="Imagem da receita"
      />
      <h2 className={classes["recipe-title"]}>{props.title}</h2>
    </div>
  );
};

export default ImageAndTitle;
