import React, { useState } from "react";

type FetchRecipesObj = {
  getSearchBarInputText: string;
  id: string;
  getNewRecipeObj: {};
  sendSearchBarInputText: (text: string) => void;
  sendRecipeId: (id: string) => void;
  getNewRecipe: (recipeData: {}) => void;
};

export const FetchRecipesContext = React.createContext<FetchRecipesObj>({
  getSearchBarInputText: "",
  id: "",
  getNewRecipeObj: {},
  sendSearchBarInputText: () => {},
  sendRecipeId: () => {},
  getNewRecipe: () => {},
});

const FetchRecipesContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [inputtedText, setInputText] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [newRecipeObj, setNewRecipeObj] = useState({});

  const sendSearchBarInputText = (search: string) => {
    setInputText(search);
  };

  const sendRecipeId = (id: string) => {
    setSelectedId(id);
  };

  const getNewRecipe = (recipeData: {}) => {
    setNewRecipeObj(recipeData);
  };

  const contextValue: FetchRecipesObj = {
    getSearchBarInputText: inputtedText,
    id: selectedId,
    getNewRecipeObj: newRecipeObj,
    sendSearchBarInputText,
    sendRecipeId,
    getNewRecipe,
  };

  return (
    <FetchRecipesContext.Provider value={contextValue}>
      {props.children}
    </FetchRecipesContext.Provider>
  );
};

export default FetchRecipesContextProvider;
