import { AppProps } from "next/app";

import StateContextProvider from "../src/components/store/styles-context";
import FetchRecipesContextProvider from "../src/components/store/fetch-recipes-context";

import "../styles/globals.css";
import ErrorContextProvider from "../src/components/store/error-context";
import Layout from "../src/Layout/Layout";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FetchRecipesContextProvider>
        <StateContextProvider>
          <ErrorContextProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
          </ErrorContextProvider>
        </StateContextProvider>
      </FetchRecipesContextProvider>
    </>
  );
}

export default MyApp;
