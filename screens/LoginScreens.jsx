import { Alert, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Input from '../components/Input'
import Icon from '../assets/icons'
import Button from '../components/Button'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase'
// import { theme } from '../constants/theme'
// import Icon from '../assets/icons'


const LoginScreens = ({navigation}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading, setLoading]= useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  const SignIn = async() =>{
    setLoading(true)
    await signInWithEmailAndPassword(auth,email,password)
    .then((usercredentials)=>{
      Alert.alert('Logged In Successfully')
      const user = usercredentials.user;
      console.log(user)
      const loggedemail = user.email;
      setLoading(false)
      navigation.navigate('Home',{email:loggedemail})
    })
    .catch((error)=>{
      console.error(error)
      // Alert("email or password wrong")
      setLoading(false)
      Alert.alert('Error', error.message)
    })

  }
  return (
    <SafeAreaView className="flex-1 bg-white mt-32 ">
    {/* welcome */}
     <View className="">
     <Text className="text-3xl text-gray-700">Hey,</Text>
     <Text className="text-3xl text-gray-700">Welcome Back</Text>
     </View>
     {/* form */}
     <View className="my-10 ">
        <Text className="  text-gray-700 mb-2">Please Login to continue</Text>
        <Input
          className="w-60 "
          icon={<Icon name='mail' size={26} strokeWidth={1.6} />}
          placeholder='Enter your email'
          value={email}
          onChangeText={(text)=>setEmail(text.toLowerCase())}
        />
        <Input
          className="w-60 "
          icon={<Icon name='lock' size={26} strokeWidth={1.6} />}
          secureTextEntry={true}
          placeholder='Enter your password'
          value={password}
          onChangeText={(text)=>setPassword(text)}
        />
        <Text className="left-52">
          Forgot Password?
        </Text>
        {/* button */}
      <Button  title={'Login'} loading={loading} onPress={SignIn} />
     </View>
     <View className="flex-row ">
      <Text className="">Don't have an account? </Text>
      <Pressable onPress={()=> navigation.navigate('Signup')}>
        <Text className="text-green-500 font-semibold ">SignUp</Text>
      </Pressable>
     </View>
    </SafeAreaView>
  )
}

export default LoginScreens

const styles = StyleSheet.create({})