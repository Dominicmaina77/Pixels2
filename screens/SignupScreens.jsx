import { Alert, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Input from '../components/Input'
import Icon from '../assets/icons'
import Button from '../components/Button'
import { firebaseConfig } from '../firebase'
// import { supabase } from '../lib/supabase'
// import { theme } from '../constants/theme'
// import Icon from '../assets/icons'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import { initializeApp } from 'firebase/app'

const SignupScreens = ({navigation}) => {
  // const emailRef = useRef('dev.jimin02@gmail.com');
  // const passwordRef = useRef('123456');
  // const nameRef = useRef('Jimmy');
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  // const [name,setName] = useState('')
  const [loading, setLoading]= useState(false);

  // firebase start
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);



  // const onSubmit =  async()=>{
  //   // if(!emailRef.current || !passwordRef.current){
  //   //   alert( 'Please fill all fields');
  //   //   return;
  //   // }

  //   // setLoading(true);

  //   // let name = nameRef.current.trim();
  //   // let email= emailRef.current.trim();
  //   // let password = passwordRef.current.trim();

  //   const {data: {session}, error}= await supabase.auth.signUp({
  //     email,
  //     password,
  //     options:{
  //       data:{
  //         name
  //       }
  //     }
  //   });

  //   setLoading(false);

   
  //   if(error){
  //     Alert.alert('Signup', error.message);
  //     console.log(' Signup error:', error);
  //   }else{
  //     console.log('Signup successful:', data);
  //   }
  // }
  // const onSubmit = async()=> {
  //   setLoading(true)
  //   const {
  //     data: { session },
  //     error,
  //   } = await supabase.auth.signUp({
  //     email: email,
  //     password: password,
  //     options:{
  //       data:{
  //         name
  //       }
  //     }
  //   })
    
  //   if (error) Alert.alert(error.message)
  //   if (!session) Alert.alert('Please check your inbox for email verification!')
  //     console.log("userdata",session)
  //   setLoading(false)
  // }


  const createAccount = async () => {
    setLoading(true)
    createUserWithEmailAndPassword(auth,email,password)
    .then((usercredentials)=>{
      Alert.alert('Success', 'Account created successfully')
      // navigation.navigate('Home')
      const user = usercredentials.user;
      setLoading(false)
    })
    .catch((error) => {
      Alert.alert('Error', error.message)
      setLoading(false)
    })
    
  }
  return (
    <SafeAreaView className="flex-1 bg-white mt-32">
    {/* welcome */}
     <View className="px-4">
     <Text className="text-3xl text-gray-700 ">Lets,</Text>
     <Text className="text-3xl text-gray-700">Get started</Text>
     </View>
     {/* form */}
     <View className="my-10 px-4">
        <Text className="  text-gray-700 mb-2">Please fill all details to create an account</Text>
        {/* <Input
          className="w-60 "
          icon={<Icon name='user' size={26} strokeWidth={1.6} />}
          placeholder='Enter your name'
          value={name}
          // onChangeText={value=> nameRef.current = value}
          onChangeText={(text)=> setName(text)}
        /> */}
        <Input
          className="w-60 "
          icon={<Icon name='mail' size={26} strokeWidth={1.6} />}
          placeholder='Enter your email'
          // onChangeText={value=> emailRef.current = value}
          onChangeText={(text)=>setEmail(text)}
          value={email}
        />
        <Input
          className="w-60 "
          icon={<Icon name='lock' size={26} strokeWidth={1.6} />}
          secureTextEntry={true}
          placeholder='Enter your password'
          // onChangeText={value=> passwordRef.current = value}
          onChangeText={(text)=>setPassword(text)}
          value={password}
        />
        
        {/* button */}
      <Button  title={'Sign up'} loading={loading} onPress={createAccount} />
     </View>
     <View className="flex-row px-4">
      <Text className="">Already have an account? </Text>
      <Pressable onPress={()=> navigation.navigate('Login')}>
        <Text className="text-green-500 font-semibold ">Login</Text>
      </Pressable>
     </View>
    </SafeAreaView>
  )
}

export default SignupScreens

const styles = StyleSheet.create({})