import { View, Text } from "react-native";
import React from "react";
import SecondDiagnoseScreen from "../../screens/diagnoseScreens/SecondDiagnoseScreen";
import DiagnoseScreen from "../../screens/diagnoseScreens/DiagnoseScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function DiagnosisSectionNavigators() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Screen
        component={DiagnoseScreen}
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        name="diagnosis"
      />
      <Stack.Screen
        component={SecondDiagnoseScreen}
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        name="SecondDiagnosis"
      />
    </>
  );
}
