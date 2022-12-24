/** @format */

import { Button, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './Prjoject.styles'
import car from './../../../assets/lottie/car-lottie.json'
import LottieView from 'lottie-react-native'

const CarOfCar = () => {
  const [animSource, setAnimSource] = useState(car)
  const lottieRef = useRef<LottieView>(null)

  if (animSource === null) return <View />
  return (
    <View style={styles.view}>
      <LottieView autoPlay ref={lottieRef} style={styles.lottieViewContainer} source={animSource} />
      <View style={styles.btnContainer}>
        <Button
          title='Restart Animation'
          onPress={() => {
            lottieRef.current?.reset()
            lottieRef.current?.play()
          }}
        />
      </View>
    </View>
  )
}

export default CarOfCar
