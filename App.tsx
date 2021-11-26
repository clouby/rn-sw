import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StoreProvider } from 'easy-peasy'

import Navigation from './src/navigation/Navigation'
import { store } from './src/state/store'

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </StoreProvider>
  )
}
