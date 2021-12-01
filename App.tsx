import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StoreProvider, useStoreRehydrated } from 'easy-peasy'

import Navigation from './src/navigation/Navigation'
import { store } from './src/state/store'

function WaitforStateRehydration({ children }: any) {
  const isRehydrated = useStoreRehydrated()

  return isRehydrated ? children : null
}

export default function App() {
  return (
    <NavigationContainer>
      <StoreProvider store={store}>
        <WaitforStateRehydration>
          <Navigation />
        </WaitforStateRehydration>
      </StoreProvider>
    </NavigationContainer>
  )
}
