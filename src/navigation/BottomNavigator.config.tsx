/** @format */

import { RouteProp, ParamListBase } from '@react-navigation/native'
import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors'
import { Ionicons as Icon } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

const NAV_WIDTH = width * 0.9
const NAV_HEIGHT = height * 0.08
const NAV_MARGIN = (width - NAV_WIDTH) / 2
const ICON_SIZE = NAV_MARGIN * 1.6

// tab bar icons
type TabBarIconProps = {
  focused: boolean
  color: string
  size: number
}

type IonIconsProps = keyof typeof Icon.glyphMap

const icons: Record<string, IonIconsProps[]> = {
  HomeNavigator: ['home', 'home-outline'],
  Heart: ['heart', 'heart-outline'],
  Setting: ['settings', 'settings-outline'],
}

export const screenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }) => {
  return {
    headerShown: false,
    tabBarStyle: styles.bottomNavStyle,
    tabBarLabelStyle: { color: Colors.text, top: NAV_HEIGHT - NAV_MARGIN + 5, position: 'absolute' },
    tabBarIconStyle: { fontSize: ICON_SIZE },
    tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
      const { name } = route
      const focusedSize = focused ? size + 6 : size
      const focusedColor = focused ? Colors.orange : Colors.darkBlue
      const [icon, iconOutline] = icons[name]
      const iconName = focused ? icon : iconOutline

      return <Icon name={iconName} size={focusedSize} color={focusedColor} />
    },
  }
}

const styles = StyleSheet.create({
  bottomNavStyle: {
    position: 'absolute',
    width: NAV_WIDTH,
    height: NAV_HEIGHT,
    marginLeft: NAV_MARGIN,
    bottom: NAV_MARGIN * 2,

    backgroundColor: Colors.button,

    borderRadius: 15,

    shadowColor: Colors.orange,
    shadowOffset: {
      width: 2,
      height: 11,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
})
