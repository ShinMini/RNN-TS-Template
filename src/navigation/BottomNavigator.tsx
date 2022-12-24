/** @format */
import * as React from 'react'

import { NavigationContainer, RouteProp } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootStackParamList } from '../../type'

// screens
import Home from '../screen/Home'
import Heart from '../screen/Heart'
import Setting from '../screen/Setting'

import { screenOptions } from './BottomNavigator.config'
import HomeNavigator from './HomeNavigator'

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Tab = createBottomTabNavigator<RootStackParamList>()
function RootNavigator() {
  return (
    <Tab.Navigator initialRouteName='HomeNavigator' screenOptions={screenOptions}>
      <Tab.Screen name='HomeNavigator' component={HomeNavigator} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name='Heart' component={Heart} />
      <Tab.Screen name='Setting' component={Setting} />
    </Tab.Navigator>
  )
}
