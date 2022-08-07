import type { NextPage } from "next";
import Head from "next/head";
import FoundRecipes from "../src/components/CentralCard/Body/FoundRecipes/FoundRecipes";
import SelectedRecipe from "../src/components/CentralCard/Body/SelectedRecipe/SelectedRecipe";

const Home: NextPage = () => {
  return (
    <>
      <Head>
       
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <FoundRecipes />
      <SelectedRecipe />
    </>
  );
};

export default Home;
