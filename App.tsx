/** @format */
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

// user components
import Navigation from './src/navigation/BottomNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import useCachedResources from './src/hooks/useCachedResources'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from './src/state'
import { View } from 'react-native'

export default function App() {
  const isLoadingComplete = useCachedResources()
  if (!isLoadingComplete) {
    return <View />
  }
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <StatusBar style='inverted' />
        <Navigation />
      </SafeAreaProvider>
    </ReduxProvider>
  )
}
