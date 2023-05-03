import 'tachyons'
// import 'flowbite';
import '@/styles/globals.css'
import '@/styles/signin-form.css'
import '@/styles/user-details-form.css'
import '@/styles/user-details-form.css'
import '@/styles/login.css'
import '@/styles/side-panel.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
   // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  
  return (
    <ChakraProvider>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}
