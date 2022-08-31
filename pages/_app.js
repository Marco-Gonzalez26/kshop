import { StateContext } from 'context/StateContext'
import React from 'react'
import AppLayout from '../components/AppLayout'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </StateContext>
  )
}

export default MyApp
