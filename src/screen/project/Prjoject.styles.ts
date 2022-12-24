/** @format */

import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.background,
    alginItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: Colors.text,
    fontSize: 25,
  },
})
