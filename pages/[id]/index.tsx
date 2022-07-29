import React from "react";

import Layout from "../../src/Layout/Layout";

const RecipePage: React.FC<{ children: React.ReactNode }> = (props) => {
  return <Layout>{props.children}</Layout>;
};

export default RecipePage;
