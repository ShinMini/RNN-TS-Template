/** @format */

import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { FlatList } from 'react-native-gesture-handler'
import { RootStackParamList } from '../../../type'
import { styles } from '../styles'
import CardView from './CardView'
import SlideBtn from './SlideBtn'

export type ScreenProps = keyof RootStackParamList

const SCREENS: ScreenProps[] = ['CarOfCar', 'Project1', 'Project2', 'Project3', 'Project4', 'Project5', 'Project6', 'Project7']

const Home = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const cardRef = useRef<FlatList>(null)

  useEffect(() => {
    cardRef.current?.scrollToIndex({
      index: activeIndex,
      animated: true,
    })
  }, [activeIndex])

  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={[styles.centerView]}>
        <FlatList
          ref={cardRef}
          initialScrollIndex={activeIndex}
          data={SCREENS}
          horizontal
          contentContainerStyle={styles.contentContainer}
          renderItem={({ item, index }) =>
            index === activeIndex ? <CardView item={item} rotate='0deg' /> : <CardView item={item} rotate='30deg' scale={0.8} />
          }
        />
        <SlideBtn screens={SCREENS} setIndex={setActiveIndex} />
      </View>
    </View>
  )
}

export default Home
