import React, { useState, useEffect } from "react";

type FetchRecipesObj = {
  getInputText: (text: string) => void;
  inputText: string;
  getId: (id: string) => void;
  id: string;
};

export const FetchRecipesContext = React.createContext<FetchRecipesObj>({
  getInputText: () => {},
  inputText: "",
  getId: () => {},
  id: "",
});

const FetchRecipesContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [inputtedText, setInputText] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const getInputText = (search: string) => {
    setInputText(search);
  };

  const getId = (id: string) => {
    setSelectedId(id);
  };

  const contextValue: FetchRecipesObj = {
    getInputText,
    inputText: inputtedText,
    getId,
    id: selectedId,
  };

  return (
    <FetchRecipesContext.Provider value={contextValue}>
      {props.children}
    </FetchRecipesContext.Provider>
  );
};

export default FetchRecipesContextProvider;
