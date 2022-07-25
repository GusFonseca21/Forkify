import type { NextPage } from "next";

import Background from "../src/components/Background/Background";
import CentralCard from "../src/components/CentralCard/CentralCard";

import StateContextProvider from "../src/components/store/styles-context";
import FetchRecipesContextProvider from "../src/components/store/fetch-recipes-context";

const Home: NextPage = () => {
  return (
    <StateContextProvider>
      <FetchRecipesContextProvider>
        <Background>
          <CentralCard />
        </Background>
      </FetchRecipesContextProvider>
    </StateContextProvider>
  );
};

export default Home;
