import 'tachyons'
import 'flowbite';
import '@/styles/globals.css'
import '@/styles/signin-form.css'
import '@/styles/user-details-form.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}