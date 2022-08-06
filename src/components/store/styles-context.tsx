import React, { useState } from "react";

type StylesContextObj = {
  state: {
    addRecipeHeaderState: boolean;
    bookmarksHeaderState: boolean;
    bookmarkRecipeState: boolean;
    confirmDeleteRecipeState: boolean;
    deleteRecipeButtonState: boolean;
    foundRecipesControllerState: boolean;
    foundRecipesLoadingState: boolean;
    searchButtonState: boolean;
    selectedRecipeLoadingState: boolean;
    uploadRecipeButtonState: boolean;
  };
  functions: {
    animateUploadButton: () => void;
    animateSearchButton: () => void;
    changeAddRecipeHeaderState: (value: boolean) => void;
    changeBookmarksHeaderState: (value: boolean) => void;
    changeBookmarkedRecipeState: (value: boolean) => void;
    changeDeleteRecipeButton: (value: boolean) => void;
    changeFoundRecipesControllerState: (value: boolean) => void;
    changeFoundRecipesLoadingState: (value: boolean) => void;
    changeSelectedRecipeLoadingState: (value: boolean) => void;
    showConfirmDeleteRecipe: () => void;
  };
};

export const StylesContext = React.createContext<StylesContextObj>({
  state: {
    addRecipeHeaderState: false,
    bookmarksHeaderState: false,
    bookmarkRecipeState: false,
    confirmDeleteRecipeState: false,
    deleteRecipeButtonState: false,
    foundRecipesControllerState: false,
    foundRecipesLoadingState: false,
    searchButtonState: false,
    selectedRecipeLoadingState: false,
    uploadRecipeButtonState: false,
  },
  functions: {
    animateSearchButton: () => {},
    animateUploadButton: () => {},
    changeAddRecipeHeaderState: () => {},
    changeBookmarksHeaderState: () => {},
    changeBookmarkedRecipeState: () => {},
    changeDeleteRecipeButton: () => {},
    changeFoundRecipesLoadingState: () => {},
    changeSelectedRecipeLoadingState: () => {},
    changeFoundRecipesControllerState: () => {},
    showConfirmDeleteRecipe: () => {},
  },
});

const StylesContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [addRecipeHeader, setAddRecipeHeader] = useState(false);
  const [bookmarksHeader, setBookmarksHeader] = useState(false);
  const [bookmarkRecipeButton, setBookmarRecipe] = useState(false);
  const [deleteButton, setDeleteButton] = useState(false);
  const [deletedRecipeState, setDeletedRecipeState] = useState(false);
  const [foundRecipesController, setFoundRecipesController] = useState(false);
  const [isFoundRecipesLoading, setIsFoundRecipesLoading] = useState(false);
  const [isSelectedRecipeLoading, setIsSelectedRecipeLoading] = useState(false);
  const [searchBarButton, setSearchBarButton] = useState(false);
  const [uploadedRecipeButton, setUploadedRecipeButton] = useState(false);

  const animateSearchButton = () => {
    setSearchBarButton(true);
    setTimeout(() => {
      setSearchBarButton(false);
    }, 1 * 1000);
  };

  const changeAddRecipeHeaderState = (value: boolean) => {
    setAddRecipeHeader(value);
  };

  const changeBookmarksHeaderState = (value: boolean) => {
    setBookmarksHeader(value);
  };

  const changeFoundRecipesControllerState = (value: boolean) => {
    setFoundRecipesController(value);
  };

  const changeBookmarkedRecipeState = (value: boolean) => {
    setBookmarRecipe(value);
  };

  const changeFoundRecipesLoadingState = (value: boolean) => {
    setIsFoundRecipesLoading(value);
  };

  const changeDeleteRecipeButton = (value: boolean) => {
    setDeleteButton(value);
  };

  const changeSelectedRecipeLoadingState = (value: boolean) => {
    setIsSelectedRecipeLoading(value);
  };

  const animateUploadButton = () => {
    setUploadedRecipeButton(true);
    setTimeout(() => {
      setUploadedRecipeButton(false);
    }, 1 * 1000);
  };

  const showConfirmDeleteRecipe = () => {
    setDeletedRecipeState(true);
    setTimeout(() => {
      setDeletedRecipeState(false);
    }, 1);
  };

  const contextValue: StylesContextObj = {
    state: {
      addRecipeHeaderState: addRecipeHeader,
      bookmarksHeaderState: bookmarksHeader,
      bookmarkRecipeState: bookmarkRecipeButton,
      deleteRecipeButtonState: deleteButton,
      foundRecipesControllerState: foundRecipesController,
      foundRecipesLoadingState: isFoundRecipesLoading,
      searchButtonState: searchBarButton,
      selectedRecipeLoadingState: isSelectedRecipeLoading,
      uploadRecipeButtonState: uploadedRecipeButton,
      confirmDeleteRecipeState: deletedRecipeState,
    },
    functions: {
      changeAddRecipeHeaderState,
      changeBookmarksHeaderState,
      changeBookmarkedRecipeState,
      changeDeleteRecipeButton,
      changeFoundRecipesLoadingState,
      changeFoundRecipesControllerState,
      changeSelectedRecipeLoadingState,
      animateSearchButton,
      animateUploadButton,
      showConfirmDeleteRecipe,
    },
  };

  return (
    <StylesContext.Provider value={contextValue}>
      {props.children}
    </StylesContext.Provider>
  );
};

export default StylesContextProvider;
