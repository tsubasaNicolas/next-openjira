import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

//

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // const originalRenderPage = ctx.renderPage;

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="stylesheet" />
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          <link rel="shortcut icon" href="/favicon.ico" />
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
