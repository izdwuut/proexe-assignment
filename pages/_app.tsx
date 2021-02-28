import '../styles/globals.scss'
import StoreProvider from '../utils/store'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </StoreProvider>
  )
}

export default MyApp
