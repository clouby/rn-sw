import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Universe from '../screens/Universe'
import Character from '../screens/Character'
import FavIcon from '../components/FavIcon'

const Stack = createStackNavigator()

export default function UniverseNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Universe" component={Universe} />
      <Stack.Screen
        name="Character"
        component={Character}
        options={{
          headerRight: FavIcon,
        }}
      />
    </Stack.Navigator>
  )
}
