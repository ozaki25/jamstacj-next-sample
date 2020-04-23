import { ZEITUIProvider, CSSBaseline } from '@zeit-ui/react'

function App({ Component, pageProps }) {
  return (
    <ZEITUIProvider>
      <CSSBaseline>
        <Component {...pageProps} />
      </CSSBaseline>
    </ZEITUIProvider>
  )
}

export default App
