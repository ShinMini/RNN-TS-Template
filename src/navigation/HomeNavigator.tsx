/** @format */

import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '../../type'
import Project from '../screen/project/Project'
import Project2 from '../screen/project/Project2'
import Home from '../screen/Home'
import Project3 from '../screen/project/Project3'
import Project4 from '../screen/project/Project4'

const Stack = createStackNavigator<RootStackParamList>()
export default function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Project' component={Project} />
      <Stack.Screen name='Project2' component={Project2} />
      <Stack.Screen name='Project3' component={Project3} />
      <Stack.Screen name='Project4' component={Project4} />
    </Stack.Navigator>
  )
}
