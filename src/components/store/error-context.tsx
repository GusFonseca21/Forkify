import React, { useState } from "react";

type ErrorObj = {
  getFetchRecipesErrorMessage: (message: string) => void;
  getFetchSelectedRecipeErrorMessage: (message: string) => void;
  changeFetchRecipesStatus: (status: boolean) => void;
  changeFetchSelectedRecipeStatus: (status: boolean) => void;
  fetchRecipesErrorMessage: string;
  fetchSelectedRecipeErrorMessage: string;
  fetchRecipesStatus: boolean;
  fetchSelectedRecipeStatus: boolean;
};

export const ErrorContext = React.createContext<ErrorObj>({
  getFetchRecipesErrorMessage: () => {},
  getFetchSelectedRecipeErrorMessage: () => {},
  changeFetchRecipesStatus: () => {},
  changeFetchSelectedRecipeStatus: () => {},
  fetchRecipesErrorMessage: "",
  fetchSelectedRecipeErrorMessage: "",
  fetchRecipesStatus: true,
  fetchSelectedRecipeStatus: true,
});

const ErrorContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [fetchRecipesError, setFetchRecipesError] = useState("");
  const [fetchSelectedRecipeError, setFetchSelectedRecipeError] = useState("");
  const [fetchRecipesStatus, setFetchRecipeStatus] = useState(false);
  const [fetchSelectedRecipeStatus, setFetchSelectedRecipeStatus] =
    useState(true);

  const getFetchRecipesErrorMessage = (message: string) => {
    setFetchRecipesError(message);
  };
  const getFetchSelectedRecipeErrorMessage = (message: string) => {
    setFetchSelectedRecipeError(message);
  };

  const changeFetchRecipesStatus = (status: boolean) => {
    if (status) setFetchRecipeStatus(false);
    if (!status) setFetchRecipeStatus(true);
  };
  const changeFetchSelectedRecipeStatus = (status: boolean) => {
    if (status) setFetchSelectedRecipeStatus(false);
    if (!status) setFetchSelectedRecipeStatus(true);
  };

  const contextValue: ErrorObj = {
    getFetchRecipesErrorMessage,
    getFetchSelectedRecipeErrorMessage,
    changeFetchRecipesStatus,
    changeFetchSelectedRecipeStatus,
    fetchRecipesErrorMessage: fetchRecipesError,
    fetchSelectedRecipeErrorMessage: fetchSelectedRecipeError,
    fetchRecipesStatus: fetchRecipesStatus,
    fetchSelectedRecipeStatus: fetchSelectedRecipeStatus,
  };
  return (
    <ErrorContext.Provider value={contextValue}>
      {props.children}
    </ErrorContext.Provider>
  );
};

export default ErrorContextProvider;
