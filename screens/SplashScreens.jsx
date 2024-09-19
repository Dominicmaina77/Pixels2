import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, Pressable } from 'react-native'
import React from 'react'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import Button from '../components/Button'

const SplashScreens = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
     <StatusBar style='dark'/>
        <View className="justify-center items-center ">
          {/* {welcome image} */}
          <Image  source={require("../assets/images/welcome.png")} className="w-8/12 h-3/4 bottom-16" resizeMode='contain'/>
         
         {/* title */}

         <View  className="bottom-14 justify-center items-center">
           <Text className="text-4xl self-center font-bold text-gray-700"> LinkUp!</Text>
           <Text className="mx-10 text-lg align-center ">
            Where every Thought finds a home and every image tells a story.
           </Text>
         </View>
           {/* footer */}
          <View className=" justify-center items-center">
            <Button
              title='Getting started'
              buttonStyle={{marginHorizontal: wp(3)}}
              onPress={()=> navigation.navigate('Signup')}              
            />
            <View className="flex-row mt-3">
              <Text>Already have an account! </Text>
              <Pressable onPress={()=> navigation.navigate('Login')}>
                <Text className="font-semibold text-green-500">Login</Text>
              </Pressable>
            </View>
          </View>

        </View>
    </SafeAreaView>
  )
}

export default SplashScreens

const styles = StyleSheet.create({
    // container:{
    //   flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'space-around',
    //   backgroundColor: 'white',
    // },
    // welcomeImage:{
    //   width: wp(30),
    //   height: hp(100),
    //   alignSelf: 'center',
    // },
    // title:{
    //   color: theme.colors.text,
    //   fontSize: hp(4),
    //   fontWeight: theme.fonts.extrabold,
    //   textAlign: 'center',
    // },
    // punchline:{
    //   color: theme.colors.text,
    //   fontSize: hp(1.7),
    //   textAlign: 'center',
    // },
})