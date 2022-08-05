import React, { useState } from "react";

type FetchRecipesObj = {
  inputText: string;
  id: string;
  newRecipe: {};
  getInputText: (text: string) => void;
  getId: (id: string) => void;
  getNewRecipe: (recipeData: {}) => void;
};

export const FetchRecipesContext = React.createContext<FetchRecipesObj>({
  inputText: "",
  id: "",
  newRecipe: {},
  getInputText: () => {},
  getId: () => {},
  getNewRecipe: () => {},
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
    inputText: inputtedText,
    id: selectedId,
    newRecipe,
    getInputText,
    getId,
    getNewRecipe,
  };

  return (
    <FetchRecipesContext.Provider value={contextValue}>
      {props.children}
    </FetchRecipesContext.Provider>
  );
};

export default FetchRecipesContextProvider;
