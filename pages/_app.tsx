import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head key="1">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;700;800&display=swap');
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
