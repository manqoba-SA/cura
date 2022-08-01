import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Dimensions, StyleSheet } from "react-native";
import { useState } from "react";
import AppNavigator from "./navigation/AppNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import navigationTheme from "./navigation/navigationTheme";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState("manqoba");
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
