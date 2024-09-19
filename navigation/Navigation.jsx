import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreens from "../screens/SplashScreens";
import LoginScreens from "../screens/LoginScreens";
import SignupScreens from "../screens/SignupScreens";
import HomeScreens from "../screens/HomeScreens";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreens}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
