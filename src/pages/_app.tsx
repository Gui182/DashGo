import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { queryClient } from '../services/queryClient'
import { theme } from '../styles/theme'
import { ReactQueryDevtools } from 'react-query/devtools'

import { QueryClientProvider } from 'react-query'
import { SideBarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SideBarDrawerProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SideBarDrawerProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
export default MyApp
