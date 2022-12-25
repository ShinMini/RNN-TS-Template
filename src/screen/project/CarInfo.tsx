/** @format */

import { Button, Text, View, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './Project.styles'
import LottieView from 'lottie-react-native'
import carLottie from './../../../assets/lottie/cars-lottie.json'
import { useNavigation } from '@react-navigation/native'
import { BlurView } from 'expo-blur'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'

const CarInfo = () => {
  const [animSource, setAnimSource] = useState(carLottie)
  const lottieRef = useRef<LottieView>(null)

  const navigator = useNavigation()

  return (
    <View style={styles.view}>
      <Pressable onPress={() => navigator.goBack()} style={styles.goBackBtn}>
        <Ionicons name='arrow-back-circle-outline' size={50} color={Colors.darkBlue} />
      </Pressable>
      <LottieView autoPlay ref={lottieRef} style={styles.lottieView} source={animSource} />
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    </View>
  )
}

export default CarInfo
