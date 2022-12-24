/** @format */

import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC, SetStateAction } from 'react'

import { styles } from '../styles'
import { ScreenProps } from './Home'
import { Ionicons } from '@expo/vector-icons'

type SlideBtn = {
  screens: ScreenProps[]
  setIndex: React.Dispatch<SetStateAction<number>>
}
const SlideBtn: FC<SlideBtn> = ({ setIndex, screens }) => {
  return (
    <View style={styles.btnContainer}>
      <Pressable onPress={() => setIndex((prev) => (prev !== 0 ? prev - 1 : 0))}>
        <View style={styles.btn}>
          <Ionicons name='arrow-back' size={40} />
        </View>
      </Pressable>
      <Pressable onPress={() => setIndex((prev) => (prev = prev !== screens.length - 1 ? prev + 1 : prev))}>
        <View style={styles.btn}>
          <Ionicons name='arrow-forward' size={40} />
        </View>
      </Pressable>
    </View>
  )
}

export default SlideBtn
