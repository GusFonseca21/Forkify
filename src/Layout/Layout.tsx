import React from "react";

import Head from "next/head";
import Background from "../components/Background/Background";
import Body from "../components/CentralCard/Body/Body";
import CentralCard from "../components/CentralCard/CentralCard";
import Footer from "../components/CentralCard/Footer/Footer";
import Header from "../components/CentralCard/Header/Header";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
      <Background>
        <CentralCard>
          <Header />
          <Body>{props.children}</Body>
          <Footer />
        </CentralCard>
      </Background>
  );
};

export default Layout;
