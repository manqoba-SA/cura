import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import SlidesScreen from "./screens/SlidesScreen";
// import React from 'react';
import { Dimensions, StyleSheet } from "react-native";
import { useState } from "react";
import AppNavigator from "./navigation/AppNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import navigationTheme from "./navigation/navigationTheme";
// import AuthNavigator from "./navigation/AuthNavigator";
const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState("manqoba");
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}> */}
      {user ? <AppNavigator /> : <AuthNavigator />}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
