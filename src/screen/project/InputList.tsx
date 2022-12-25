/** @format */

import { Button, View } from 'react-native'
import React, { useRef } from 'react'
import { styles } from './Project.styles'
import { TextInput } from 'react-native-gesture-handler'

const InputList = () => {
  const inputRef = useRef<TextInput>(null)

  return (
    <View style={styles.view}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>
      <View style={styles.btnContainer}>
        <Button title='Submit' onPress={() => {}} />
      </View>
    </View>
  )
}
export default InputList
