/** @format */

import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '../../type'
import { Project1, Project2, Project3, Project4, Project5, Project6, Project7 } from '../screen/project/Project'
import Home from '../screen/home/Home'
import CarOfCar from '../screen/project/CardOfCar'

const Stack = createStackNavigator<RootStackParamList>()
export default function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='CarOfCar' component={CarOfCar} />

      <Stack.Screen name='Project1' component={Project1} />
      <Stack.Screen name='Project2' component={Project2} />
      <Stack.Screen name='Project3' component={Project3} />
      <Stack.Screen name='Project4' component={Project4} />
      <Stack.Screen name='Project5' component={Project5} />
      <Stack.Screen name='Project6' component={Project6} />
      <Stack.Screen name='Project7' component={Project7} />
    </Stack.Navigator>
  )
}
