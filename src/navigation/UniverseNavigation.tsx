import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Universe from '../screens/Universe'
import Character from '../screens/Character'
import FavIcon from '../components/FavIcon'
import useAuth from '../hooks/useAuth'

const Stack = createStackNavigator()

export default function UniverseNavigation() {
  const [{ isAuth }] = useAuth()
  return (
    <Stack.Navigator>
      <Stack.Screen name="Universe" component={Universe} />
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
