import React, { useState } from "react";

type FetchRecipesObj = {
  getInputText: (text: string) => void;
  inputText: string;
  getId: (id: string) => void;
  id: string;
  getNewRecipe: (recipeData: {}) => void;
  newRecipe: {};
};

export const FetchRecipesContext = React.createContext<FetchRecipesObj>({
  getInputText: () => {},
  inputText: "",
  getId: () => {},
  id: "",
  getNewRecipe: () => {},
  newRecipe: {},
});

const FetchRecipesContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [inputtedText, setInputText] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [newRecipe, setNewRecipe] = useState({});

  const getInputText = (search: string) => {
    setInputText(search);
  };

  const getId = (id: string) => {
    setSelectedId(id);
  };

  const getNewRecipe = (recipeData: {}) => {
    setNewRecipe(recipeData);
  };

  const contextValue: FetchRecipesObj = {
    getInputText,
    inputText: inputtedText,
    getId,
    id: selectedId,
    getNewRecipe,
    newRecipe,
  };

  return (
    <FetchRecipesContext.Provider value={contextValue}>
      {props.children}
    </FetchRecipesContext.Provider>
  );
};

export default FetchRecipesContextProvider;
