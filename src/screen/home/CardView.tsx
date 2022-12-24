/** @format */

import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { MotiView } from 'moti'
import { ScreenProps } from './Home'
import Animated, { interpolate, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { BlurView } from 'expo-blur'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../styles'
import { CardAnimationActionType } from '../../state/action-types/index'

type CardViewProps = {
  rotate: string
  scale?: number
  item: ScreenProps
}
const CardView: FC<CardViewProps> = ({ rotate, item, scale = 1 }) => {
  const navigation = useNavigation()
  return (
    <MotiView
      from={{ transform: [{ rotateY: '5deg' }, { rotateZ: '5deg' }] }}
      animate={{ transform: [{ rotateY: rotate }, { scale }] }}
      transition={{
        type: 'spring',
      }}>
      <Pressable onPress={() => navigation.navigate(`${item}`)}>
        <Animated.View style={[styles.box]}>
          <Text style={styles.boxText}>{item}</Text>
        </Animated.View>
      </Pressable>
    </MotiView>
  )
}

export default CardView
