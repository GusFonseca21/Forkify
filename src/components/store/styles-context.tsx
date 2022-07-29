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
  };
  changeState: (element: string) => void;
  changeBookmarksHeaderState: (value: boolean) => void;
  changeBookmarkedRecipeState: (value: boolean) => void;
  changeFoundRecipesLoadingState: (value: boolean) => void;
  changeSelectedRecipeLoadingState: (value: boolean) => void;
  changeFoundRecipesControllerState: (value: boolean) => void;
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
  },
  changeState: () => {},
  changeBookmarksHeaderState: () => {},
  changeBookmarkedRecipeState: () => {},
  changeFoundRecipesLoadingState: () => {},
  changeSelectedRecipeLoadingState: () => {},
  changeFoundRecipesControllerState: () => {},
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

  const changeSelectedRecipeLoadingState = (value: boolean) => {
    setIsSelectedRecipeLoading(value);
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
    },
    changeState,
    changeBookmarksHeaderState,
    changeBookmarkedRecipeState,
    changeFoundRecipesLoadingState,
    changeSelectedRecipeLoadingState,
    changeFoundRecipesControllerState,
  };

  return (
    <StylesContext.Provider value={contextValue}>
      {props.children}
    </StylesContext.Provider>
  );
};

export default StylesContextProvider;
