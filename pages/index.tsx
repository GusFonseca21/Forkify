import type { NextPage } from "next";
import FoundRecipes from "../src/components/CentralCard/Body/FoundRecipes/FoundRecipes";
import SelectedRecipe from "../src/components/CentralCard/Body/SelectedRecipe/SelectedRecipe";
import Header from "../src/components/CentralCard/Header/Header";

const Home: NextPage = () => {

  return (
    <>
      <FoundRecipes />
      <SelectedRecipe />
    </>
  );
};

export default Home;
