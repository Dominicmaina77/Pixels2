import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreens from './screens/SplashScreens';
import SignupScreens from './screens/SignupScreens';
import LoginScreens from './screens/LoginScreens';
import Navigation from './navigation/Navigation';
import HomeScreens from './screens/HomeScreens';

export default function App() {
  return (
      
      <Navigation/>
  );
}

const styles = StyleSheet.create({
  
});
