/** @format */

import { Pressable, StyleSheet, Text, View, ViewToken } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'

import Font from '../constants/Font'
import { Colors } from '../constants/Colors'
import { FlatList } from 'react-native-gesture-handler'
import Layout from '../constants/Layout'
import { RootStackParamList } from '../../type'
import { useSharedValue } from 'react-native-reanimated'

type ScreenProps = keyof RootStackParamList
const SCREENS: ScreenProps[] = ['Project', 'Project2', 'Project2', 'Project4']

const Home = () => {
  const navigation = useMemo(() => useNavigation(), [])
  const viewableItems = useSharedValue<ViewToken[]>([])
  useEffect(() => {
    console.log(viewableItems.value)
  }, [viewableItems.value])

  return (
    <View style={StyleSheet.absoluteFill}>
      <View style={[styles.centerView]}>
        <FlatList
          data={SCREENS}
          onViewableItemsChanged={({ viewableItems: viewItems }) => {
            viewableItems.value = viewItems
          }}
          horizontal
          contentContainerStyle={{ alignItems: 'center' }}
          renderItem={({ item }) => (
            <Pressable style={styles.box} onPress={() => navigation.navigate(`${item}`)}>
              <Text>{item}</Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  )
}

export default Home

const { width } = Layout.window
const CARD_WIDTH = width * 0.8
const CARD_MARGIN = (width - CARD_WIDTH) / 2

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    backgroundColor: Colors.button,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    marginHorizontal: CARD_MARGIN,

    width: CARD_WIDTH,
    aspectRatio: 1.5,
    backgroundColor: Colors.darkBlue,

    borderRadius: 15,

    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    fontSize: 50,
    color: Colors.white,
    fontFamily: Font.gilroyBold,
  },
  centerView: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontFamily: Font.acmeRegular,
    color: Colors.text,
  },
})
