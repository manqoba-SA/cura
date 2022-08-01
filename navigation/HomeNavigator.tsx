import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/homeScreens.jsx/Home";
import Settings from "../screens/SettingsScreen";

export default function HomeNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Home} name="home" />
      <Stack.Screen component={Settings} name="settings" />
    </Stack.Navigator>
  );
}
