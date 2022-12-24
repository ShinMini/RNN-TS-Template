/** @format */

import { StyleSheet } from 'react-native'
import Layout from '../../constants/Layout'
import { Colors } from '../../constants/Colors'
import Font from '../../constants/Font'

const { width } = Layout.window
export const CARD_WIDTH = width * 0.6
export const CARD_MARGIN = 20

export const homeStyle = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    paddingRight: CARD_MARGIN,
  },
  btnContainer: {
    position: 'absolute',
    bottom: 150,
    width: width / 2,

    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',

    width: 50,
    aspectRatio: 1,
    borderRadius: 5,
    backgroundColor: '#e6bcd7ca',
  },
  box: {
    marginLeft: CARD_MARGIN,

    width: CARD_WIDTH,
    aspectRatio: 0.8,
    backgroundColor: Colors.darkBlue,

    borderRadius: 15,

    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    fontSize: 50,
    color: Colors.white,
    fontFamily: Font.gilroyBold,

    textAlign: 'left',
  },
  centerView: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
