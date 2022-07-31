import React from "react";
import Background from "../components/Background/Background";
import Body from "../components/CentralCard/Body/Body";
import FoundRecipes from "../components/CentralCard/Body/FoundRecipes/FoundRecipes";
import SelectedRecipe from "../components/CentralCard/Body/SelectedRecipe/SelectedRecipe";
import SelectedRecipeComponents from "../components/CentralCard/Body/SelectedRecipe/SelectedRecipeComponent/SelectedRecipeComponents";
import CentralCard from "../components/CentralCard/CentralCard";
import Footer from "../components/CentralCard/Footer/Footer";
import Header from "../components/CentralCard/Header/Header";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Background>
      <CentralCard>
        <Header />
        <Body>
          <FoundRecipes />
          <SelectedRecipe />
        </Body>
        <Footer />
      </CentralCard>
    </Background>
  );
};

export default Layout;
