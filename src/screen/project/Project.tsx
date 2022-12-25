/** @format */

import { Button, Text, View } from 'react-native'
import React, { FC, memo, useRef } from 'react'
import { styles } from './Project.styles'
import LottieView from 'lottie-react-native'
import bombAnim from './../../../assets/lottie/bomb-lottie.json'

export type ProjectTemplateProps = {
  projectIndex?: number
}

const ProjectTemplate = () => {
  const lottieRef = useRef<LottieView>(null)
  return (
    <View style={styles.view}>
      <LottieView
        autoPlay
        ref={lottieRef}
        style={{
          width: 300,
          height: 500,
        }}
        source={bombAnim}
      />
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
const Project1 = ProjectTemplate
const Project2 = ProjectTemplate
const Project3 = ProjectTemplate
const Project4 = ProjectTemplate
const Project5 = ProjectTemplate
const Project6 = ProjectTemplate
const Project7 = ProjectTemplate

export { Project1, Project2, Project3, Project4, Project5, Project6, Project7 }
