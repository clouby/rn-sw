import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorite from '../screens/Favorite'
import Character from '../screens/Character'

import FavIcon from '../components/FavIcon'
import useAuth from '../hooks/useAuth'

const Stack = createStackNavigator()

export default function FavoriteNavigation() {
  const [{ isAuth }] = useAuth()

  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={Favorite} />
      <Stack.Screen
        name="Character"
        component={Character}
        options={{
          headerRight: () => (isAuth ? <FavIcon /> : null),
        }}
      />
    </Stack.Navigator>
  )
}
