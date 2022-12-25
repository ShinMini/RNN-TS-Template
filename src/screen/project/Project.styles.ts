/** @format */

import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'
import Layout from '../../constants/Layout'
import Font from '../../constants/Font'

const { width, height } = Layout.window
const LOTTIE_CARD = width * 0.8
const LOTTIE_MARGIN = (width - LOTTIE_CARD) / 2
export const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.background,

    flexDirection: 'column',
    alginItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: width / 1.5,
    height: LOTTIE_MARGIN,
    alignItems: 'center',

    flexDirection: 'column',
  },
  input: {
    fontSize: 25,
    borderRadius: 15,

    padding: 5,
    marginTop: 15,
  },
  goBackBtn: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    position: 'absolute',
    zIndex: 100,

    alignItems: 'center',
    justifyContent: 'center',
    top: 50,
    left: 20,
  },
  lottieView: {
    alginItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    marginTop: 35,
  },
  loadingText: {
    fontSize: 30,
    fontFamily: Font.playRegular,
    color: Colors.text,
  },
  loadingContainer: {
    alignSelf: 'center',
    top: height / 1.6,
    position: 'absolute',
  },
  text: {
    textAlign: 'center',
    color: Colors.text,
    fontSize: 25,
  },
})
