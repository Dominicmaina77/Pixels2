import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'
import Icon from '../assets/icons'

const BackButton = ({navigation}) => {
  return (
    <Pressable onPress={()=> navigation.navigate('Splash')}>
        <Icon name="ArrowLeft" size={26} strokeWidth={2.5} color={theme.colors.text}/>
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({})