import 'tachyons'
import '@/styles/globals.css'
import '@/styles/signin-form.css'
import '@/styles/user-details-form.css'
import '@/styles/expense-card-form.css'
import '@/styles/side-panel.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
