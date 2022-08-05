import { AppProps } from "next/app";

import StateContextProvider from "../src/components/store/styles-context";
import FetchRecipesContextProvider from "../src/components/store/fetch-recipes-context";

import "../styles/globals.css";
import ErrorContextProvider from "../src/components/store/error-context";
import Layout from "../src/Layout/Layout";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  // setTimeout(
  //   () =>
  //     document
  //       .querySelector("meta[name=viewport]")
  //       ?.setAttribute(
  //         "content",
  //         "height=" +
  //           screen.height * 0.9 +
  //           "px, width=device-width, initial-scale=1.0"
  //       ),
  //   300
  // );
  return (
    <>
      <FetchRecipesContextProvider>
        <StateContextProvider>
          <ErrorContextProvider>
            <Head>
              {/* <meta
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                name="viewport"
              /> */}
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;700;800&display=swap"
                rel="stylesheet"
              />
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
              />
              <meta
                name="keywords"
                content="Forkify, TypeScript, CSS, Next.js, Nextjs"
              />
              <meta
                name="title"
                content="Forkify | Search over 1.000 recipes online!"
              />
              <meta
                name="description"
                content="Forkify is a website where you can search and add over 1.000 recipes"
              />
              <meta name="author" content="Gustavo Fonseca de Araújo" />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Head>
          </ErrorContextProvider>
        </StateContextProvider>
      </FetchRecipesContextProvider>
    </>
  );
}

export default MyApp;
