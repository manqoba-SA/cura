import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HealthLibraryScreen from "../screens/healthLibraryScreens/HealthLibraryScreen";

export default function HealthLibraryNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={HealthLibraryScreen} name="healthLibrary" />
    </Stack.Navigator>
  );
}
