/** @format */

import { AnimatedLottieViewProps } from 'lottie-react-native'
/** @format */

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ProjectTemplateProps } from './src/screen/project/Project'

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
  CarOfCar: undefined

  Project1: undefined
  Project2: undefined
  Project3: undefined
  Project4: undefined
  Project5: undefined
  Project6: undefined
  Project7: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>
