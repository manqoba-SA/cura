import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/homeScreens.jsx/Home";
import Settings from "../screens/SettingsScreen";
import CustomHeader from "../components/CustomHeader/CustomHeader";

export default function HomeNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={Home}
        options={{
          headerShown: true,
          header: (props) => <CustomHeader navigation={""} {...props} />,
        }}
        name="home"
      />
      <Stack.Screen component={Settings} name="settings" />
    </Stack.Navigator>
  );
}
