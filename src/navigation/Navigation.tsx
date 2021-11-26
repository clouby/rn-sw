import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from '@expo/vector-icons/MaterialCommunityIcons'

import FavoriteNavigation from './FavoriteNavigation'
import UniverseNavigation from './UniverseNavigation'
import AccountNavigation from './AccountNavigation'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Universe"
        component={UniverseNavigation}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="web" color={color} size={size} />
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteNavigation}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="heart-outline" color={color} size={size} />
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon name="account-circle-outline" color={color} size={size} />
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}
