/** @format */

import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'
import Layout from '../../constants/Layout'

const { width, height } = Layout.window
const LOTTIE_CARD = width * 0.8
const LOTTIE_MARGIN = (width - LOTTIE_CARD) / 2
export const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.background,
    alginItems: 'center',
    justifyContent: 'center',
  },
  lottieViewContainer: {
    backgroundColor: Colors.darkBlue,

    width: LOTTIE_CARD,
    marginLeft: LOTTIE_MARGIN / 2,

    alginItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    marginTop: 35,
  },
  text: {
    textAlign: 'center',
    color: Colors.text,
    fontSize: 25,
  },
})
