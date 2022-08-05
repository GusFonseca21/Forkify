import React, { useState } from "react";

type StylesContextObj = {
  state: {
    foundRecipesControllerState: boolean;
    bookmarkRecipeState: boolean;
    searchButtonState: boolean;
    bookmarksHeaderState: boolean;
    addRecipeHeaderState: boolean;
    foundRecipesLoadingState: boolean;
    selectedRecipeLoadingState: boolean;
    uploadRecipeButtonState: boolean;
    deleteRecipeButtonState: boolean;
    wasRecipeDeletedState: boolean;
  };
  changeState: (element: string) => void;
  changeBookmarksHeaderState: (value: boolean) => void;
  changeBookmarkedRecipeState: (value: boolean) => void;
  changeFoundRecipesLoadingState: (value: boolean) => void;
  changeSelectedRecipeLoadingState: (value: boolean) => void;
  changeFoundRecipesControllerState: (value: boolean) => void;
  clickAnimationUploadButton: () => void;
  changeDeleteRecipeButton: (value: boolean) => void;
  wasRecipeDeleted: () => void;
};

export const StylesContext = React.createContext<StylesContextObj>({
  state: {
    foundRecipesControllerState: false,
    bookmarkRecipeState: false,
    searchButtonState: false,
    bookmarksHeaderState: false,
    addRecipeHeaderState: false,
    foundRecipesLoadingState: false,
    selectedRecipeLoadingState: false,
    uploadRecipeButtonState: false,
    deleteRecipeButtonState: false,
    wasRecipeDeletedState: false,
  },
  changeState: () => {},
  changeBookmarksHeaderState: () => {},
  changeBookmarkedRecipeState: () => {},
  changeFoundRecipesLoadingState: () => {},
  changeSelectedRecipeLoadingState: () => {},
  changeFoundRecipesControllerState: () => {},
  clickAnimationUploadButton: () => {},
  changeDeleteRecipeButton: () => {},
  wasRecipeDeleted: () => {},
});

const StylesContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [foundRecipesController, setFoundRecipesController] = useState(false);
  const [bookmarkRecipeButton, setBookmarRecipe] = useState(false);
  const [searchBarButton, setSearchBarButton] = useState(false);
  const [bookmarksHeader, setBookmarksHeader] = useState(false);
  const [addRecipeHeader, setAddRecipeHeader] = useState(false);
  const [isFoundRecipesLoading, setIsFoundRecipesLoading] = useState(false);
  const [isSelectedRecipeLoading, setIsSelectedRecipeLoading] = useState(false);
  const [uploadedRecipeButton, setUploadedRecipeButton] = useState(false);
  const [deleteButton, setDeleteButton] = useState(false);
  const [deletedRecipeState, setDeletedRecipeState] = useState(false);

  const changeState = (element: string) => {
    if (element === "searchButton") {
      setSearchBarButton(true);
      setTimeout(() => {
        setSearchBarButton(false);
      }, 1 * 1000);
    }
    if (element === "addRecipeHeader") {
      !addRecipeHeader ? setAddRecipeHeader(true) : setAddRecipeHeader(false);
    }
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

  const clickAnimationUploadButton = () => {
    setUploadedRecipeButton(true);
    setTimeout(() => {
      setUploadedRecipeButton(false);
    }, 1 * 1000);
  };

  const wasRecipeDeleted = () => {
    setDeletedRecipeState(true);
    setTimeout(() => {
      setDeletedRecipeState(false);
    }, 1);
  };

  const contextValue: StylesContextObj = {
    state: {
      foundRecipesControllerState: foundRecipesController,
      bookmarkRecipeState: bookmarkRecipeButton,
      searchButtonState: searchBarButton,
      bookmarksHeaderState: bookmarksHeader,
      addRecipeHeaderState: addRecipeHeader,
      foundRecipesLoadingState: isFoundRecipesLoading,
      selectedRecipeLoadingState: isSelectedRecipeLoading,
      uploadRecipeButtonState: uploadedRecipeButton,
      deleteRecipeButtonState: deleteButton,
      wasRecipeDeletedState: deletedRecipeState,
    },
    changeState,
    changeBookmarksHeaderState,
    changeBookmarkedRecipeState,
    changeFoundRecipesLoadingState,
    changeSelectedRecipeLoadingState,
    changeFoundRecipesControllerState,
    clickAnimationUploadButton,
    changeDeleteRecipeButton,
    wasRecipeDeleted,
  };

  return (
    <StylesContext.Provider value={contextValue}>
      {props.children}
    </StylesContext.Provider>
  );
};

export default StylesContextProvider;
