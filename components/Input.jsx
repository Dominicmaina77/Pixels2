import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'
import { hp } from '../helpers/common'

const Input = (props) => {
  return (
    <View style={[styles.container, props.containerStyles && props.containerStyles ]} className="">
    {
        props.icon && props.icon
    }
    <TextInput 
        className=""
        placeholderTextColor={theme.colors.textLight}
        ref={props.inputRef && props.inputRef}
        {...props}
    />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: hp(7.2),
        alignItems: 'center',
        justifyContent: '',
        borderWidth: 0.4,
        borderColor: theme.colors.text,
        borderRadius: theme.radius.xxl,
        paddingHorizontal: 18,
        gap: 12,
        borderCurve: 'continuous',
        marginBottom: 20,
        
    }
})