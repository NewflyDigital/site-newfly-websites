import Document, { Html, Head, Main, NextScript } from "next/document";

class DocumentosSite extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context);

    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <title>Newfly Digital</title>
          <meta
            name="description"
            content="Newfly Digital Agência de Marketing"
          />
          <meta
            name="keywords"
            content="agencia de marketing, marketing barato, agencia de marketing custo-beneficio, agencia de marketing em caxais do sul, caxias do sul, marketing para empresa, marketing MEI, Marketing Industria "
          />
          <meta name="author" content="Agência AL" />
          <link
            href="https://fonts.googleapis.com/css2?family=Geologica:wght,CRSV@100..900,0&family=Wix+Madefor+Display:wght@400..800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocumentosSite;
