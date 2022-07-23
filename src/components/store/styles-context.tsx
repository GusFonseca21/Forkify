import React, { useState } from "react";

type StylesContextObj = {
  state: {
    foundRecipesControllerState: boolean;
    bookmarkRecipeState: boolean;
    searchButtonState: boolean;
    bookmarksHeaderState: boolean;
    addRecipeHeaderState: boolean;
  };
  changeState: (element: string) => void;
};

export const StylesContext = React.createContext<StylesContextObj>({
  state: {
    foundRecipesControllerState: false,
    bookmarkRecipeState: false,
    searchButtonState: false,
    bookmarksHeaderState: false,
    addRecipeHeaderState: false,
  },
  changeState: () => {},
});

const StylesContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [foundRecipesController, setFoundRecipesController] = useState(false);
  const [bookmarkRecipeButton, setBookmarRecipe] = useState(false);
  const [searchBarButton, setSearchBarButton] = useState(false);
  const [bookmarksHeader, setBookmarksHeader] = useState(false);
  const [addRecipeHeader, setAddRecipeHeader] = useState(false);

  const changeState = (element: string) => {
    if (element === "foundRecipesController") {
      !foundRecipesController
        ? setFoundRecipesController(true)
        : setFoundRecipesController(false);
    }
    if (element === "bookmarkRecipeButton") {
      !bookmarkRecipeButton ? setBookmarRecipe(true) : setBookmarRecipe(false);
    }
    if (element === "searchButton") {
      setSearchBarButton(true);
      setTimeout(() => {
        setSearchBarButton(false);
      }, 1 * 1000);
    }
    if (element === "bookmarksHeader") {
      !bookmarksHeader ? setBookmarksHeader(true) : setBookmarksHeader(false);
    }
    if (element === "addRecipeHeader") {
      !addRecipeHeader ? setAddRecipeHeader(true) : setAddRecipeHeader(false);
    }
  };

  const contextValue: StylesContextObj = {
    state: {
      foundRecipesControllerState: foundRecipesController,
      bookmarkRecipeState: bookmarkRecipeButton,
      searchButtonState: searchBarButton,
      bookmarksHeaderState: bookmarksHeader,
      addRecipeHeaderState: addRecipeHeader,
    },
    changeState,
  };

  return (
    <StylesContext.Provider value={contextValue}>
      {props.children}
    </StylesContext.Provider>
  );
};

export default StylesContextProvider;
