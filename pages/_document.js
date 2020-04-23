import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ZEITUIProvider, CSSBaseline } from '@zeit-ui/react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <ZEITUIProvider>
            <CSSBaseline />
            <Main />
          </ZEITUIProvider>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
