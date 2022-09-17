import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SlidesScreen from "../screens/SlidesScreen";
import LoginScreen from "../screens/welcomeScreens/LoginScreen";
import RegisterScreen from "../screens/welcomeScreens/RegisterScreen";

export default function AuthNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Register"
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
}
