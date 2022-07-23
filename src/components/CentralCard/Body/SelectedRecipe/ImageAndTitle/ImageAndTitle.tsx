import classes from "./ImageAndTitle.module.css";

const ImageAndTitle = () => {
  return (
    <div className={classes["image-and-title"]}>
      <img
        className={`${classes["recipe-image"]} ${classes["image-overlay"]} `}
        src="/pizza.jpg"
        alt="Imagem da receita"
      />
      <h2 className={classes["recipe-title"]}>
        CAULIFLOWER PIZZA CRUST (WITH BBQ CHICKEN PIZZA)
      </h2>
    </div>
  );
};

export default ImageAndTitle;
