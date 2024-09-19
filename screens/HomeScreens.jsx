import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const HomeScreens = ({navigation,route}) => {
    const {email} = route.params;
  return (
    <SafeAreaView>
        <View>
            <Text>Welcome {email}</Text>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreens

const styles = StyleSheet.create({})