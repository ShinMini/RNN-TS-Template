/** @format */

import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '../../type'
import Home from '../screen/home/Home'
import CarInfo from '../screen/project/CarInfo'
import InputList from '../screen/project/InputList'
import { Project1, Project2, Project3 } from '../screen/project/Project'

const Stack = createStackNavigator<RootStackParamList>()
export default function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='CarInfo' component={CarInfo} />
      <Stack.Screen name='InputList' component={InputList} />

      <Stack.Screen name='Project1' component={Project1} />
      <Stack.Screen name='Project2' component={Project2} />
      <Stack.Screen name='Project3' component={Project3} />
    </Stack.Navigator>
  )
}
