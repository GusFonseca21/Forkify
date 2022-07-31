import { AppProps } from "next/app";

import StateContextProvider from "../src/components/store/styles-context";
import FetchRecipesContextProvider from "../src/components/store/fetch-recipes-context";

import "../styles/globals.css";
import ErrorContextProvider from "../src/components/store/error-context";
import Layout from "../src/Layout/Layout";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  setTimeout(
    () =>
      document
        .querySelector("meta[name=viewport]")
        ?.setAttribute(
          "content",
          "height=" +
            screen.height * 0.9 +
            "px, width=device-width, initial-scale=1.0"
        ),
    300
  );
  return (
    <>
      <FetchRecipesContextProvider>
        <StateContextProvider>
          <ErrorContextProvider>
            <Layout>
              <Head>
                <meta
                  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                  name="viewport"
                />
                <Component {...pageProps} />
              </Head>
            </Layout>
          </ErrorContextProvider>
        </StateContextProvider>
      </FetchRecipesContextProvider>
    </>
  );
}

export default MyApp;
