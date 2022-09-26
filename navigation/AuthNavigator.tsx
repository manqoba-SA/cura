import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SlidesScreen from "../screens/SlidesScreen";
import LoginScreen from "../screens/welcomeScreens/LoginScreen";
import RegisterScreen from "../screens/welcomeScreens/RegisterScreen";
import TermsAndConditionsScreen from "../screens/welcomeScreens/TermsAndConditionsScreen";
import RegisterWelcomeScreen from "../screens/welcomeScreens/RegisterWelcomeScreen";
import ForgotPassword from "../screens/welcomeScreens/ForgotPassword";

export default function AuthNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      <Stack.Screen
        name="TermsAndConditionsScreen"
        component={TermsAndConditionsScreen}
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="Login"
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        component={LoginScreen}
      />
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
      <Stack.Screen
        name="RegisterWelcomeScreen"
        component={RegisterWelcomeScreen}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
}
