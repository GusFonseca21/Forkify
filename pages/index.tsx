import type { NextPage } from "next";

import Background from "../components/Background/Background";
import CentralCard from "../components/CentralCard/CentralCard";

const Home: NextPage = () => {
  return (
    <Background>
      <CentralCard />
    </Background>
  );
};

export default Home;
