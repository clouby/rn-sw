import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorite from '../screens/Favorite'

const Stack = createStackNavigator()

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={Favorite} />
    </Stack.Navigator>
  )
}
