import type { NextPage } from "next";

import Background from "../src/components/Background/Background";
import CentralCard from "../src/components/CentralCard/CentralCard";

import StateContextProvider from "../src/components/store/styles-context";

const Home: NextPage = () => {
  return (
    <StateContextProvider>
      <Background>
        <CentralCard />
      </Background>
    </StateContextProvider>
  );
};

export default Home;
