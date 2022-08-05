import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
