import { AppProps } from "next/app";

import StateContextProvider from "../src/components/store/styles-context";
import FetchRecipesContextProvider from "../src/components/store/fetch-recipes-context";

import "../styles/globals.css";
import ErrorContextProvider from "../src/components/store/error-context";
import Layout from "../src/Layout/Layout";
// import BookmarkContextProvider from "../src/components/store/bookmark-recipe-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FetchRecipesContextProvider>
        <StateContextProvider>
          {/* <BookmarkContextProvider> */}
            <ErrorContextProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ErrorContextProvider>
          {/* </BookmarkContextProvider> */}
        </StateContextProvider>
      </FetchRecipesContextProvider>
    </>
  );
}

export default MyApp;
