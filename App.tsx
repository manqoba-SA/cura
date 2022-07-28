import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import SlidesScreen from "./screens/SlidesScreen";
// import React from 'react';
import { Dimensions, StyleSheet } from "react-native";
const Stack = createNativeStackNavigator();

export default function App() {
  const { width, height } = Dimensions.get("window");
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
