/** @format */

import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  HomeNavigator: undefined
  Heart: undefined
  Setting: undefined

  Home: undefined
  Project: undefined
  Project2: undefined
  Project3: undefined
  Project4: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>
